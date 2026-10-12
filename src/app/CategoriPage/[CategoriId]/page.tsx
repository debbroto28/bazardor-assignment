import React from 'react';
import ProductList from './ProductList';

interface CategoriFileProps {
    params: Promise<{
        CategoriId: string;
    }>;
}

const CategoriFile = async ({ params }: CategoriFileProps) => {
    const { CategoriId } = await params;

    
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${CategoriId}`)
    const data = await res.json();


    const result = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const d = await result.json();

   
    const sameProducts = d.filter(
        (item: any) => item.category === CategoriId
    );

    return (
        <main className="min-h-screen bg-[#eef7f0]">
            <div className="container mx-auto mt-10">

               
                <div className="flex gap-3 bg-white w-full rounded-xl p-4">
                    <span>{data.icon}</span>
                    <div>
                        <h1 className="text-2xl font-bold">{data.nameBn}</h1>
                        <h4>{sameProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</h4>
                    </div>
                </div>

                
                <ProductList products={sameProducts} />

            </div>
        </main>
    );
};

export default CategoriFile;