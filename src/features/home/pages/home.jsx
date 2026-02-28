import React, { useState } from 'react';
import { MoreHorizontal, Plus, Link as LinkIcon, DownloadCloud, ChevronRight, X } from 'lucide-react';
import SettingsModal from '../components/SettingsModal';

const Home = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full font-sans text-gray-900 overflow-hidden bg-gradient-to-br from-[#f0f4f9] to-[#d6e4f9] pt-[85px] lg:pt-[90px]">
            {/* Abstract floating shapes for premium vibe */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-400 opacity-20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500 opacity-15 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Main Container - Left Aligned */}
            <main className="relative z-10 flex items-center h-[calc(100vh-90px)] px-6 md:px-12 lg:px-24 pointer-events-none pb-20 md:pb-0">

                {/* Visual Content (Right side on desktop) */}
                <div className="absolute right-24 pointer-events-none hidden lg:flex flex-col items-end gap-6 z-0 max-w-xl">
                    <h1 className="text-6xl font-black tracking-tight text-[#1e2a6a] text-right leading-[1.1]">
                        Send large files with <br /> absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">simplicity</span>.
                    </h1>
                    <p className="text-lg font-medium text-gray-600 text-right max-w-sm">
                        Fast, secure and beautifully designed. Share your heaviest projects without breaking a sweat.
                    </p>
                </div>

                {/* White Transfer Card - Premium aesthetic */}
                <div className={`w-[380px] bg-white/90 backdrop-blur-xl border border-white shadow-[0_40px_80px_rgba(43,58,140,0.15)] p-5 md:p-6 flex flex-col pointer-events-auto relative z-20 transition-all duration-500 ring-1 ring-black/5 ${isSettingsOpen ? 'rounded-l-[32px] rounded-r-none' : 'rounded-[32px]'}`}>

                    {/* Settings Modal (Slides out to the right) */}
                    <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

                    {/* Top Action Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                        <h2 className="text-[18px] font-bold text-[#1e2a6a] flex items-center gap-2">
                            <DownloadCloud className="w-5 h-5 text-blue-500" />
                            Transfer files
                        </h2>
                    </div>

                    {/* Upload Types */}
                    <div className="flex gap-3 mb-4">
                        <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-2 bg-blue-50/50 rounded-xl text-[13px] font-bold text-blue-700 hover:bg-blue-100 transition-colors border border-blue-100/50 shadow-sm">
                            <Plus className="w-4 h-4 " />
                            Files
                        </button>
                        <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-2 bg-blue-50/50 rounded-xl text-[13px] font-bold text-blue-700 hover:bg-blue-100 transition-colors border border-blue-100/50 shadow-sm">
                            <Plus className="w-4 h-4" />
                            Folders
                        </button>
                    </div>

                    {/* Drag and Drop Area */}
                    <div className="group border-2 border-dashed border-blue-200/60 rounded-[24px] py-6 flex flex-col items-center justify-center text-center mb-5 bg-[#f8fbff] hover:bg-blue-50/50 hover:border-blue-400 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-[0_8px_16px_rgba(0,0,0,0.06)] group-hover:scale-110 transition-transform">
                            <DownloadCloud className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-[14px] font-bold text-gray-800 mb-0.5">Upload files or folders</span>
                        <span className="text-[12px] text-gray-500 font-medium px-4">Drag and drop up to 50 GB.</span>
                    </div>

                    {/* Forms */}
                    <div className="flex flex-col gap-2.5 mb-5">
                        <div className="flex flex-col space-y-2.5">
                            <div className="relative flex items-center bg-gray-50/80 border border-gray-100 rounded-xl px-4 py-2.5 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                                <input type="email" placeholder="Email to" className="w-full bg-transparent outline-none text-[13px] text-gray-800 placeholder-gray-400 font-semibold" />
                            </div>
                            <div className="relative flex items-center bg-gray-50/80 border border-gray-100 rounded-xl px-4 py-2.5 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                                <input type="email" placeholder="Your email" className="w-full bg-transparent outline-none text-[13px] text-gray-800 placeholder-gray-400 font-semibold" />
                            </div>
                        </div>

                        {/* Title / Message */}
                        <div className="relative flex items-center bg-gray-50/80 border border-gray-100 rounded-xl px-4 py-2.5 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all mt-0.5">
                            <input type="text" placeholder="Title" className="w-full bg-transparent outline-none text-[13px] text-gray-800 placeholder-gray-400 font-semibold" />
                        </div>

                        <div className="relative flex items-start bg-gray-50/80 border border-gray-100 rounded-xl px-4 py-2.5 focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                            <textarea placeholder="Message" className="w-full bg-transparent outline-none text-[13px] text-gray-800 placeholder-gray-400 font-medium resize-none h-[52px]" />
                        </div>
                    </div>

                    {/* Submit Button Area */}
                    <div className="flex items-center gap-3 mt-auto">
                        <button
                            className={`cursor-pointer w-12 h-12 shrink-0 rounded-[14px] flex items-center justify-center transition-all ${isSettingsOpen ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            onClick={() => setIsSettingsOpen(prev => !prev)}
                        >
                            {isSettingsOpen ? <X className="w-5 h-5" /> : <MoreHorizontal className="w-5 h-5" />}
                        </button>

                        <button className="cursor-pointer flex-1 bg-[#2b3a8c] hover:bg-[#1e2a6a] text-white rounded-[14px] h-12 font-bold text-[14px] flex items-center justify-center gap-2 transition-all shadow-md shadow-[#2b3a8c]/20 hover:-translate-y-0.5">
                            Transfer
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;