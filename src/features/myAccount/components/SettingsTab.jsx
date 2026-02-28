import React from 'react';
import { User, Mail, Briefcase, MapPin, Building2, CreditCard, DownloadCloud, HardDrive, CheckCircle2, ShieldCheck } from 'lucide-react';

const SettingsTab = () => {
    return (
        <div className="w-full flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

            {/* Page Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-black text-[#1e2a6a] tracking-tight">Hi Muhammad Zeeshan</h1>
                <p className="text-[15px] text-gray-500 font-medium">Manage your subscription, account settings, and billing information below.</p>
            </div>

            {/* Premium Subscription Dashboard */}
            <div className="w-full bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md hover:border-gray-200">
                {/* Subscription Header */}
                <div className="bg-gradient-to-r from-[#293a93] to-[#1e2a6a] px-8 py-5 flex items-center justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <h2 className="text-[18px] font-bold text-white relative z-10">Your subscription details</h2>
                    <button className="text-white bg-white/10 hover:bg-white/20 transition-colors px-4 py-1.5 rounded-lg text-[13px] font-bold backdrop-blur-sm relative z-10 border border-white/10">
                        Upgrade
                    </button>
                </div>

                {/* Subscription Data Grid */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50/30">

                    {/* Status Box */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-[#293a93]/20 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shadow-inner">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">Account Status</span>
                        </div>
                        <div className="flex items-center">
                            <span className="bg-emerald-100/80 text-emerald-700 px-3 py-1 rounded-lg text-[13px] font-bold border border-emerald-200">
                                Active
                            </span>
                        </div>
                    </div>

                    {/* Payment Type */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-[#293a93]/20 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 text-[#293a93] rounded-xl flex items-center justify-center shadow-inner">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">Payment Type</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-[18px] font-bold text-gray-900 capitalize">Free</span>
                        </div>
                    </div>

                    {/* Downloads */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-[#293a93]/20 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shadow-inner">
                                <DownloadCloud className="w-5 h-5" />
                            </div>
                            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">Total Downloads</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-[20px] font-bold text-gray-900">0</span>
                            <span className="text-[13px] font-medium text-gray-400 ml-2">Files</span>
                        </div>
                    </div>

                    {/* Storage Space */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-[#293a93]/20 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shadow-inner">
                                <HardDrive className="w-5 h-5" />
                            </div>
                            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">Storage</span>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            {/* Progress bar */}
                            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 rounded-full w-[2%]" />
                            </div>
                            <div className="flex items-center justify-between text-[13px]">
                                <span className="font-bold text-gray-900">0 Bytes</span>
                                <span className="font-medium text-gray-400">of 30.0 GB</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* Extended User Details Form */}
            <div className="w-full bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden flex flex-col">
                {/* Form Header */}
                <div className="bg-[#293a93] px-8 py-5 flex items-center gap-3 relative overflow-hidden">
                    <User className="w-5 h-5 text-white/80" />
                    <h2 className="text-[18px] font-bold text-white relative z-10">Other details</h2>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transition-transform hover:scale-110 pointer-events-none"></div>
                </div>

                {/* Form Body */}
                <div className="p-8 flex flex-col gap-8 bg-gray-50/20">

                    {/* Basic Info Group */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-gray-700 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-400" />
                                E-Mail
                            </label>
                            <input
                                type="email"
                                defaultValue="zeeshandev038@gmail.com"
                                readOnly
                                className="w-full px-5 py-3.5 bg-gray-100 border border-gray-200 rounded-xl text-[14px] font-medium text-gray-500 outline-none cursor-not-allowed"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700 flex items-center gap-2">
                                    <User className="w-4 h-4 text-gray-400" />
                                    First name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Muhammad Zeeshan"
                                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400 shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700 flex items-center gap-2">
                                    <User className="w-4 h-4 text-gray-400" />
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400 shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-gray-700 flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-gray-400" />
                                Company name (Optional)
                            </label>
                            <input
                                type="text"
                                placeholder="Company name (Optional)"
                                className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400 shadow-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-gray-700 flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-gray-400" />
                                VAT number
                            </label>
                            <input
                                type="text"
                                placeholder="VAT number"
                                className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400 shadow-sm"
                            />
                        </div>
                    </div>

                    <hr className="border-gray-100 my-2" />

                    {/* Address Info Group */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                            <MapPin className="w-3.5 h-3.5" />
                            Address Information
                        </h3>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-gray-700">Street address</label>
                            <input
                                type="text"
                                placeholder="Street address"
                                className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400 shadow-sm"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700">Postal / Zip code</label>
                                <input
                                    type="text"
                                    placeholder="Postal / Zip code"
                                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400 shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700">City</label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400 shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-gray-700">Country</label>
                            <select className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all shadow-sm appearance-none cursor-pointer">
                                <option value="" disabled selected>Select a country</option>
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="PK">Pakistan</option>
                            </select>
                        </div>
                    </div>

                    {/* Form Footer */}
                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                        <button className="flex items-center gap-2 px-10 py-3.5 bg-[#2b3a8c] hover:bg-[#1e2a6a] text-white text-[15px] font-bold rounded-xl transition-all shadow-md shadow-[#2b3a8c]/20 hover:-translate-y-0.5 group">
                            <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Save Configuration
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SettingsTab;
