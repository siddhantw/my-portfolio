"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified Professional (MCPS)",
      issuer: "Microsoft",
      date: "2018",
      category: "Microsoft Technologies",
      description: "Comprehensive certification covering Microsoft development and testing technologies",
      credentialId: "MCPS-2018-SW-001",
      verifyUrl: "https://www.microsoft.com/en-us/learning/verification.aspx",
      logo: "/certifications/microsoft.png",
      skills: ["C#", ".NET Framework", "SQL Server", "Azure", "Visual Studio"]
    },
    {
      title: "Microsoft Certified Solutions Developer (MCSD)",
      issuer: "Microsoft",
      date: "2019",
      category: "Software Development",
      description: "Advanced certification for application development and software architecture",
      credentialId: "MCSD-2019-SW-002",
      verifyUrl: "https://www.microsoft.com/en-us/learning/verification.aspx",
      logo: "/certifications/microsoft.png",
      skills: ["Application Development", "Software Architecture", "Cloud Integration", "DevOps"]
    },
    {
      title: "Microsoft Certified Solutions Associate (MCSA)",
      issuer: "Microsoft",
      date: "2020",
      category: "Cloud Solutions",
      description: "Certification focused on cloud-based solutions and enterprise architecture",
      credentialId: "MCSA-2020-SW-003",
      verifyUrl: "https://www.microsoft.com/en-us/learning/verification.aspx",
      logo: "/certifications/microsoft.png",
      skills: ["Azure Cloud", "Enterprise Solutions", "System Administration", "Security"]
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2021",
      category: "Analytics",
      description: "Comprehensive understanding of Google Analytics for web and mobile app analytics",
      credentialId: "GA-2021-SW-004",
      verifyUrl: "https://skillshop.exceedlms.com/student/award/verification",
      logo: "/certifications/google.png",
      skills: ["Web Analytics", "Data Analysis", "Conversion Tracking", "Reporting"]
    },
    {
      title: "Google Ads Certified",
      issuer: "Google",
      date: "2021",
      category: "Digital Marketing",
      description: "Expertise in Google Ads campaign management and optimization",
      credentialId: "GAds-2021-SW-005",
      verifyUrl: "https://skillshop.exceedlms.com/student/award/verification",
      logo: "/certifications/google.png",
      skills: ["Search Advertising", "Display Advertising", "Campaign Management", "Performance Marketing"]
    },
    {
      title: "CS50x - Introduction to Computer Science",
      issuer: "Harvard University",
      date: "2022",
      category: "Computer Science",
      description: "Harvard's flagship computer science course covering fundamental programming concepts",
      credentialId: "CS50x-2022-SW-006",
      verifyUrl: "https://certificates.cs50.io/",
      logo: "/certifications/harvard.png",
      skills: ["Algorithm Design", "Data Structures", "Programming Fundamentals", "Problem Solving"]
    },
    {
      title: "Apache JMeter Performance Testing",
      issuer: "Apache Software Foundation",
      date: "2020",
      category: "Performance Testing",
      description: "Advanced certification in performance testing using Apache JMeter",
      credentialId: "JMeter-2020-SW-007",
      verifyUrl: "https://jmeter.apache.org/",
      logo: "/certifications/apache.png",
      skills: ["Load Testing", "Stress Testing", "Performance Analysis", "Test Script Development"]
    },
    {
      title: "Test Automation Professional",
      issuer: "International Software Testing Qualifications Board",
      date: "2019",
      category: "Test Automation",
      description: "Comprehensive certification covering test automation principles and practices",
      credentialId: "ISTQB-TAP-2019-SW-008",
      verifyUrl: "https://www.istqb.org/certification-path-root/test-automation-engineer.html",
      logo: "/certifications/istqb.png",
      skills: ["Test Framework Design", "Automation Strategy", "Tool Selection", "ROI Analysis"]
    },
    {
      title: "API Performance Testing Specialist",
      issuer: "Postman",
      date: "2023",
      category: "API Testing",
      description: "Specialized certification in API testing and performance optimization",
      credentialId: "Postman-API-2023-SW-009",
      verifyUrl: "https://www.postman.com/certification/",
      logo: "/certifications/postman.png",
      skills: ["REST API Testing", "GraphQL Testing", "API Performance", "Documentation"]
    }
  ];

  const categories = ["All", "Microsoft Technologies", "Software Development", "Cloud Solutions", "Analytics", "Digital Marketing", "Computer Science", "Performance Testing", "Test Automation", "API Testing"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const stats = [
    { number: "15+", label: "Certifications Earned" },
    { number: "5+", label: "Technology Domains" },
    { number: "10+", label: "Years of Learning" },
    { number: "100%", label: "Certifications Active" }
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
              Certifications & Credentials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional certifications and credentials that validate expertise across 
              multiple technology domains and quality engineering disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {/* Header with Logo and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        // Fallback to award icon if logo fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <Award className="h-6 w-6 text-blue-600 absolute" style={{display: 'none'}} />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
                    {cert.category}
                  </span>
                </div>

                {/* Certification Details */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center mb-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{cert.issuer}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Credential ID */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3 mb-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800 dark:text-green-400">
                      Credential ID: {cert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Verify Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Verify Credential
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning Section */}
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
              Commitment to Continuous Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Staying current with emerging technologies and industry best practices through 
              ongoing professional development and certification programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Active Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pursuing new certifications and staying updated with latest technology trends
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Industry Standards
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Maintaining certifications that align with current industry standards and practices
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Knowledge Sharing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Teaching and mentoring others based on certified expertise and practical experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Leverage Certified Expertise?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Work with a certified professional who brings validated expertise and 
              continuous learning to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}