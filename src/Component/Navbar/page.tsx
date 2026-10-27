'use client'
import React , {useEffect, useState} from 'react';
import logo from '@/Assets/logo-icon.png';
import Image from 'next/image';
import UserInfo from '@/Component/Navbar/UserInfo'
import Link from 'next/link';
const NavBar = () => {

    const [date, setDate] = useState('');
    
        useEffect(() => {
            setDate(
                new Date().toLocaleString('bn-BD', {
                    dateStyle: 'full',
                })
            );
        }, []);
    
    return (
        <div className= "flex justify-between items-center container mx-auto mt-3 gap-2">
            
            <div className="flex gap-2 items-center">
           <Link href={'/'}>
           
            <Image  className="w-14 h-14 rounded-2xl bg-green-600 p-2" src={logo} alt="Logo"/>
           </Link>
            
            <div>
               
                <h2 className="text-xl font-bold ">বাজার দর</h2>
                <p>{date}</p>
            </div>
            </div>
            <UserInfo />
          
        </div>
    
    );
};

export default NavBar;