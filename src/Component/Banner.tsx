import Image from 'next/image';
import React from 'react';
import bannerImage from '@/Assets/bazar-hero.png'
const Banner = () => {

    const date = new Date().toLocaleString('bn-BD', {
        dateStyle: 'full',

    });

    return (
        <div className='flex mt-10 container mx-auto justify-between bg-white px-4 py-4 rounded-4xl'>
            <div className=''>

            <p className='inline-block w-fit bg-green-100 px-2 py-1 rounded-full text-green-600'>{date}</p>
            <h1 className='font-extrabold text-4xl'>আজকের বাজারের দাম এক নজরে</h1>
            <br />
            <p className='text-xl text-gray-600'>
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-</p>
                <p>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
            <br />
            <br />
            <a
                    href="#all-products"
                    className="mt-10 inline-block rounded-md bg-green-700 px-4 py-3 font-bold text-white shadow transition hover:bg-green-800"
                >
                    সব পণ্য দেখুন
                </a>
            </div>
            <div>
                <Image src={bannerImage} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;