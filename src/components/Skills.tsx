import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain, Users, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'Docker', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI/ML Libraries',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Team Leadership', 'Problem Solving', 'Communication', 'Project Management', 'Agile', 'Mentoring'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Specializations',
      icon: Lightbulb,
      skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'API Development', 'DevOps'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies, frameworks, and skills that I use to build innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-6`}
              >
                <category.icon className="text-white" size={28} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover:shadow-lg transition-all duration-200`}
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;