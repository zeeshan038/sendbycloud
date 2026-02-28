import React from 'react';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4f9] to-[#d6e4f9] pt-[120px] pb-20 px-6 lg:px-12 flex flex-col items-center">

            <div className="max-w-5xl w-full flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-2xl relative z-10">
                    <div className="inline-flex bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[13px] font-bold text-[#293a93] uppercase tracking-widest mb-6 border border-white">
                        Who we are
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e2a6a] mb-6 tracking-tight">About SendByCloud</h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium">We're on a mission to completely revolutionize the way creative professionals and businesses transfer their most important assets securely across the globe.</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10">

                    {/* Card 1 */}
                    <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white ring-1 ring-black/5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[24px] flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 rounded-full blur-md"></div>
                            <Zap className="w-10 h-10 relative z-10" />
                        </div>
                        <h3 className="text-xl font-black text-[#1e2a6a] mb-3">Lightning Fast</h3>
                        <p className="text-gray-500 font-medium text-[15px] leading-relaxed">Built on a globally distributed CDN, our transfers are optimized to utilize maximum bandwidth available to both the sender and the receiver.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white ring-1 ring-black/5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 md:translate-y-8">
                        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[24px] flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-100 rounded-full blur-md"></div>
                            <ShieldCheck className="w-10 h-10 relative z-10" />
                        </div>
                        <h3 className="text-xl font-black text-[#1e2a6a] mb-3">Bank-level Security</h3>
                        <p className="text-gray-500 font-medium text-[15px] leading-relaxed">All data in transit and at rest is fully encrypted. We employ strict compliance standards to ensure your business data is absolutely secure.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white ring-1 ring-black/5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-20 h-20 bg-indigo-50 text-[#293a93] rounded-[24px] flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-100 rounded-full blur-md"></div>
                            <Globe className="w-10 h-10 relative z-10" />
                        </div>
                        <h3 className="text-xl font-black text-[#1e2a6a] mb-3">Accessible Anywhere</h3>
                        <p className="text-gray-500 font-medium text-[15px] leading-relaxed">Whether on your phone, tablet or desktop, SendByCloud delivers a seamless and highly responsive experience tailored for modern workflows.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
