import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 px-4">

            <div className="flex max-w-lg flex-col items-center rounded-3xl border border-white/70 bg-white/60 px-8 py-12 text-center shadow-xl backdrop-blur-md">

                <h1 className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-8xl font-extrabold text-transparent">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-green-900">
                    Page Not Found!
                </h2>

                <p className="mt-3 text-sm leading-6 text-green-800/70">
                    Oops! The page you are looking for does not exist
                    or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                    ← হোম পেজে ফিরে যান
                </Link>

            </div>
        </div>
    );
};

export default NotFound;