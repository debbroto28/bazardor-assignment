import React from 'react';
interface Product {
    id: string;
    categoryIcon: string;
    nameBn: string;
    today: string;
    change: {
        dir: string; 
        pct: string;
    };
}

const AllProducts = async () => {
    const res = await fetch ("https://api.api-store.workers.dev/api/bazardor/products")
    const data: Product[] = await res.json()
    console.log(data);
    return (
        <div>
            
            <div id="all-products" className="container mx-auto bg-[#eef7f0] px-4 py-8 md:px-8">
            <h1 className="mb-5 text-xl font-bold text-[#1c3025]">
                সব পণ্য
                </h1>
                <h4>মোট ৩৩টি পণ্য দেখানো হচ্ছে</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {data.map ((h) =>(
                <div key={h.id} className="rounded-2xl border border-[#dce9df] bg-[#f9fcfa] p-5">
                    <div className="flex items-center gap-3">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f0] text-2xl">{h.categoryIcon}</span>
                    <div>

                    <h3 className="text-lg font-bold text-[#26372c]">{h.nameBn}</h3>
                    <p className="text-sm text-[#647568]"> প্রতি কেজি </p>
                    </div>
                    </div>
                    <div className="mt-4">
                    <h4 className="text-sm text-[#647568]">আজকের দাম</h4>
                    <div className="mt-1 flex items-center justify-between gap-2">
                        <span className="text-xl font-bold text-[#26372c]">{h.today} টাকা</span>
                        <span
                            className={`inline-flex items-center gap-1 font-semibold ${h.change.dir === 'up'
                                ? 'text-red-600'
                                : 'text-green-600'
                            }`}
                            >
                            <span>
                                {h.change.dir === 'down' ? '▼' : '▲'}
                            </span>
                            <span>{h.change.pct}%</span>
                        </span>
                    </div>
                    </div>
                </div>
            ))}
            </div>

            
            
            </div>
        </div>
    );
};

export default AllProducts;