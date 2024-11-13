import React from 'react';

function Center() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-slate-800 to-violet-900">
            <div className="sm:my-auto mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="mb-6 max-w-xl">
                            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-snug tracking-tight text-white sm:text-5xl sm:leading-snug">
                                Hi, I'm a React Developer
                            </h2>
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:justify-start space-y-3 md:space-y-0 md:space-x-4">
                            <a href="/" className="inline-flex h-12 items-center justify-center rounded bg-indigo-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-indigo-700 focus:outline-none">
                                LinkedIn
                            </a>
                            <a href="/" className="inline-flex h-12 items-center justify-center rounded bg-indigo-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-indigo-700 focus:outline-none">
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img className="h-56 w-full rounded-full object-cover shadow-lg sm:h-96" src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-female.jpg" alt="Jyoti Waydande" />
                        <h1 className="text-4xl font-bold text-white mt-4 text-center">Jyoti Waydande</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Center;
