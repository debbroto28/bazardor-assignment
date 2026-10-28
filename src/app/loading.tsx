import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/70 bg-white/60 px-12 py-10 shadow-lg backdrop-blur-md">

                <span className="loading loading-spinner loading-xl text-green-600"></span>

                <h2 className="text-xl font-semibold text-green-800">
                    Loading...
                </h2>

                <p className="text-sm text-green-700/70">
                    Please wait while we prepare everything.
                </p>

            </div>
        </div>
    );
};

export default LoadingPage;