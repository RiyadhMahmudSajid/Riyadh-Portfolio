import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { Code2, Rocket, Zap } from 'lucide-react';
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    4+
                  </h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    20+
                  </h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                <Code2 className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
                <p className="text-gray-400">
                  Writing maintainable, scalable, and well-documented code is my priority.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <Rocket className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Fast Performance</h3>
                <p className="text-gray-400">
                  Optimizing applications for speed and efficiency is essential.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Modern Stack</h3>
                <p className="text-gray-400">
                  Using cutting-edge technologies to build future-proof solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;