"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Globe, Trophy } from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: Trophy,
      title: "Sherlock Holmes Award",
      description: "For exceptional problem-solving and detective skills in quality assurance"
    },
    {
      icon: Award,
      title: "Einstein Award", 
      description: "Recognizing innovative thinking and technical excellence"
    },
    {
      icon: Trophy,
      title: "Rockstar Award",
      description: "Outstanding performance and leadership in engineering"
    },
    {
      icon: Globe,
      title: "BrowserStack Champion",
      description: "Community leader and advocate for cross-browser testing"
    }
  ];

  const workExperience = [
    {
      period: "2019-25",
      role: "Engineering Manager - SDET",
      company: "Newfold Digital",
      description: "Leading quality engineering initiatives, managing cross-functional teams, and driving automation excellence across the organization."
    },
    {
      period: "2016-19", 
      role: "Sr. Module Lead SDET & PM",
      company: "Endurance International Group",
      description: "Led SDET teams and project management for critical web presence solutions, maintaining 95%+ automation coverage."
    },
    {
      period: "2015-16",
      role: "Software Development Engineer",
      company: "SoGoSurvey Pvt. Ltd.",
      description: "Developed and tested experience management platform features, focusing on advanced customizations and analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                As an Engineering Manager – SDET at Newfold Digital, I&apos;m committed to continuous 
                improvement and bringing value to organizations that prioritize excellence through 
                growth, inspiration, and high standards.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                At 18, I embraced competition and aimed for the top. Whether acing exams, mastering tech, 
                or charming crowds, I use my wit and intelligence to win at the game of life. With patience 
                and determination, I won&apos;t back down. My sights are set on ruling the world, and my marks will soar.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tests Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">95%+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Coverage Maintained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Defects Logged</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <Image
                  src="/about-photo.jpg"
                  alt="Siddhant Wadhwani - Professional Photo"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">23K+ LinkedIn Followers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A versatile, self-directed leader with technical expertise in Testing & Automation 
              of Web-based, Client-based, Mobile applications, DevOps & Cloud.
            </p>
          </motion.div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 font-mono text-sm">
                    {job.period}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognition for exceptional contributions to quality engineering and technical leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Beyond Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              When I&apos;m not optimizing test automation frameworks, you&apos;ll find me pursuing my passions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="text-4xl mb-4">🏸</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Badminton
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strategic thinking and quick reflexes on the court, just like in debugging complex issues.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="text-4xl mb-4">🏓</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Table Tennis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Precision and timing - skills that translate perfectly to writing effective test cases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                World Travel
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Exploring new cultures and perspectives, bringing fresh insights to global tech conferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}