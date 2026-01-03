import React from 'react';

const Documentation = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="text-center mb-16">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wide uppercase text-sm">Resources</span>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Documentation
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                    Everything you need to know to get started and build amazing things.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {['Getting Started', 'Components', 'Theming', 'Deployment', 'API Reference', 'Best Practices'].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500 group">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Detailed guides and references for {item.toLowerCase()}. Learn how to integrate and customize effectively.
                        </p>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                            Read Guide <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Documentation;
