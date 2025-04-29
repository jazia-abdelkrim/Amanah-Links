import React from "react";
import { Github, Users, Mail, ClipboardList, Link } from "lucide-react";


export default function AmanahLinktree() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-[#F0FDF9] text-[#07004D] p-12 space-y-14">

            {/* Profile Picture */}
            <div className="w-full max-w-md flex flex-col items-center space-y-6">
                <img
                    src="/assets/pph-amanah.png"
                    alt="Amanah Logo"
                    className="w-56 h-56 rounded-full shadow-md border "
                />
                <h1 className="text-2xl text-center font-extrabold max-w-md">
                    Amanah Platform | منصة أمانة
                </h1>
                {/* Introduction Text */}
                <h1 className="text-xl text-center font-normal max-w-lg">
                    Amanah is a digital platform that connects people to report and recover lost or found items in the safest and most reliable way.
                </h1>
            </div>


            {/* Links Section */}
            <div className="w-full max-w-md flex flex-col space-y-6">

                {/* website Section */}
                <a
                    href="https://amanah.dz"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full text-center py-3 bg-[#4C87FF] text-white text-2xl rounded-lg hover:bg-[#41E2B8] shadow transition"
                >
                    Visit Our Website
                    <Link size={24} />
                </a>

                {/* GitHub Section */}
                <a
                    href="https://github.com/Z034/PRJP.git"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full text-center py-3 bg-[#4C87FF] text-white text-2xl rounded-lg hover:bg-[#41E2B8] shadow transition"
                >
                    GitHub Repository
                    <Github size={24} />
                </a>

                {/* form Section */}
                <a
                    href="https://forms.gle/6DiVqrNksPdtVxPv6"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-[#4C87FF] text-white text-2xl rounded-lg hover:bg-[#41E2B8] shadow transition"
                >
                    Give a Feedback
                    <ClipboardList size={24} />
                </a>

                {/* Developers Section */}
                <a
                    href="https://amanah.dz/team"
                    className="flex items-center justify-center gap-3 w-full text-center py-3 bg-[#4C87FF] text-white text-2xl rounded-lg hover:bg-[#41E2B8] shadow transition"
                >
                    Our Development Team
                    <Users size={24} />
                </a>

                {/* Contact Section */}
                <a
                    href="mailto:contact.amanah.dz@gmail.com"
                    className="flex items-center justify-center gap-3 w-full text-center py-3 bg-[#4C87FF] text-white text-2xl rounded-lg hover:bg-[#41E2B8] shadow transition"
                >
                    Email Us
                    <Mail size={24} />
                </a>
            </div>

            {/* Footer */}
            <p className="text-xs text-[#8380A6] mt-8 text-center leading-relaxed">
                &#123; ذلكما مما علمني ربي &#125; <br />
                © 2025 Amanah Project. All rights reserved.
            </p>

        </div>
    );
}
