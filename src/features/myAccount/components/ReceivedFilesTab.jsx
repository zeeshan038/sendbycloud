import React from 'react';
import { Search, Trash2, Eye, Copy, HardDrive, Calendar, Clock, DownloadCloud, FileText, Share2, MoreVertical } from 'lucide-react';

const ReceivedFilesTab = () => {
    // Sample modern data
    const receivedFiles = [
        {
            id: '8b1LvhIx',
            emailFrom: 'coderidrees@gmail.com',
            message: 'Project Assets & Movie clip',
            totalFiles: 3,
            size: '28.2 MB',
            date: 'Feb 21, 2026',
            expiresIn: '7 days',
            fileTypes: ['mp4', 'png', 'pdf']
        },
        {
            id: '9c2MwkJy',
            emailFrom: 'sarah.design@studio.com',
            message: 'Updated Branding Guidelines',
            totalFiles: 1,
            size: '12.4 MB',
            date: 'Feb 20, 2026',
            expiresIn: '6 days',
            fileTypes: ['pdf']
        },
    ];

    return (
        <div className="w-full flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Received Files</h1>
                    <p className="text-[14px] text-gray-500 mt-1">Manage and preview files shared with you securely.</p>
                </div>

                <div className="relative w-full md:w-[360px] group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-[18px] w-[18px] text-gray-400 group-focus-within:text-[#2b3a8c] transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by sender or file name..."
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-[14px] text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all shadow-sm placeholder:text-gray-400 font-medium"
                    />
                </div>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 gap-4">
                {receivedFiles.map((file, idx) => (
                    <div
                        key={idx}
                        className="group bg-white border border-gray-100/80 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:shadow-[#2b3a8c]/5 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                        {/* Subtle decorative gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2b3a8c]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-start gap-5 w-full md:w-auto z-10">
                            {/* Icon Wrapper */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-[#2b3a8c]/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                                <DownloadCloud className="w-6 h-6 text-[#2b3a8c]" strokeWidth={2} />
                            </div>

                            {/* Main Info */}
                            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                                <h3 className="text-[16px] font-bold text-gray-900 truncate pr-4">{file.message}</h3>
                                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-500">
                                    <span className="text-[#2b3a8c] bg-blue-50 px-2 py-0.5 rounded-md">{file.emailFrom}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5" /> {file.size}</span>
                                </div>
                            </div>
                        </div>

                        {/* Metadata & Actions */}
                        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto border-t md:border-t-0 border-gray-100 pt-4 md:pt-0 z-10">

                            {/* Stats */}
                            <div className="flex items-center gap-6 text-[13px] font-medium w-full md:w-auto justify-between md:justify-end">
                                <div className="flex flex-col gap-1 items-start md:items-end">
                                    <span className="text-gray-400 text-[11px] uppercase tracking-wider font-bold">Files</span>
                                    <div className="flex items-center gap-1.5 text-gray-700">
                                        <FileText className="w-4 h-4 text-blue-400" />
                                        <span>{file.totalFiles} items</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-start md:items-end">
                                    <span className="text-gray-400 text-[11px] uppercase tracking-wider font-bold">Expires</span>
                                    <div className="flex items-center gap-1.5 text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{file.expiresIn}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px h-10 bg-gray-100"></div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2b3a8c] hover:bg-[#1e2a6a] text-white text-[13px] font-semibold rounded-xl transition-all shadow-md shadow-[#2b3a8c]/20 hover:shadow-lg hover:-translate-y-0.5">
                                    <Eye className="w-4 h-4" />
                                    Preview
                                </button>

                                <div className="flex items-center gap-1.5">
                                    <button className="p-2.5 text-gray-400 hover:text-[#2b3a8c] hover:bg-blue-50 rounded-xl transition-colors tooltip-trigger" title="Copy Link">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors tooltip-trigger" title="Delete">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Premium Pagination */}
            <div className="flex items-center justify-between mt-4">
                <span className="text-[13px] font-medium text-gray-500">Showing <strong className="text-gray-900">1-2</strong> of <strong className="text-gray-900">2</strong> files</span>
                <div className="flex items-center gap-2 bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
                    <button className="px-4 py-2 text-[13px] font-semibold text-gray-400 rounded-xl cursor-not-allowed">Prev</button>
                    <button className="w-9 h-9 flex items-center justify-center text-[13px] font-bold text-white bg-[#2b3a8c] rounded-xl shadow-md shadow-[#2b3a8c]/20">1</button>
                    <button className="px-4 py-2 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#2b3a8c] rounded-xl transition-all">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ReceivedFilesTab;
