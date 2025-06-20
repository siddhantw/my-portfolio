"use client";

import { motion } from "framer-motion";
import { Code, Database, Users, Cloud, Shield } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Test Automation",
      percentage: 90,
      icon: Code,
      color: "bg-blue-500",
      skills: [
        "Selenium WebDriver",
        "Cypress",
        "TestNG/JUnit",
        "REST API Testing", 
        "Mobile Test Automation",
        "CI/CD Integration",
        "Page Object Model",
        "Data-Driven Testing"
      ]
    },
    {
      title: "Programming Languages",
      percentage: 80,
      icon: Code,
      color: "bg-green-500",
      skills: [
        "Java",
        "JavaScript/TypeScript",
        "Python",
        "C#",
        "SQL",
        "Shell Scripting",
        "PowerShell",
        "Groovy"
      ]
    },
    {
      title: "Database & Analytics",
      percentage: 80,
      icon: Database,
      color: "bg-purple-500",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQL Server",
        "Data Analysis",
        "Performance Testing",
        "Query Optimization",
        "Database Testing"
      ]
    },
    {
      title: "DevOps & Cloud",
      percentage: 70,
      icon: Cloud,
      color: "bg-orange-500",
      skills: [
        "Docker",
        "Jenkins",
        "GitLab CI/CD",
        "AWS",
        "Azure",
        "Kubernetes",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ]
    },
    {
      title: "Project Management",
      percentage: 75,
      icon: Users,
      color: "bg-red-500",
      skills: [
        "Agile/Scrum",
        "Team Leadership",
        "Risk Management",
        "Quality Planning",
        "Stakeholder Management",
        "Resource Planning",
        "Process Improvement",
        "Mentoring"
      ]
    },
    {
      title: "Security Testing",
      percentage: 65,
      icon: Shield,
      color: "bg-indigo-500",
      skills: [
        "OWASP Testing",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Automation",
        "Compliance Testing",
        "Risk Assessment",
        "Security Protocols",
        "Threat Modeling"
      ]
    }
  ];

  const specializations = [
    {
      title: "Shift-Left Testing",
      description: "Integrating testing early in the development cycle to catch issues before they reach production.",
      icon: "⚡"
    },
    {
      title: "In-Sprint Automation",
      description: "Building automation frameworks that seamlessly integrate with agile development processes.",
      icon: "🔄"
    },
    {
      title: "Non-Functional Testing",
      description: "Performance, security, accessibility, and usability testing to ensure comprehensive quality.",
      icon: "🎯"
    },
    {
      title: "Performance & Security Automation",
      description: "Automated testing solutions for performance benchmarks and security vulnerability detection.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive skill set built over 10+ years in quality engineering, 
              combining technical expertise with leadership experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${category.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className={`h-2 ${category.color} rounded-full`}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {category.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
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
              Testing Specializations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced testing methodologies and practices that set modern quality engineering apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{spec.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
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
              Technical Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Quantifiable impact through quality engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Test Cases Automated
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                95%+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Automation Coverage
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
            >
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                4K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Defects Identified
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
            >
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                8+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Team Members Managed
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}