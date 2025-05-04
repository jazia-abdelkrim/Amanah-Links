import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RightIcon from '../assets/Right.svg';
import ZhourImage from '../assets/zhour.png';
import JaziaImage from '../assets/jazia.png';
import RaounakImage from '../assets/raounak.jpg';
import SaraImage from '../assets/sara.png';
import AyaImage from '../assets/aya.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      mass: 0.5
    }
  }
};

const headerVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10
    }
  }
};

const hoverEffect = {
  scale: 1.03,
  boxShadow: "0 10px 25px -5px rgba(76, 135, 255, 0.2)",
  y: -5,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

const tapEffect = {
  scale: 0.98
};

const iconHover = {
  scale: 1.3,
  y: -3,
  color: "#4C87FF",
  transition: {
    type: "spring",
    stiffness: 600
  }
};

const borderAnimation = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Team members data with all required fields
const teamMembers = [
  {
    name: "SACI Zhour",
    title: "Project Manager",
    subtitle1: "Junior Graphic & UI/UX Designer",
    subtitle2: "Student At ENSTA",
    image: ZhourImage,
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
    subtitle1: "Junior Frontend Developer",
    subtitle2: "Student At ENSTA",
    image: JaziaImage,
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
    subtitle1: "Junior Graphic & UI/UX Designer",
    subtitle2: "Student At ENSTA",
    image: RaounakImage,
    links: {
      linkedin: "https://www.linkedin.com/in/raounak-djebir-535a83301/",
      github: "https://github.com/raw-djb",
      email: "mailto:ar.djebir@ensta.edu.dz",
    },
  },
  {
    name: "ARZIM Sara",
    title: "Full Stack Web Developer",
    subtitle1: "Junior Graphic & UI/UX Designer",
    subtitle2: "Student At ENSTA",
    image: SaraImage,
    links: {
      linkedin: "https://www.linkedin.com/in/sara-arzim-0417b92b5/",
      github: "https://github.com/srx-05",
      email: "mailto:as.arzim@ensta.edu.dz",
    },
  },
  {
    name: "ZEDDOUN Aya",
    title: "Backend Developer",
    subtitle1: "Malware Analyst & DFIR Enthusiast",
    subtitle2: "Student At ENSTA",
    image: AyaImage,
    links: {
      linkedin: "https://www.linkedin.com/in/aya-zeddoun-262b7b243/",
      github: "https://github.com/ayazedd7",
      email: "mailto:aa.zeddoun@ensta.edu.dz",
    },
  }
];

const iconMap = {
  linkedin: "fab fa-linkedin",
  github: "fab fa-github",
  behance: "fab fa-behance",
  email: "fas fa-envelope",
};

// Default member data for error handling
const defaultMember = {
  name: "Team Member",
  title: "Position",
  subtitle: "Specialization",
  image: "",
  links: {}
};

const Card = ({ member = defaultMember }) => {
  const { 
    name = "Team Member",
    title = "Position",
    subtitle1 = "Specialization",
    subtitle2 = "Specialization",
    image = "",
    links = {} 
  } = member;

  return (
    <motion.div 
      className="relative bg-white rounded-xl font-zain shadow-md p-6 text-center border border-[#B5B3CA] w-full max-w-[360px] sm:max-w-[400px] md:max-w-[420px] mx-auto overflow-hidden"
      variants={itemVariants}
      whileHover={hoverEffect}
      whileTap={tapEffect}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4C87FF] via-[#41E2B8] to-[#07004D]"
        variants={borderAnimation}
      />
      
      {image && (
        <motion.div
          className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#07004D]"
          whileHover={{ rotate: 2, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={image}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            onError={(e) => {
              e.target.src = '';
              e.target.className = "w-full h-full object-cover bg-gray-200";
            }}
          />
        </motion.div>
      )}
      
      <h2 className="text-3xl font-bold text-[#4C87FF]">{name}</h2>
      <p className="text-lg text-[#07004D] mt-2">{title}</p>
      <p className="text-lg text-[#07004D]">{subtitle1}</p>
      <p className="text-lg text-[#4C87FF9D]">{subtitle2}</p>
      
      {Object.keys(links).length > 0 && (
        <motion.div 
          className="flex justify-center flex-wrap gap-4 mt-5 text-[#41E2B8] text-xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {Object.entries(links).map(([key, url]) => (
            url && (
              <motion.a 
                key={key} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={iconHover}
                whileTap={tapEffect}
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 500
                    }
                  }
                }}
                className="block"
              >
                <i className={`${iconMap[key] || 'fas fa-link'} text-2xl`}></i>
              </motion.a>
            )
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

const TeamGrid = () => {
  return (
    <motion.div 
      className="min-h-screen font-zain bg-gray-50 py-10 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header 
        className="flex items-center pb-6 mb-8 gap-4"
        variants={headerVariants}
      >
        <div className="flex items-center gap-4">
          <Link to="/">
            <motion.img 
              src={RightIcon} 
              alt="Back to Home" 
              className="w-8 h-8 md:w-[2.5rem] md:h-[2.5rem] cursor-pointer"
              whileHover={{ x: -5, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </Link>
          <motion.h1 
            className="text-5xl font-extrabold text-[#4C87FF] relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            المطورون
           {/* <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-[#4C87FF]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />*/}
          </motion.h1>
        </div>
      </motion.header>

      <motion.div 
        className="flex flex-col gap-y-8"
        variants={containerVariants}
      >
        <div className="flex flex-wrap justify-center gap-2">
          {teamMembers[0] && <Card member={teamMembers[0]} />}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers[1] && <Card member={teamMembers[1]} />}
          {teamMembers[2] && <Card member={teamMembers[2]} />}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers[3] && <Card member={teamMembers[3]} />}
          {teamMembers[4] && <Card member={teamMembers[4]} />}
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.p 
          className="text-xs text-[#8380A6] mt-8 text-center leading-relaxed"
          whileHover={{ scale: 1.02 }}
        >
          ذلكما مما علمني ربي <br />
          © 2025 Amanah Project. All rights reserved.
        </motion.p>
      </motion.footer>
    </motion.div>
  );
};

export default TeamGrid;