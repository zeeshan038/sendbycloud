import React, { useState } from 'react';
import { HelpCircle, ArrowLeft } from 'lucide-react';

const SettingsModal = ({ isOpen, onClose }) => {
    const [shareMethod, setShareMethod] = useState('email');
    const [selfDestruct, setSelfDestruct] = useState(false);

    return (
        <div
            className={`absolute top-0 bottom-0 left-0 w-[360px] bg-[#f5f6f8] shadow-[20px_0_50px_rgba(0,0,0,0.1)] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] -z-10 ${isOpen
                    ? 'translate-x-full opacity-100 visible rounded-r-[24px] rounded-l-none'
                    : 'translate-x-0 opacity-0 invisible rounded-[24px]'
                }`}
        >
            <div className="p-6 flex flex-col overflow-y-auto h-full scrollbar-hide py-8">
                {/* How to share the file? */}
                <div className="flex flex-col mb-6">
                    <div className="flex items-center gap-1.5 mb-3">
                        <span className="text-[14px] font-bold text-gray-800">How to share the file?</span>
                        <HelpCircle className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex bg-white rounded-full h-[46px] shadow-sm border border-gray-100 w-full p-0.5">
                        <button
                            className={`flex-1 rounded-full text-[14.5px] font-bold flex items-center justify-center transition-colors ${shareMethod === 'email' ? 'bg-[#2b3a8c] text-white' : 'bg-transparent text-gray-800 hover:bg-gray-50'}`}
                            onClick={() => setShareMethod('email')}
                        >
                            Send using email
                        </button>
                        <button
                            className={`flex-1 rounded-full text-[14.5px] font-bold flex items-center justify-center transition-colors ${shareMethod === 'link' ? 'bg-[#2b3a8c] text-white' : 'bg-transparent text-gray-800 hover:bg-gray-50'}`}
                            onClick={() => setShareMethod('link')}
                        >
                            Get a sharable link
                        </button>
                    </div>
                </div>

                {/* Enable self destruct? */}
                <div className="flex flex-col mb-6">
                    <div className="flex items-center gap-1.5 mb-3">
                        <span className="text-[14px] font-bold text-gray-800">Enable self destruct?</span>
                        <HelpCircle className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex bg-white rounded-full h-[46px] shadow-sm border border-gray-100 w-full p-0.5">
                        <button
                            className={`flex-1 rounded-full text-[14.5px] font-bold flex items-center justify-center transition-colors ${!selfDestruct ? 'bg-[#2b3a8c] text-white' : 'bg-transparent text-gray-800 hover:bg-gray-50'}`}
                            onClick={() => setSelfDestruct(false)}
                        >
                            No
                        </button>
                        <button
                            className={`flex-1 rounded-full text-[14.5px] font-bold flex items-center justify-center transition-colors ${selfDestruct ? 'bg-[#2b3a8c] text-white' : 'bg-transparent text-gray-800 hover:bg-gray-50'}`}
                            onClick={() => setSelfDestruct(true)}
                        >
                            Yes
                        </button>
                    </div>
                </div>

                {/* Protect the upload with a password */}
                <div className="flex flex-col mb-6">
                    <div className="flex items-center gap-1.5 mb-3">
                        <span className="text-[14px] font-bold text-gray-800">Protect the upload with a password</span>
                        <HelpCircle className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex w-full mt-1">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-transparent border-b border-gray-200 pb-2.5 text-[14.5px] text-gray-800 outline-none focus:border-gray-400 placeholder-gray-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
