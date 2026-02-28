import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    CloudUpload,
    DownloadCloud,
    Image as ImageIcon,
    Users,
    Lock,
    User,
    LogOut
} from "lucide-react";

const sidebarTabs = [
    { icon: CloudUpload, label: "My uploads", sub: "Manage your uploads", path: "/my-account/uploads" },
    { icon: DownloadCloud, label: "My Received Files", sub: "Files sent to you", path: "/my-account/received" },
    { icon: ImageIcon, label: "My backgrounds", sub: "Custom backgrounds", path: "/my-account/backgrounds" },
    { icon: Users, label: "Sub-users", sub: "Manage users", path: "/my-account/sub-users" },
    { icon: Lock, label: "Change Password", sub: "Change your password", path: "/my-account/password" },
    { icon: User, label: "My account", sub: "Account settings", path: "/my-account/settings" },
];

const Account = () => {
    const location = useLocation();

    return (
        <div className="w-full h-screen overflow-hidden bg-[#fafafa] flex flex-col pt-[85px] lg:pt-[90px]">
            {/* Top Line */}
            <div className="w-full border-t border-gray-200 flex-shrink-0"></div>

            {/* Main Layout Area */}
            <div className="w-full flex-1 flex flex-col md:flex-row overflow-hidden">

                {/* Sidebar */}
                <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0 flex flex-col gap-2 px-6 py-8 border-r border-gray-200 bg-[#fafafa] overflow-y-auto">
                    {sidebarTabs.map((tab, idx) => {
                        // Consider active if matching exact path or if we're at /my-account and the first tab
                        const activePath = location.pathname;
                        const isActive = activePath === tab.path || (activePath === "/my-account" && idx === 0);

                        return (
                            <Link
                                key={idx}
                                to={tab.path}
                                className={`flex items-center gap-4 px-5 py-4 rounded-[16px] transition-all cursor-pointer border ${isActive
                                    ? "bg-[#293a93] border-[#293a93] text-white shadow-md shadow-[#293a93]/20"
                                    : "bg-transparent border-transparent text-gray-700 hover:bg-white hover:border-gray-100 hover:shadow-sm"
                                    }`}
                            >
                                <div className={`${isActive ? "text-white" : "text-gray-400"}`}>
                                    <tab.icon className="w-[22px] h-[22px]" strokeWidth={2} />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[15px] font-semibold leading-tight ${isActive ? "text-white" : "text-gray-900"}`}>
                                        {tab.label}
                                    </span>
                                    <span className={`text-[12px] font-medium mt-0.5 ${isActive ? "text-white/80" : "text-gray-400"}`}>
                                        {tab.sub}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}

                    <div className="mt-8 border-t border-gray-200 pt-6 px-4">
                        <button className="flex items-center gap-3 text-red-500 hover:text-red-600 font-semibold text-[14px] transition-colors">
                            <LogOut className="w-[18px] h-[18px]" strokeWidth={2} />
                            Log out
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 min-w-0 p-6 lg:p-10 overflow-y-auto">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Account;