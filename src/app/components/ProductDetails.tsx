
"use client";

import Link from "next/link";

interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: Market[];
}

export default function ProductDetails({
  product,
}: {
  product: Product;
}) {
  const markets = product.markets ?? [];

  
  const lowest =
    markets.length > 0
      ? Math.min(...markets.map((market) => market.min))
      : product.today;

  const highest =
    markets.length > 0
      ? Math.max(...markets.map((market) => market.max))
      : product.today;

  
  const marketAverages = markets.map(
    (market) => (market.min + market.max) / 2
  );

  
  const average =
    marketAverages.length > 0
      ? marketAverages.reduce(
          (total, value) => total + value,
          0
        ) / marketAverages.length
      : product.today;

  const change = product.change;

  const changeColor =
    change.dir === "up"
      ? "text-red-600"
      : change.dir === "down"
      ? "text-green-600"
      : "text-gray-500";

  const formatPrice = (value: number) =>
    Number.isInteger(value)
      ? value.toString()
      : value.toFixed(2);

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-4 py-6 sm:px-6">

      
      <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-[#647568]">
        <Link href="/" className="hover:text-green-700">
          হোম
        </Link>

        <span>›</span>

        <Link
          href={`/?category=${product.category}`}
          className="hover:text-green-700"
        >
          {product.categoryNameBn}
        </Link>

        <span>›</span>

        <span className="text-[#26372c]">
          {product.nameBn}
        </span>
      </nav>

      
      <section className="flex flex-col justify-between gap-5 rounded-2xl border border-[#dce9df] bg-[#f9fcfa] p-5 sm:flex-row sm:items-center sm:p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f0] text-3xl">
            {product.image || product.categoryIcon}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#1c3025] sm:text-3xl">
              {product.nameBn}
            </h1>

            <p className="mt-1 text-sm text-[#647568]">
              {product.categoryNameBn} · {product.unit}
            </p>

            <p className="mt-2 text-sm text-[#647568]">
              গতকালের তুলনায় আজকের দামের পরিবর্তন
            </p>
          </div>
        </div>

        <div className="min-w-40 rounded-2xl bg-[#eef6f0] p-4 text-center">
          <p className="text-sm text-[#647568]">
            আজকের দাম
          </p>

          <p className="text-3xl font-bold text-[#26372c]">
            {formatPrice(product.today)}
          </p>

          <p className="text-sm text-[#647568]">
            টাকা / {product.unit}
          </p>

          <p className={`mt-1 text-sm font-semibold ${changeColor}`}>
            {change.dir === "up"
              ? "▲"
              : change.dir === "down"
              ? "▼"
              : "—"}{" "}
            {Math.abs(change.pct)}%
          </p>
        </div>
      </section>

      
      <section className="mt-5 rounded-2xl border border-[#dce9df] bg-[#f9fcfa] p-5">
        <h2 className="mb-4 text-lg font-bold text-[#26372c]">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <SummaryCard
            title="সর্বনিম্ন দাম"
            amount={lowest}
            color="text-green-600"
            formatPrice={formatPrice}
          />

          <SummaryCard
            title="সর্বোচ্চ দাম"
            amount={highest}
            color="text-red-600"
            formatPrice={formatPrice}
          />

          <SummaryCard
            title="গড় দাম"
            amount={average}
            formatPrice={formatPrice}
          />
        </div>

        
        
      </section>

     
      <section className="mt-5 rounded-2xl border border-[#dce9df] bg-[#f9fcfa] p-4 sm:p-5">
        <h2 className="mb-4 text-lg font-bold text-[#26372c]">
          বাজারভিত্তিক আজকের দাম
        </h2>

        

        {markets.length > 0 ? (
          <div className="overflow-x-auto rounded-xl border border-[#dce9df]">
            <table className="w-full min-w-[650px] text-sm">
              <thead className="bg-[#f0f7f2] text-[#647568]">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold">
                    বাজার
                  </th>

                  <th className="px-4 py-4 text-left font-semibold">
                    বিভাগ
                  </th>

                  <th className="px-4 py-4 text-right font-semibold">
                    সর্বনিম্ন
                  </th>

                  <th className="px-4 py-4 text-right font-semibold">
                    সর্বোচ্চ
                  </th>

                  <th className="px-4 py-4 text-right font-semibold">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => {
                  const marketAverage =
                    (market.min + market.max) / 2;

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-t border-[#dce9df] even:bg-[#f0f7f2]"
                    >
                      <td className="px-4 py-4 font-medium text-[#26372c]">
                        {market.market}
                      </td>

                      <td className="px-4 py-4 text-[#647568]">
                        {market.division}
                      </td>

                      <td className="px-4 py-4 text-right">
                        {formatPrice(market.min)} টাকা
                      </td>

                      <td className="px-4 py-4 text-right">
                        {formatPrice(market.max)} টাকা
                      </td>

                      <td className="px-4 py-4 text-right font-semibold">
                        {formatPrice(marketAverage)} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="rounded-xl bg-[#eef6f0] p-5 text-sm text-[#647568]">
            এই পণ্যের বাজারভিত্তিক তথ্য পাওয়া যায়নি।
          </p>
        )}
      </section>
    </div>
  );
}

function SummaryCard({
  title,
  amount,
  color = "text-[#26372c]",
  formatPrice,
}: {
  title: string;
  amount: number;
  color?: string;
  formatPrice: (value: number) => string;
}) {
  return (
    <div className="rounded-xl border border-[#dce9df] p-4">
      <p className="text-sm text-[#647568]">
        {title}
      </p>

      <p className={`mt-2 text-2xl font-bold ${color}`}>
        {formatPrice(amount)} টাকা
      </p>

      <p className="mt-1 text-xs text-[#647568]">
        প্রতি ইউনিট
      </p>
    </div>
  );
}
