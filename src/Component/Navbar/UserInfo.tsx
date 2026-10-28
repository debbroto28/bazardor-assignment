'use client'

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);

    const handleSignout = async () => {
        await authClient.signOut();
        toast.success("Sign out successfully");
    };

    return (
        <div className="relative">

            {user ? (
                <div>
                    
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                {user.image && (
                                    <img
                                        src={user.image}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                    />
                                )}
                            </div>
                        </div>

                        <h2>{user.name}</h2>
                        <span>⌄</span>
                    </div>

                    
                    {isOpen && (
                        <div className="absolute right-0 top-14 z-50
                            w-72 rounded-2xl border border-gray-200
                            bg-white p-6 shadow-lg">

                            <h2 className="font-semibold">
                                {user.name}
                            </h2>

                            <p className="mb-4 text-sm text-gray-500">
                                {user.email}
                            </p>

                            <Link
                                href="/profile"
                                onClick={() => setIsOpen(false)}
                                className="mb-3 block text-gray-700"
                            >
                                👤 আমার প্রোফাইল
                            </Link>

                            <button
                                onClick={handleSignout}
                                className="text-red-500"
                            >
                                ↩ সাইন আউট
                            </button>

                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <Link href="/signIn">
                        <button className="btn btn-ghost text-neutral-700">
                            সাইন ইন
                        </button>
                    </Link>

                    <Link href="/signup">
                        <button className="btn bg-green-600 text-white">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            )}

        </div>
    );
};

export default UserInfo;
