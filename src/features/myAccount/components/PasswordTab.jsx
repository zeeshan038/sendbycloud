import { useState } from 'react';
import {
    Eye,
    EyeOff,
    ShieldCheck,
    KeyRound,
    Mail,
    Smartphone,
    Info,
    AlertCircle
} from 'lucide-react';

const PasswordTab = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showReEnterPassword, setShowReEnterPassword] = useState(false);
    const [is2FAEnabled, setIs2FAEnabled] = useState(false);

    return (
        <div className="w-full flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

            {/* Ultra-Premium Hero Banner */}
            <div className="relative w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#111827] via-[#1e2a6a] to-[#2b3a8c] p-8 md:p-10 shadow-xl shadow-[#2b3a8c]/20">
                {/* Abstract glowing shapes */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500 opacity-10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[12px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-emerald-500/20 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5" /> Account Protected
                            </span>
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight">Security Settings</h1>
                        <p className="text-white/70 text-[15px] font-medium max-w-xl">
                            Manage your password and advanced security preferences. We recommend keeping Two-Factor Authentication enabled for maximum protection.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">

                {/* Left Column: Password Update Module */}
                <div className="xl:col-span-3 flex flex-col gap-6">
                    <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm relative overflow-hidden group hover:shadow-lg hover:shadow-[#2b3a8c]/5 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-50/80 text-[#2b3a8c] rounded-2xl flex items-center justify-center shadow-inner">
                                <KeyRound className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-[20px] font-bold text-gray-900">Change Password</h2>
                                <p className="text-[13px] text-gray-500 font-medium mt-0.5">Ensure your account is using a long, random password to stay secure.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700 uppercase tracking-widest pl-1">Current Password</label>
                                <div className="relative group/input">
                                    <input
                                        type={showCurrentPassword ? "text" : "password"}
                                        placeholder="••••••••••••"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:bg-white focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2b3a8c] transition-colors"
                                    >
                                        {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gray-100 my-2"></div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700 uppercase tracking-widest pl-1">New Password</label>
                                <div className="relative group/input">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        placeholder="Create a strong password"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:bg-white focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2b3a8c] transition-colors"
                                    >
                                        {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700 uppercase tracking-widest pl-1">Confirm New Password</label>
                                <div className="relative group/input">
                                    <input
                                        type={showReEnterPassword ? "text" : "password"}
                                        placeholder="Type it again to verify"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] font-medium text-gray-800 outline-none focus:bg-white focus:border-[#2b3a8c] focus:ring-4 focus:ring-[#2b3a8c]/10 transition-all placeholder:text-gray-400"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowReEnterPassword(!showReEnterPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2b3a8c] transition-colors"
                                    >
                                        {showReEnterPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button className="px-8 py-3.5 bg-[#2b3a8c] hover:bg-[#1e2a6a] text-white text-[14px] font-bold rounded-xl transition-all shadow-md shadow-[#2b3a8c]/20 hover:-translate-y-0.5">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: 2FA Module */}
                <div className="xl:col-span-2 flex flex-col gap-6">
                    <div className={`bg-white border rounded-[24px] p-8 shadow-sm transition-all duration-500 relative overflow-hidden flex flex-col h-full ${is2FAEnabled ? 'border-emerald-200 shadow-emerald-500/5' : 'border-gray-100'}`}>
                        {/* Status Glow */}
                        <div className={`absolute top-0 right-0 w-40 h-40 blur-3xl rounded-full opacity-20 pointer-events-none transition-colors duration-500 ${is2FAEnabled ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner transition-colors duration-500 ${is2FAEnabled ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400'}`}>
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-[20px] font-bold text-gray-900">Two-Factor Auth</h2>
                                <span className={`inline-flex items-center gap-1.5 mt-1 text-[12px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${is2FAEnabled ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                                    {is2FAEnabled ? 'Enabled' : 'Disabled'}
                                </span>
                            </div>
                        </div>

                        <p className="text-[14px] text-gray-500 font-medium leading-relaxed mb-8 flex-1">
                            Add an extra layer of security to your account. When logging in, you'll need to provide a unique code sent to your email alongside your password.
                        </p>

                        <div className="bg-gray-50/80 border border-gray-100 rounded-[16px] p-5 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#2b3a8c]">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-bold text-gray-900">Email Verification</span>
                                        <span className="text-[12px] text-gray-500 font-medium">zeeshandev038@gmail.com</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                                    className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#2b3a8c] focus:ring-offset-2 shadow-inner ${is2FAEnabled ? 'bg-emerald-500' : 'bg-gray-300'}`}
                                >
                                    <span
                                        className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out ${is2FAEnabled ? 'translate-x-5' : 'translate-x-0'}`}
                                    />
                                </button>
                            </div>

                            {is2FAEnabled && (
                                <div className="mt-2 text-[12px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-start gap-2 animate-in fade-in zoom-in duration-300">
                                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <p>Your account is now protected. Verification codes will be sent to your inbox upon every login attempt.</p>
                                </div>
                            )}
                            {!is2FAEnabled && (
                                <div className="mt-2 text-[12px] font-medium text-amber-600 bg-amber-50 border border-amber-100 rounded-xl p-3 flex items-start gap-2 animate-in fade-in zoom-in duration-300">
                                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <p>We highly recommend keeping Two-Factor Authentication enabled to prevent unauthorized access.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PasswordTab;
