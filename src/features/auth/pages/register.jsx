import { Link } from 'react-router-dom';
import { Eye, UserPlus } from 'lucide-react';

const Register = () => {
    return (
        <div className="min-h-screen w-full flex bg-gradient-to-br from-[#f0f4f9] to-[#d6e4f9] font-sans">

            {/* Left Side (Form) */}
            <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center px-8 md:px-12 pt-28 pb-12 relative z-10 overflow-y-auto min-h-screen">

                {/* Form Area */}
                <div className="flex flex-col w-full max-w-[400px] mx-auto">
                    <div className="mb-10 text-left">
                        <div className="w-12 h-12 bg-blue-100 text-[#293a93] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                            <UserPlus className="w-6 h-6" />
                        </div>
                        <h1 className="text-[32px] font-medium text-gray-800 tracking-tight leading-none mb-3">Create Account</h1>
                        <p className="text-[14px] text-gray-500 font-medium">Join SendByCloud to securely share your files</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {/* Name */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-medium text-gray-500 pl-3">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full h-12 px-5 rounded-full bg-white/80 border border-transparent focus:border-blue-400 focus:bg-white focus:outline-none transition-all text-[14px] text-gray-800 placeholder-gray-400 shadow-sm"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-medium text-gray-500 pl-3">Email</label>
                            <input
                                type="email"
                                placeholder="your-email@gmail.com"
                                className="w-full h-12 px-5 rounded-full bg-white/80 border border-transparent focus:border-blue-400 focus:bg-white focus:outline-none transition-all text-[14px] text-gray-800 placeholder-gray-400 shadow-sm"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-medium text-gray-500 pl-3">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="*******************"
                                    className="w-full h-12 pl-5 pr-12 rounded-full bg-white/80 border border-transparent focus:border-blue-400 focus:bg-white focus:outline-none transition-all text-[14px] text-gray-800 placeholder-gray-400 shadow-sm font-mono tracking-widest"
                                />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <Eye className="w-[18px] h-[18px]" />
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-medium text-gray-500 pl-3">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="*******************"
                                    className="w-full h-12 pl-5 pr-12 rounded-full bg-white/80 border border-transparent focus:border-blue-400 focus:bg-white focus:outline-none transition-all text-[14px] text-gray-800 placeholder-gray-400 shadow-sm font-mono tracking-widest"
                                />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <Eye className="w-[18px] h-[18px]" />
                                </button>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center gap-3 pt-2 pl-2">
                            <input type="checkbox" id="terms" className="w-4 h-4 text-[#293a93] rounded bg-gray-100 border-gray-300 focus:ring-[#293a93]" />
                            <label htmlFor="terms" className="text-[13px] font-medium text-gray-600">
                                I agree to the <a href="#" className="text-[#293a93] hover:underline">Terms of Service</a> and <a href="#" className="text-[#293a93] hover:underline">Privacy Policy</a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full h-[50px] bg-[#293a93] hover:bg-[#202b6a] text-white rounded-full font-semibold text-[15px] transition-colors mt-6 shadow-md shadow-blue-900/20">
                            Sign up for free
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="flex flex-col gap-4 mt-8">
                        <div className="flex items-center justify-center gap-4 text-[12px] font-medium text-gray-400 uppercase tracking-widest w-full">
                            <div className="h-px bg-gray-300 flex-1"></div>
                            <span>Or continue with</span>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <button className="flex-1 h-12 bg-white/60 border border-gray-300 hover:bg-white rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm">
                                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="text-[13px] font-medium text-gray-700">Google</span>
                            </button>
                            <button className="flex-1 h-12 bg-white/60 border border-gray-300 hover:bg-white rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm">
                                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24">
                                    <rect x="1.5" y="1.5" width="9.5" height="9.5" fill="#F25022" />
                                    <rect x="1.5" y="12" width="9.5" height="9.5" fill="#00A4EF" />
                                    <rect x="12" y="1.5" width="9.5" height="9.5" fill="#7FBA00" />
                                    <rect x="12" y="12" width="9.5" height="9.5" fill="#FFB900" />
                                </svg>
                                <span className="text-[13px] font-medium text-gray-700">Microsoft</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="flex justify-center items-center mt-12 w-full max-w-[400px] mx-auto text-[13px] font-medium text-gray-500">
                        <div>
                            Already have an account? <Link to="/login" className="text-[#293a93] font-bold hover:underline underline-offset-2 ml-1">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side (Visual Collage) */}
            <div className="hidden md:flex w-full md:w-[55%] lg:w-[60%] relative h-screen bg-[#293a93] overflow-hidden items-center justify-center border-l-[4px] border-white/20 shadow-inner">

                {/* Collage Container */}
                <div className="relative w-full max-w-[700px] h-[700px] flex items-center justify-center">

                    {/* Top Right Image */}
                    <div className="absolute top-12 left-16 w-64 h-72 rounded-[32px] overflow-hidden shadow-2xl z-10 transition-transform duration-700 hover:scale-105">
                        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop" alt="Retro technology" className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-emerald-500 text-[#fff] text-[12px] font-bold px-3 py-1.5 rounded-full shadow-md">Secure</div>
                    </div>

                    {/* Bottom Left Image */}
                    <div className="absolute bottom-16 right-16 w-80 h-64 rounded-[32px] overflow-hidden shadow-2xl z-20 transition-transform duration-700 hover:-translate-y-2 hover:rotate-2">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" alt="Global connections" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-[#fff] text-[12px] font-semibold px-3 py-1.5 rounded-full shadow-md">Cloud Sync</div>
                    </div>

                    {/* Central Welcome Card */}
                    <div className="absolute z-30 w-[340px] h-[400px] bg-white rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col items-center pt-16 pb-12 transition-transform duration-500 hover:scale-105">

                        {/* Large Icon Container */}
                        <div className="relative w-[180px] h-[180px] flex items-center justify-center mb-8">
                            <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center">
                                <div className="w-3/4 h-3/4 bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
                                    <svg className="w-16 h-16 text-[#293a93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/30 flex items-center justify-center animate-bounce duration-1000">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Text */}
                        <h2 className="text-[28px] font-black text-[#1e2a6a] tracking-tight mb-2">Ready to start?</h2>
                        <p className="text-[14px] text-gray-500 font-medium text-center px-8">Share large files instantly with maximum protection.</p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;