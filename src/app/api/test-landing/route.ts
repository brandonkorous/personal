import { NextResponse } from 'next/server';

export async function GET() {
    return new NextResponse(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Brandon Korous - Portfolio Screenshot Test</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                body { font-family: 'Inter', sans-serif; }
            </style>
        </head>
        <body class="bg-gradient-to-br from-blue-50 to-indigo-100">
            <div class="min-h-screen">
                <div class="container mx-auto px-4 py-16">
                    <div class="text-center">
                        <div class="inline-block px-6 py-3 mb-8 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg">
                            🚀 Technology Solutions
                        </div>
                        <h1 class="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Bold Ideas.<br />
                            <span class="text-blue-600">Creative</span> Solutions.
                        </h1>
                        <p class="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Tech expertise, innovation, and automation to help your brand stand out and operate efficiently in the digital landscape.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <button class="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                                ⭐ Get Started
                            </button>
                            <button class="px-8 py-4 bg-transparent text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                    
                    <div class="mt-20 text-center">
                        <h2 class="text-4xl font-bold text-gray-900 mb-16">What I Do</h2>
                        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div class="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                                <div class="w-16 h-16 bg-blue-600 rounded-xl mb-6 mx-auto flex items-center justify-center text-white text-2xl">
                                    💻
                                </div>
                                <h3 class="text-xl font-bold mb-4 text-gray-900">Web Development</h3>
                                <p class="text-gray-600 leading-relaxed">Modern, responsive websites and applications built with cutting-edge technologies and best practices.</p>
                            </div>
                            <div class="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                                <div class="w-16 h-16 bg-indigo-600 rounded-xl mb-6 mx-auto flex items-center justify-center text-white text-2xl">
                                    🤖
                                </div>
                                <h3 class="text-xl font-bold mb-4 text-gray-900">Automation</h3>
                                <p class="text-gray-600 leading-relaxed">Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.</p>
                            </div>
                            <div class="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                                <div class="w-16 h-16 bg-purple-600 rounded-xl mb-6 mx-auto flex items-center justify-center text-white text-2xl">
                                    💡
                                </div>
                                <h3 class="text-xl font-bold mb-4 text-gray-900">Consulting</h3>
                                <p class="text-gray-600 leading-relaxed">Strategic technical guidance to accelerate your digital transformation initiatives.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-20 text-center">
                        <h2 class="text-4xl font-bold text-gray-900 mb-8">Featured Projects</h2>
                        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div class="bg-white p-8 rounded-2xl shadow-xl">
                                <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-32 rounded-xl mb-4"></div>
                                <h3 class="text-xl font-bold mb-2">helpNINJA - AI Support Platform</h3>
                                <p class="text-gray-600 mb-4">AI-powered customer support reducing resolution time by 80%</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                                    <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI/LLM</span>
                                    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
                                </div>
                            </div>
                            <div class="bg-white p-8 rounded-2xl shadow-xl">
                                <div class="bg-gradient-to-r from-green-500 to-blue-600 h-32 rounded-xl mb-4"></div>
                                <h3 class="text-xl font-bold mb-2">JobSight - Construction Intelligence</h3>
                                <p class="text-gray-600 mb-4">Enterprise construction management with AI voice logs</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                                    <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Analytics</span>
                                    <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Cloud</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}