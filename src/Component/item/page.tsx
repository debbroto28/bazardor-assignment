import React from 'react';

const items = async() => {
    const res = await fetch ('https://openapi.programming-hero.com/api/bazardor/products')
    const categoryitem = data.data;
    const sameProducts = data.filter(
        (data) => data.categoryId === CategoriId
    ); 
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {sameProducts.map ((data) =>(
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
                        <span
                            className={`inline-flex items-center gap-1 font-semibold ${data.change.dir === 'up'
                                ? 'text-red-600'
                                : 'text-green-600'
                            }`}
                            >
                            <span>
                                {data.change.dir === 'down' ? '▼' : '▲'}
                            </span>
                            <span>{data.change.pct}%</span>
                        </span>
                    </div>
                    </div>
                </div>
            ))}
            </div>
    );
};

export default items;