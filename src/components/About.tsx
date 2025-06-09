import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies and frameworks',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building intelligent solutions with cutting-edge AI',
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Always exploring new technologies and methodologies',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer and AI enthusiast with a strong foundation in 
            modern web technologies and machine learning. I love creating innovative solutions 
            that bridge the gap between cutting-edge technology and real-world applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <highlight.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                As a dedicated software engineer, I've been immersing myself in the world of 
                technology with a particular focus on Full Stack Development and Artificial Intelligence. 
                My journey has been driven by curiosity and a desire to create meaningful solutions 
                that make a difference.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm constantly learning and adapting to new technologies, always excited about 
                the next challenge and opportunity to grow. My goal is to leverage technology 
                to solve complex problems and create innovative applications that have a positive impact.
              </p>
            </div>
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="w-full h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl opacity-20"
              />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-30"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;