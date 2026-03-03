import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Zap, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo } from '../mock';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            About{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
         
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "Turning complex problems into elegant, efficient digital solutions."
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-emerald-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold">B.Sc. in Computer Science & Engineering</h4>
                  <p className="text-gray-300">Daffodil International University</p>
                  <p className="text-gray-500 text-sm">2021 — 2025</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    10+
                  </h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    3+
                  </h3>
                  <p className="text-gray-400">Month experience</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Professional Values */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid gap-6"
            >
              {[
                {
                  icon: <Code2 className="h-8 w-8 text-emerald-400" />,
                  title: "Clean Code Architecture",
                  desc: "I prioritize writing maintainable, scalable, and reusable code following industry best practices.",
                  bg: "from-emerald-500/10 to-cyan-500/10",
                  border: "border-emerald-500/20",
                  shadow: "hover:shadow-emerald-500/20"
                },
                {
                  icon: <Rocket className="h-8 w-8 text-cyan-400" />,
                  title: "Performance Optimization",
                  desc: "Focused on building lightning-fast applications with optimized assets and smooth user journeys.",
                  bg: "from-cyan-500/10 to-blue-500/10",
                  border: "border-cyan-500/20",
                  shadow: "hover:shadow-cyan-500/20"
                },
                {
                  icon: <Zap className="h-8 w-8 text-blue-400" />,
                  title: "Modern Solutionist",
                  desc: "Leveraging cutting-edge technologies like React, Next.js, and Node.js to solve real-world problems.",
                  bg: "from-blue-500/10 to-purple-500/10",
                  border: "border-blue-500/20",
                  shadow: "hover:shadow-blue-500/20"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl bg-gradient-to-br ${item.bg} border ${item.border} backdrop-blur-sm hover:shadow-lg ${item.shadow} transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;