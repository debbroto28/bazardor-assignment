
"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";

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
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="font-extrabold text-3xl">
        সাইন ইন
      </h2>

      <p className="text-sm text-gray-500 mt-3 text-center">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে
        অ্যাকাউন্টে ঢুকুন।
      </p>

      <form onSubmit={onSubmit} className="mt-8 w-full max-w-md">
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-5">
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
            className="btn bg-[#34A853] mt-4 text-white rounded-lg"
          >
            সাইন ইন
          </button>
        </fieldset>
      </form>

      <button onClick={handleGoogleSignIn} className= "btn ">Sign in with Google</button>
      <button onClick={handlegitHubSignIn} className= "btn ">Sign in with gitHub</button>  
    </div>
  );
};

export default SignInPage;
