"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Download, Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
              >
                🏆 BrowserStack Champion & LinkedIn Top Voice
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Siddhant Wadhwani
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
              >
                Engineering Manager - SDET
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Leading quality engineering at{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Newfold Digital
                </span>{" "}
                with 10+ years experience. Global tech speaker with 100+ talks
                across the world.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    100+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Tech Talks
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    23K+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    LinkedIn Followers
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors group"
                >
                  Let&apos;s Connect
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
                >
                  View My Work
                </Link>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Siddhant Wadhwani - Engineering Manager SDET"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-full object-cover"
                    priority
                  />
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
                >
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    BrowserStack
                  </div>
                  <div className="text-lg">🏆</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
                >
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    LinkedIn
                  </div>
                  <div className="text-lg">🎯</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
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
              Engineering Excellence Through Quality
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Based in Mumbai, working worldwide. I lead quality engineering
              initiatives, speak at global tech conferences, and mentor the next
              generation of test automation engineers.
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
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                10K+ Test Cases Automated
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Maintained 95%+ automation coverage across all sprints and feature
                releases
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Award-Winning Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sherlock Holmes, Einstein, and Rockstar awards for exceptional
                contributions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Global Tech Speaker
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                100+ talks at WordCamps, Test Summits, RoboCon Helsinki, and more
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
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
              How I Can Help You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From engineering leadership to test automation mentorship, I offer
              comprehensive services to elevate your quality engineering practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Engineering Leadership",
                description:
                  "Strategic guidance for building high-performing QA teams",
                icon: "🎯",
              },
              {
                title: "Test Automation Mentorship",
                description:
                  "1-on-1 coaching for automation best practices and career growth",
                icon: "🤖",
              },
              {
                title: "Career Coaching",
                description:
                  "Professional development guidance for SDET and QA professionals",
                icon: "📈",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors group"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
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
              Ready to Elevate Your Quality Engineering?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can enhance your testing strategy, build robust
              automation frameworks, or accelerate your career in quality
              engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Consultation
              </Link>
              <Link
                href="/speaking"
                className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch My Talks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
