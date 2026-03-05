import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../mock';
import Button from './ui/Button';
import Profile from '/profile.jpg'


const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >

      <div className="absolute top-20 left-10 w-72 h-72 bg-primaryGreen/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primaryBlue/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primaryGreen/5 border border-primaryGreen/30 text-primaryGreen text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-extrabold">
                  {personalInfo.name}
                </span>

                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-lg blur opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6"
            >
              {personalInfo.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            >

              <button

                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600  px-8 py-3 rounded-full text-white font-bold text-sm hover:opacity-90 transition-all"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resume}
                download="Riyadh_Mahmud_Sajid_Resume.pdf"
                className="no-underline"
              >
                <Button
                  variant="outline"
                  className="border-primaryGreen/50 text-primaryGreen hover:bg-primaryGreen/5 px-8 py-3"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>

            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-5"
            >
              {[
                { Icon: Github, href: personalInfo.github },
                { Icon: Linkedin, href: personalInfo.linkedin },
                { Icon: Mail, href: personalInfo.emailLink }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primaryGreen hover:border-primaryGreen/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primaryGreen/10"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Spinning Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryGreen via-primaryBlue to-transparent opacity-20 blur-2xl"></div>
              </motion.div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Outer decorative ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-1"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 animate-pulse"></div>
                </motion.div>

                {/* Inner container */}
                <div className="absolute inset-2 rounded-full bg-black border-4 border-emerald-500/20 overflow-hidden shadow-2xl">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Tech Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primaryBlue/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="text-primaryBlue h-8 w-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;