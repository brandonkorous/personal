import React from 'react';

export default function SimpleLanding() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <div className="inline-block px-6 py-3 mb-8 bg-blue-600 text-white rounded-full font-bold">
                        Technology Solutions
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Bold Ideas.
                        <br />
                        <span className="text-blue-600">Creative</span> Solutions.
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Tech expertise, innovation, and automation to help your brand stand out and operate efficiently.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">
                            Get Started
                        </button>
                        <button className="px-8 py-3 bg-transparent text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50">
                            Learn More
                        </button>
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">What I Do</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 mx-auto"></div>
                            <h3 className="text-xl font-bold mb-2">Web Development</h3>
                            <p className="text-gray-600">Modern, responsive websites and applications built with cutting-edge technologies.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 mx-auto"></div>
                            <h3 className="text-xl font-bold mb-2">Automation</h3>
                            <p className="text-gray-600">Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 mx-auto"></div>
                            <h3 className="text-xl font-bold mb-2">Consulting</h3>
                            <p className="text-gray-600">Strategic technical guidance to accelerate your digital transformation initiatives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}