import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Updates</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Insights, tutorials, and news from our team.</p>
                </div>
                <button className="hidden md:block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Subscribe
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="col-span-1 md:col-span-2 relative rounded-3xl overflow-hidden h-[400px] group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="absolute inset-0 bg-blue-600 animate-pulse opacity-20"></div> {/* Placeholder for image */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4">Featured</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:underline">The Future of Web Development with AI</h2>
                        <div className="flex items-center text-gray-300 gap-4 text-sm">
                            <span>Oct 24, 2024</span>
                            <span>•</span>
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>

                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col group cursor-pointer">
                        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-6 overflow-hidden relative">
                            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${i % 2 === 0 ? 'from-purple-500 to-indigo-500' : 'from-orange-400 to-pink-500'}`}></div>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">Tutorial</span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            Building Scalable Applications with React {18 + i}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                            Learn the best practices for state management, performance optimization, and architectural patterns in modern React apps.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
