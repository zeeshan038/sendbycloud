import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4f9] to-[#d6e4f9] pt-[100px] pb-20 px-6 lg:px-12 flex items-center justify-center">
            <div className="max-w-6xl w-full bg-white/90 backdrop-blur-xl rounded-[32px] shadow-[0_40px_80px_rgba(43,58,140,0.1)] border border-white overflow-hidden flex flex-col md:flex-row ring-1 ring-black/5 relative z-10">

                {/* Contact Info (Left Side) */}
                <div className="w-full md:w-2/5 md:min-w-[400px] bg-gradient-to-b from-[#293a93] to-[#1e2a6a] p-10 md:p-14 text-white flex flex-col relative overflow-hidden shrink-0">
                    <div className="absolute top-[-50px] right-[-50px] w-[250px] h-[250px] bg-blue-400 opacity-20 rounded-full blur-[60px]"></div>
                    <div className="absolute bottom-[-50px] left-[-30px] w-[250px] h-[250px] bg-indigo-400 opacity-20 rounded-full blur-[60px]"></div>

                    <div className="relative z-10 h-full flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Get in touch</h2>
                        <p className="text-blue-200/90 font-medium mb-12 text-[15px] leading-relaxed">We'd love to hear from you. Our friendly team is always here to chat and help you with any questions.</p>

                        <div className="flex flex-col gap-8 mt-auto">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner shrink-0 group-hover:bg-white/20 transition-colors">
                                    <Mail className="w-5 h-5 text-blue-100" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[13px] font-bold text-blue-300 uppercase tracking-widest mb-1">Chat to us</span>
                                    <span className="text-[16px] font-bold text-white">support@sendbycloud.com</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner shrink-0 group-hover:bg-white/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-blue-100" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[13px] font-bold text-blue-300 uppercase tracking-widest mb-1">Office</span>
                                    <span className="text-[16px] font-bold text-white leading-relaxed">123 Cloud Avenue<br />Tech District, NY 10001</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner shrink-0 group-hover:bg-white/20 transition-colors">
                                    <Phone className="w-5 h-5 text-blue-100" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[13px] font-bold text-blue-300 uppercase tracking-widest mb-1">Phone</span>
                                    <span className="text-[16px] font-bold text-white">+1 (555) 000-0000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form (Right Side) */}
                <div className="w-full p-10 md:p-14 bg-white/50 flex flex-col justify-center">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700 ml-1">First name</label>
                                <input type="text" placeholder="John" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-[16px] text-[14px] font-semibold text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-gray-700 ml-1">Last name</label>
                                <input type="text" placeholder="Doe" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-[16px] text-[14px] font-semibold text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-gray-700 ml-1">Email</label>
                            <input type="email" placeholder="you@company.com" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-[16px] text-[14px] font-semibold text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-gray-700 ml-1">Message</label>
                            <textarea placeholder="How can we help?" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-[16px] text-[14px] font-semibold text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400 resize-none h-[140px]" />
                        </div>

                        <button className="flex items-center justify-center gap-2 mt-4 w-full h-[56px] bg-[#293a93] hover:bg-[#1e2a6a] text-white rounded-[16px] font-bold text-[15px] transition-all shadow-lg shadow-[#293a93]/20 hover:-translate-y-0.5 group">
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
