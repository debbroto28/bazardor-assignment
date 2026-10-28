import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface Category {
    id: string;
    nameBn: string;
    slug: string;
    icon: string;
}


const CategoriesLink = async () => {

    const res = await fetch ('https://openapi.programming-hero.com/api/bazardor/categories')
    const categories : Category[] = await res.json()
    console.log(categories);

   if(!categories){
           notFound()
       }
   

    return (
        <div className='border border-gray-100 bg-white px-6 py-4 mt-4'>

        <div className='flex gap-10 container mx-auto  ml-16'>
            {categories.map((n , i) => <Link key={i} href ={`/CategoriPage/${n.slug}`}>{n.icon}{n.nameBn} </Link>)}
        </div>
        </div>
    );
};

export default CategoriesLink;