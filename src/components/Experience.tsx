import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'PlayPower Labs',
      location: 'Remote',
      duration: 'Summer 2025',
      type: 'Internship',
      description: [
        'Developed an AI-powered Question Paper Generator using advanced machine learning algorithms',
        'Implemented natural language processing techniques to create diverse and balanced assessments',
        'Built automated systems for generating customized question papers for educational institutions',
        'Collaborated with the development team to integrate AI solutions into existing educational platforms',
        'Optimized question generation algorithms to improve accuracy and relevance of generated content',
      ],
      technologies: ['Python', 'TensorFlow', 'Natural Language Processing', 'Flask', 'SQLite', 'Machine Learning'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'PDF Chatbot Development',
      company: 'Personal Project',
      location: 'Independent',
      duration: 'Jan 2025 - Present',
      type: 'Self-Project',
      description: [
        'Built an intelligent chatbot capable of analyzing and answering questions about PDF documents',
        'Implemented advanced natural language processing using LangChain and OpenAI API',
        'Developed document parsing and vector embedding systems for efficient information retrieval',
        'Created an intuitive user interface using Streamlit for seamless document interaction',
        'Integrated FAISS for fast similarity search and document chunk management',
      ],
      technologies: ['Python', 'LangChain', 'OpenAI API', 'Streamlit', 'PyPDF2', 'FAISS'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through professional internship and innovative self-projects, building expertise in AI and software development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
              )}

              <div className="flex items-start space-x-8">
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <Briefcase className="text-white" size={24} />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {experience.company}
                      </p>
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 bg-gradient-to-r ${experience.color} text-white rounded-full text-sm font-semibold shadow-md`}
                    >
                      {experience.type}
                    </motion.span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;