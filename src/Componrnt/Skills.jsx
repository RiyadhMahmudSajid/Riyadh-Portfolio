import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { skills } from '../mock';


const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Technologies I work with to build amazing projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skillCategory, idx) => {
            return (
              <motion.div key={idx} variants={itemVariants}>
                <div className="p-8 h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {skillCategory.technologies.map((tech, techIdx) => {
                      const IconComponent = LucideIcons[tech.icon];
                      return (
                        <div
                          key={techIdx}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 transition-all duration-300 group"
                        >
                          {IconComponent && (
                            <IconComponent className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                          )}
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;