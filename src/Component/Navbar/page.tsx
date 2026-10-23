'use client'
import React from 'react';
import logo from '@/Assets/logo-icon.png';
import Image from 'next/image';
const NavBar = () => {

    const date = new Date().toLocaleString('bn-BD', {
            dateStyle: 'full',
            
        });
    
    return (
        <div className= "flex justify-between items-center container mx-auto mt-3 gap-2">
            
            <div className="flex gap-2 items-center">

            <Image className="w-14 h-14 rounded-2xl bg-green-600 p-2" src={logo} alt="Logo"/>
            <div>
               
                <h2 className="text-xl font-bold ">বাজার দর</h2>
                <p>{date}</p>
            </div>
            </div>
            <div className="flex gap-2">
            <button className='btn btn-shost text-neutral-700 transition-colors'>সাইন ইন</button>
            <button className="btn bg-green-600 text-white">সাইন আপ</button>
            </div>
        </div>
    
    );
};

export default NavBar;