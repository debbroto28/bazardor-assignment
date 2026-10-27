'use client'

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const userInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const handleSignout = async () => {
        await authClient.signOut();
    }
    return (

        <div className="flex gap-2">
            {user ? (
                <div className='flex items-center gap-5'>
                   <Link href={'/profile'}>
                       <div className="avatar">
                        <div className="w-20 rounded">
                            <img
                                src={user?.image as string}
                                alt=""
                            />
                        </div>
                    </div>
                   
                   </Link>
                    <h2> {user?.name}</h2>

                    
                </div>
            ) : (
                <div>
                    <Link href={'/signIn'}>
                    <button className="btn btn-ghost text-neutral-700 transition-colors">
                        সাইন ইন
                    </button>
                    </Link>

                    <Link href={'/signup'}>
                    <button className="btn bg-green-600 text-white">
                        সাইন আপ
                    </button>
                    </Link>
                </div>
            )}
        </div>

    );
};

export default userInfo;