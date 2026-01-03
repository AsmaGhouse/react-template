import React from 'react';
import { Help, Email, Chat, Book } from '@mui/icons-material';

const Support = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 pb-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">How can we help you?</h1>
                <div className="relative max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Book fontSize="large" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Knowledge Base</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Browse tutorials and articles to find answers.</p>
                    <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Visit Help Center</a>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Chat fontSize="large" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Chat with our support team in real-time.</p>
                    <a href="#" className="text-green-600 dark:text-green-400 font-semibold hover:underline">Start Chat</a>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Email fontSize="large" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Get a response within 24 hours.</p>
                    <a href="#" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Support;
