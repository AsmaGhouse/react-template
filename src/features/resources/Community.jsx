import React from 'react';

const Community = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 md:p-16 text-center text-white mb-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Community</h1>
                    <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
                        Connect with thousands of developers, share your projects, and get feedback.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Join Discord
                        </button>
                        <button className="px-8 py-4 bg-indigo-800 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-colors border border-indigo-400">
                            GitHub Discussions
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Discussions</h2>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-start gap-4 p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded-lg mb-2">
                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                                    How do you handle authentication in large scale apps?
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Posted by User{i} • 2 hours ago • 24 comments</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-span-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Contributors</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500" />
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Contributor {i}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">1,234 karma</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
