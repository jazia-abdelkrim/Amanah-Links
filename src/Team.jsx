import React from "react";

const teamMembers = [
    {
        name: "SACI Zhour",
        title: "Project Manager",
        subtitle: "Junior Graphic & UI/UX Designer",
        image: "/public/assets/zhour.png",
        links: {
            linkedin: "https://www.linkedin.com/in/zhour-saci-7711aa326/",
            github: "https://github.com/Z034",
            behance: "https://www.behance.net/zhoursaci",
            email: "mailto:az.saci@ensta.edu.dz.com",
        },
    },
    {
        name: "ABDELKRIM Jazia",
        title: "Graphic & UI/UX Designer",
        subtitle: "Junior Frontend Developer",
        image: "/public/assets/jazia.png",
        links: {
            linkedin: "https://www.linkedin.com/in/jazia-abdelkrim/",
            github: "https://github.com/jazia-abdelkrim",
            behance: "https://www.behance.net/jazia_abdelkrim",
            email: "mailto:aj.abdelkrim@ensta.edu.dz",
        },
    },
    {
        name: "DJEBIR Raounak",
        title: "Frontend Developer",
        subtitle: "Junior Graphic & UI/UX Designer",
        image: "/public/assets/raounak.jpg",
        links: {
            linkedin: "https://www.linkedin.com/in/raounak-djebir-535a83301/",
            github: "https://github.com/raw-djb",
            email: "mailto:ar.djebir@ensta.edu.dz",
        },
    },
    {
        name: "ARZIM Sara",
        title: "Full Stack Web Developer",
        subtitle: "Junior Graphic & UI/UX Designer",
        image: "/public/assets/sara.png",
        links: {
            linkedin: "https://www.linkedin.com/in/sara-arzim-0417b92b5/",
            github: "https://github.com/srx-05",
            email: "mailto:as.arzim@ensta.edu.dz",
        },
    },
    {
        name: "ZEDDOUN Aya",
        title: "Backend Developer",
        subtitle: "Malware Analyst & DFIR Enthusiast",
        image: "/public/assets/aya.jpg",
        links: {
            linkedin: "https://www.linkedin.com/in/aya-zeddoun-262b7b243/",
            github: "https://github.com/ayazedd7",
            email: "mailto:aa.zeddoun@ensta.edu.dz",
        },
    },
];

const iconMap = {
    linkedin: "fab fa-linkedin",
    github: "fab fa-github",
    behance: "fab fa-behance",
    email: "fas fa-envelope",
};

const Card = ({ member }) => (
    <div className="bg-white rounded-xl shadow-md p-6 text-center border border-[#B5B3CA] w-full max-w-[360px] sm:max-w-[400px] md:max-w-[420px] mx-auto">
        <img
            src={member.image}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border border-[#07004D]"
        />
        <h2 className="text-3xl font-bold text-[#4C87FF]">{member.name}</h2>
        <p className="text-lg text-[#07004D] mt-2">{member.title}</p>
        <p className="text-lg text-[#07004D]">{member.subtitle}</p>
        <div className="flex justify-center flex-wrap gap-2 mt-3 text-[#41E2B8] text-xl">
            {Object.entries(member.links).map(([key, url]) => (
                url && (
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                        <i className={iconMap[key]}></i>
                    </a>
                )
            ))}
        </div>
    </div>
);

const TeamGrid = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <header className="flex items-center pb-6 mb-8 gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src="/assets/img_3.png"
                        alt="Back to Home"
                        className="w-[2.5rem] h-[2.5rem]"
                    />
                    <h1 className="text-4xl font-extrabold text-[#4C87FF]">المطورون</h1>
                </div>
            </header>
            <div className="flex flex-col gap-y-8">
                <div className="flex flex-wrap justify-center gap-2">
                    <Card member={teamMembers[0]} />
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <Card member={teamMembers[1]} />
                    <Card member={teamMembers[2]} />
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <Card member={teamMembers[3]} />
                    <Card member={teamMembers[4]} />
                </div>
            </div>
            {/* Footer */}

            <p className="text-xs text-[#8380A6] mt-8 text-center leading-relaxed">
                &#123; ذلكما مما علمني ربي &#125; <br />
                © 2025 Amanah Project. All rights reserved.
            </p>
        </div>
    );
};

export default TeamGrid;
