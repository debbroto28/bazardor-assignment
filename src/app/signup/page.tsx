
'use client';

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (
        e: React.SubmitEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;





        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            callbackURL: '/',
        });

        if (error) {
            console.error(error);
            return;
        }

        if (data) {
            toast.success("Account created successfully!");
            router.push('/');
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    const handlegitHubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        });
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="font-extrabold text-3xl">
                অ্যাকাউন্ট তৈরি করুন
            </h2>

            <p className="text-sm text-gray-500 mt-3">
                বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
            </p>

            <form className="mt-8" onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-md border p-5">

                    <label className="label text-base-content">
                        নাম
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="input w-full"
                        placeholder="যেমন: রহিম উদ্দিন"
                        required
                    />

                    <label className="label text-base-content">
                        ইমেইল
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="input w-full"
                        placeholder="you@example.com"
                        required
                    />

                    <label className="label text-base-content">
                        পাসওয়ার্ড
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="input w-full"
                        placeholder="কমপক্ষে ৮ অক্ষর"
                        minLength={8}
                        required
                    />

                    <label className="label text-base-content">
                        পাসওয়ার্ড নিশ্চিত করুন
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="input w-full"
                        placeholder="আবার লিখুন"
                        minLength={8}
                        required
                    />

                    <button
                        type="submit"
                        className="btn bg-[#34A853] mt-4 text-white rounded-lg"
                    >
                        অ্যাকাউন্ট তৈরি করুন
                    </button>
                    <div className="divider">অথবা</div>
                    <div className="flex gap-4">
                         
                            
                        <button onClick={handleGoogleSignIn} className="btn rounded-xl w-60">
                            <FcGoogle size={22} />
                            Google দিয়ে চালিয়ে যান
                            </button>
                          
                        <button onClick={handlegitHubSignIn} className="btn rounded-xl w-60">
                              <FaGithub size={22} />
                            GitHub দিয়ে চালিয়ে যান
                            </button>
                    </div>
                    <div className="flex justify-center mt-3 gap-2 text-sm">
                        <p>অ্যাকাউন্ট আছে? </p>
                        <Link href={"/signIn"}>
                            <p className="text-green-600">সাইন ইন করুন</p>
                        </Link>
                    </div>
                </fieldset>
            </form>

            <div className=" mt-5 ">
                <Link href={"/"}>
                    <p className="text-gray-500">← হোম পেজে ফিরে যান</p>
                </Link>
            </div>


        </div>
    );
};

export default SignUpPage;
