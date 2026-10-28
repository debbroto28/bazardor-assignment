
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SignInPage = () => {
  const onSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(
      formData.entries()
    ) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    if (error) {
      console.error("Sign in failed:", error);
      return;
    }

    if (data) {
      console.log("Sign in successful:", data);
    }
  };

 const handleGoogleSignIn = async() => {
    const data = await authClient.signIn.social({
        provider : "google",
    });
 } ;

 const handlegitHubSignIn = async ()=> {
    const data = await authClient.signIn.social ({
        provider : "github"
    });
 };

  return (
  <div className="flex flex-col items-center justify-center px-4 py-8">

    <h2 className="font-extrabold text-3xl text-center">
      সাইন ইন
    </h2>

    <p className="text-sm text-gray-500 mt-3 text-center">
      বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে
      অ্যাকাউন্টে ঢুকুন।
    </p>

    <form onSubmit={onSubmit} className="mt-6 w-full max-w-md">
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl w-full border p-5">

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

        <label className="label text-base-content mt-3">
          পাসওয়ার্ড
        </label>

        <input
          type="password"
          name="password"
          className="input w-full"
          placeholder="পাসওয়ার্ড লিখুন"
          required
        />

        <button
          type="submit"
          className="btn bg-[#009944] mt-4 text-white rounded-lg w-full"
        >
          সাইন ইন
        </button>

        <div className="divider">অথবা</div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn rounded-xl w-full sm:flex-1"
          >
            <FcGoogle size={22} />
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            onClick={handlegitHubSignIn}
            className="btn rounded-xl w-full sm:flex-1"
          >
            <FaGithub size={22} />
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2 text-sm">
          <p>অ্যাকাউন্ট নেই?</p>
          <Link href="/signup" className="text-green-600">
            সাইন আপ করুন
          </Link>
        </div>

      </fieldset>
    </form>

    <div className="mt-6">
      <Link href="/" className="text-gray-500">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>

  </div>
);
};

export default SignInPage;
