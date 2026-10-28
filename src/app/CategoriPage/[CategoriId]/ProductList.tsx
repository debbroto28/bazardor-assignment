'use client';


import React, { useState } from 'react';
import Link from "next/link";
import { notFound } from 'next/navigation';
export interface Product {
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
        dir: 'up' | 'down' | 'flat';
        pct: number;
    };
}




type SortType = 'default' | 'low' | 'high';

const ProductList = ({ products }: { products: Product[] }) => {

    const [sort, setSort] = useState<SortType>('default');


    const sortedProducts = [...products];

    if (sort === 'low') {
        sortedProducts.sort((a, b) => a.today - b.today);
    } else if (sort === 'high') {
        sortedProducts.sort((a, b) => b.today - a.today);
    }

    return (
        <>

            <div className="mt-5 flex items-center justify-end gap-3 rounded-2xl border border-[#dce9df] bg-[#f9fcfa] p-5">
                <label htmlFor="sort" className="text-sm text-[#647568]">সাজান</label>
                <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortType)}
                    className="rounded-lg border border-[#dce9df] bg-white px-3 py-2 text-sm text-[#26372c] outline-none"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low">দাম: কম থেকে বেশি</option>
                    <option value="high">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            <h1 className="my-5 text-xl font-bold text-[#1c3025]">
                মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="block rounded-2xl border border-[#dce9df] bg-[#f9fcfa] p-5 transition hover:border-green-400 hover:shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f0] text-2xl">
                                {product.image}
                            </span>

                            <div>
                                <h3 className="text-lg font-bold text-[#26372c]">
                                    {product.nameBn}
                                </h3>
                                <p className="text-sm text-[#647568]">
                                    {product.unit}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-sm text-[#647568]">
                                আজকের দাম
                            </h4>

                            <div className="mt-1 flex items-center justify-between gap-2">
                                <span className="text-xl font-bold text-[#26372c]">
                                    {product.today} টাকা
                                </span>

                                <span
                                    className={
                                        product.change.dir === "up"
                                            ? "font-semibold text-red-600"
                                            : product.change.dir === "down"
                                                ? "font-semibold text-green-600"
                                                : "font-semibold text-gray-500"
                                    }
                                >
                                    {product.change.dir === "up"
                                        ? "▲"
                                        : product.change.dir === "down"
                                            ? "▼"
                                            : "—"}{" "}
                                    {Math.abs(product.change.pct)}%
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ProductList;