import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const Login = () => {
    return (
        <div className="min-h-screen w-full flex bg-gradient-to-br from-[#f0f4f9] to-[#d6e4f9] font-sans">

            {/* Left Side (Form) */}
            <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center px-8 md:px-12 pt-28 pb-12 relative z-10 overflow-y-auto min-h-screen">

                {/* Form Area */}
                <div className="flex flex-col w-full max-w-[400px] mx-auto">
                    <div className="mb-10 text-left">
                        <h1 className="text-[32px] font-medium text-gray-800 tracking-tight leading-none mb-3">Sign in</h1>
                        <p className="text-[14px] text-gray-500 font-medium">Welcome back to SendByCloud</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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

                        {/* Submit Button */}
                        <button type="submit" className="w-full h-[50px] bg-[#293a93] hover:bg-[#202b6a] text-white rounded-full font-semibold text-[15px] transition-colors mt-6 shadow-md shadow-blue-900/20">
                            Submit
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="flex gap-4 mt-6">
                        <button className="flex-1 h-12 bg-white/60 border border-gray-300 hover:bg-white rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm">
                            <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24">
                                <rect x="1.5" y="1.5" width="9.5" height="9.5" fill="#F25022" />
                                <rect x="1.5" y="12" width="9.5" height="9.5" fill="#00A4EF" />
                                <rect x="12" y="1.5" width="9.5" height="9.5" fill="#7FBA00" />
                                <rect x="12" y="12" width="9.5" height="9.5" fill="#FFB900" />
                            </svg>
                            <span className="text-[13px] font-medium text-gray-700">Microsoft</span>
                        </button>
                        <button className="flex-1 h-12 bg-white/60 border border-gray-300 hover:bg-white rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm">
                            <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-[13px] font-medium text-gray-700">Google</span>
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex justify-between items-center mt-12 w-full max-w-[400px] mx-auto text-[12px] font-medium text-gray-500">
                    <div>
                        Don't have an account? <Link to="/register" className="text-gray-900 font-bold hover:underline underline-offset-2 ml-1">Sign up</Link>
                    </div>
                    <a href="#" className="hover:underline underline-offset-2 hover:text-gray-800">Terms & Conditions</a>
                </div>
            </div>

            {/* Right Side (Visual Collage) */}
            <div className="hidden md:flex w-full md:w-[55%] lg:w-[60%] relative h-screen bg-[#1b2659] overflow-hidden items-center justify-center border-l-[4px] border-blue-500/20 shadow-inner">

                {/* Collage Container */}
                <div className="relative w-full max-w-[700px] h-[700px] flex items-center justify-center">

                    {/* Top Right Image */}
                    <div className="absolute top-8 right-12 w-56 h-64 rounded-[32px] overflow-hidden shadow-2xl z-10">
                        <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover" />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="absolute bottom-12 right-24 w-72 h-56 rounded-[32px] overflow-hidden shadow-2xl z-20">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop" alt="Abstract building" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 bg-[#1f2122] text-[#fff] text-[12px] font-semibold px-3 py-1.5 rounded-full shadow-md">.raw</div>
                    </div>

                    {/* Left Image */}
                    <div className="absolute top-48 left-8 w-64 h-80 rounded-[32px] overflow-hidden shadow-2xl z-10">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" alt="Abstract gradient" className="w-full h-full object-cover" />

                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.2)] ml-4 cursor-pointer hover:scale-105 transition-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-4 bg-[#1f2122] text-[#fff] text-[12px] font-semibold px-3 py-1.5 rounded-full shadow-md">.mov</div>
                    </div>

                    {/* Central Transfer UI Card */}
                    <div className="absolute z-30 w-[300px] h-[400px] bg-white rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col items-center pt-16 pb-12">

                        {/* Progress Circle Container */}
                        <div className="relative w-[200px] h-[200px] flex items-center justify-center mb-10">
                            {/* SVG Ring Background */}
                            <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="85" fill="none" stroke="#ebf0fa" strokeWidth="20" />
                            </svg>
                            {/* SVG Ring Progress (Blue) */}
                            <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="85" fill="none" stroke="#505ef7" strokeWidth="20" strokeDasharray="534" strokeDashoffset="0" strokeLinecap="round" />
                            </svg>

                            {/* Percentage Text */}
                            <div className="flex items-start z-10 mt-2 text-[#0c1110]">
                                <span className="text-[64px] font-semibold leading-none tracking-tighter">100</span>
                                <span className="text-[32px] font-semibold mt-1">%</span>
                            </div>
                        </div>

                        {/* Text */}
                        <span className="text-[26px] font-medium text-[#111] tracking-tight">Transferring</span>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;