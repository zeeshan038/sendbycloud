import React, { useState } from 'react';
import { MoreHorizontal, Calendar, CheckCircle2, HelpCircle, ChevronRight, ChevronDown, Zap, ArrowLeft, Check } from 'lucide-react';
import SettingsModal from '../components/SettingsModal';

const Home = () => {
    const [files, setFiles] = useState([]);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full font-sans text-gray-900 overflow-hidden bg-gray-100 selection:bg-blue-200 pt-16">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2000&auto=format&fit=crop"
                    alt="Beautiful abstract or landscape background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Main Container - Left Aligned */}
            <main className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-24 pointer-events-none pb-20">
                {/* White Transfer Card - Narrower and Left Side */}
                <div className={`w-[360px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 flex flex-col pointer-events-auto mt-8 md:mt-12 relative z-10 transition-all duration-500 ${isSettingsOpen ? 'rounded-l-[24px] rounded-r-none' : 'rounded-[24px]'}`}>

                    {/* Settings Modal (Slides out to the right) */}
                    <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

                    {/* Top Action Pills */}
                    <div className="flex gap-3 mb-4">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white rounded-[14px] text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm">
                            <svg className="w-4 h-4 text-[#75a9f9]" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
                            Add Files
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white rounded-[14px] text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm">
                            <svg className="w-4 h-4 text-[#75a9f9]" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /></svg>
                            Add Folders
                        </button>
                    </div>

                    {/* Drag and Drop Area */}
                    <div className="border border-dashed border-gray-200 rounded-[20px] py-10 flex flex-col items-center justify-center text-center mb-4 bg-gray-50/20">
                        <div className="w-14 h-14 bg-[#f2f3f5] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-7 h-7 text-[#bbbec4]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.36 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" /></svg>
                        </div>
                        <span className="text-[12.5px] font-bold text-gray-700 mb-1">Choose a file or drag & drop it here.</span>
                        <span className="text-[11.5px] text-gray-400 font-medium mb-4">Max size: 50GB per file or folder</span>
                        <button className="py-2 px-5 bg-white border border-gray-100 rounded-xl text-[12px] font-bold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                            Browse files
                        </button>
                    </div>

                    {/* Email Inputs */}
                    <div className="flex gap-3 mb-3">
                        <div className="flex-1 flex items-center bg-[#f7f7f9] rounded-[14px] px-3.5 py-3">
                            <svg className="w-4 h-4 text-gray-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                            <input type="email" placeholder="Send to" className="w-full bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400 font-medium" />
                        </div>
                        <div className="flex-1 flex items-center bg-[#f7f7f9] rounded-[14px] px-3.5 py-3">
                            <svg className="w-4 h-4 text-gray-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <input type="email" placeholder="Your email" className="w-full bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400 font-medium" />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="bg-[#f7f7f9] rounded-[14px] px-4 py-3.5 mb-5 h-[100px] flex flex-col relative group">
                        <div className="flex justify-between items-start w-full">
                            <textarea placeholder="Message" className="w-full bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400 font-medium resize-none h-[60px]" />

                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center">
                        <button className="w-full cursor-pointer bg-[#243588] hover:bg-[#202b6a] text-white rounded-[16px] py-[15px] font-bold text-[14.5px] flex items-center justify-center gap-2.5 transition-all shadow-md">
                            <svg className="w-3 h-3 text-white transform -rotate-45 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                            Start Transfer
                        </button>
                        <button
                            className="w-[55px] cursor-pointer h-[55px] ml-3 bg-[#243588] rounded-full flex items-center justify-center shrink-0 border-[3.5px] border-[#d8e8f8] shadow-sm hover:scale-105 transition-transform"
                            onClick={() => setIsSettingsOpen(prev => !prev)}
                        >
                            <MoreHorizontal className="w-6 h-6 text-white" strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;