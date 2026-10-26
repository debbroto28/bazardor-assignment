import React from 'react';

const SignInPage = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <h2 className= 'font-extrabold text-3xl'>সাইন ইন</h2>
            <p className='text-sm text-gray-500 mt-3'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            <form className='mt-8'>
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-md border p-5">
                    
                    
                    <label className="label text-base-content">ইমেইল</label>
                    <input type="email" className="input w-md" placeholder="you@example.com" />

                    <label className="label text-base-content">পাসওয়ার্ড</label>
                    <input type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />
                    
                    <button className="btn bg-[#34A853] mt-4 text-white rounded-lg">সাইন ইন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;