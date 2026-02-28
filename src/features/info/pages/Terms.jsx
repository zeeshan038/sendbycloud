import React from 'react';

const Terms = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4f9] to-[#d6e4f9] pt-[120px] pb-20 px-6 lg:px-12 flex flex-col items-center">
            <div className="max-w-4xl w-full bg-white rounded-[32px] shadow-sm border border-white/50 p-8 md:p-12 ring-1 ring-gray-100">
                <h1 className="text-4xl lg:text-5xl font-black text-[#1e2a6a] mb-8 tracking-tight">Terms of Service</h1>
                <div className="space-y-8 text-gray-600 leading-relaxed font-medium">
                    <p className="text-gray-500">Last updated: <span className="text-gray-800 font-bold">October 24, 2023</span></p>

                    <section>
                        <h2 className="text-2xl font-bold text-[#293a93] mb-3">1. Agreement to Terms</h2>
                        <p>By accessing or using SendByCloud, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all of the terms and conditions outlined here, you may not access or use our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#293a93] mb-3">2. Service Usage and File Transfers</h2>
                        <p className="mb-4">Our service enables you to upload, host, share and transfer files ("Content"). You are completely responsible for the Content that you send via the Service.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You must not upload viruses, malware, or any other malicious code.</li>
                            <li>You must not share illegal or highly inappropriate content.</li>
                            <li>Files are stored temporarily on our servers for the sole purpose of delivery and will be permanently deleted upon expiration of the transfer window.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#293a93] mb-3">3. User Accounts & Subscriptions</h2>
                        <p>When you register an account with us, you guarantee that you are above the age of 18, and that the information you provide is accurate at all times. Premium subscriptions are billed in advance on a recurring basis as outlined at the time of purchase.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#293a93] mb-3">4. Limitation of Liability</h2>
                        <p>In no event shall SendByCloud, nor its directors, employees, partners or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or inability to access or use the Service.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
