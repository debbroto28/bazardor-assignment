import React from 'react';

interface increase{
    id: string;
    categoryIcon: string;
    nameBn: string;
    today: string;
    change: {
        dir: string;
        pct: string;
    };
}
const increaseProduct = async () => {
    const res = await fetch ('https://api.api-store.workers.dev/api/bazardor/products')
    const data : increase[] = await res.json();
    console.log(data);
    const increasedProducts = data.filter(
        (data) => data.change.dir === "up");
    return (
        <div className=" container mx-auto bg-[#eef7f0] px-4 py-8 md:px-8">
            <h1 className="mb-5 text-xl font-bold text-[#1c3025]">
                🔺 আজ দাম বেড়েছে
                </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {increasedProducts.map ((data) =>(
                <div key={data.id} className="rounded-2xl border border-[#dce9df] bg-[#f9fcfa] p-5">
                    <div className="flex items-center gap-3">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f0] text-2xl">{data.categoryIcon}</span>
                    <div>

                    <h3 className="text-lg font-bold text-[#26372c]">{data.nameBn}</h3>
                    <p className="text-sm text-[#647568]"> প্রতি কেজি </p>
                    </div>
                    </div>
                    <div className="mt-4">
                    <h4 className="text-sm text-[#647568]">আজকের দাম</h4>
                    <div className="mt-1 flex items-center justify-between gap-2">
                        <span className="text-xl font-bold text-[#26372c]">{data.today} টাকা</span>
                        <span className="shrink-0 rounded-full bg-[#edf6ef] px-3 py-1 text-sm font-semibold text-red-500">▲ {data.change.pct}%</span>
                    </div>
                    </div>
                </div>
            ))}
            </div>

            
            
            </div>

    );
};

export default increaseProduct;