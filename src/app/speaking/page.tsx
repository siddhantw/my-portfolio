"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Calendar, Play, MapPin, Users } from "lucide-react";

export default function Speaking() {
  const upcomingEvents = [
    {
      title: "Quality Engineering Summit 2025",
      date: "July 15-16, 2025",
      location: "San Francisco, CA",
      type: "Keynote",
      topic: "The Future of Test Automation in AI-Driven Development",
      audience: "500+ QA professionals",
      status: "confirmed",
      url: "https://qesummit2025.com"
    },
    {
      title: "WordCamp Asia 2025",
      date: "August 8-10, 2025", 
      location: "Bangkok, Thailand",
      type: "Workshop",
      topic: "Building Robust Testing Frameworks for WordPress at Scale",
      audience: "200+ developers",
      status: "confirmed",
      url: "https://asia.wordcamp.org/2025"
    }
  ];

  const pastEvents = [
    {
      title: "RoboCon Helsinki 2024",
      date: "January 2024",
      location: "Helsinki, Finland",
      type: "Keynote",
      topic: "Automation Beyond Testing: AI in Quality Engineering",
      audience: "800+ attendees",
      recording: "https://youtube.com/watch?v=example1",
      slides: "https://slideshare.net/example1"
    },
    {
      title: "Test Summit India 2023",
      date: "November 2023",
      location: "Bangalore, India",
      type: "Technical Session",
      topic: "Shift-Left Testing: Implementation Strategies That Actually Work",
      audience: "600+ QA professionals",
      recording: "https://youtube.com/watch?v=example2",
      slides: "https://slideshare.net/example2"
    },
    {
      title: "WordCamp Europe 2023",
      date: "June 2023",
      location: "Athens, Greece",
      type: "Workshop",
      topic: "Performance Testing for High-Traffic WordPress Sites",
      audience: "300+ developers",
      recording: "https://youtube.com/watch?v=example3",
      slides: "https://slideshare.net/example3"
    },
    {
      title: "SeleniumConf Chicago 2023",
      date: "March 2023",
      location: "Chicago, IL",
      type: "Technical Session",
      topic: "Scaling Selenium: From 100 to 10,000 Tests",
      audience: "1000+ automation engineers",
      recording: "https://youtube.com/watch?v=example4",
      slides: "https://slideshare.net/example4"
    },
    {
      title: "Agile Testing Days 2022",
      date: "November 2022",
      location: "Potsdam, Germany",
      type: "Panel Discussion",
      topic: "The Evolution of Quality Engineering: Past, Present, Future",
      audience: "700+ agile practitioners",
      recording: "https://youtube.com/watch?v=example5",
      slides: "https://slideshare.net/example5"
    },
    {
      title: "TestBash Manchester 2022",
      date: "September 2022",
      location: "Manchester, UK",
      type: "Lightning Talk",
      topic: "BrowserStack Champions: Community-Driven Testing Excellence",
      audience: "400+ testers",
      recording: "https://youtube.com/watch?v=example6",
      slides: "https://slideshare.net/example6"
    }
  ];

  const topics = [
    {
      title: "Test Automation Excellence",
      icon: "🤖",
      description: "Framework design, best practices, and scaling strategies for test automation"
    },
    {
      title: "Quality Engineering Leadership",
      icon: "👥",
      description: "Building high-performing QA teams and establishing quality culture"
    },
    {
      title: "DevOps & CI/CD for QA",
      icon: "🔄",
      description: "Integrating testing into modern development pipelines"
    },
    {
      title: "Performance & Security Testing",
      icon: "🛡️",
      description: "Non-functional testing strategies and implementation"
    },
    {
      title: "Career Development in QA",
      icon: "📈",
      description: "Professional growth paths and skill development for QA professionals"
    },
    {
      title: "AI & ML in Testing",
      icon: "🧠",
      description: "Leveraging artificial intelligence for smarter testing approaches"
    }
  ];

  const stats = [
    { number: "120+", label: "Speaking Engagements" },
    { number: "50K+", label: "Total Audience Reached" },
    { number: "10+", label: "Countries Spoken In" },
    { number: "95%", label: "Average Session Rating" }
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
              Speaking & Events
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sharing knowledge and insights on quality engineering, test automation, 
              and technical leadership at conferences and events worldwide.
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

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join me at these upcoming conferences and events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                    Confirmed
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {event.topic}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    {event.audience}
                  </div>
                </div>

                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Event Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
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
              Speaking Topics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Areas of expertise I love to share with audiences worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
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
              Past Speaking Engagements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of recent talks and presentations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {event.topic}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    {event.audience}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={event.recording}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Recording
                  </a>
                  <a
                    href={event.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Slides
                  </a>
                </div>
              </motion.div>
            ))}
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
              Invite Me to Speak
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Looking for an engaging speaker for your next event? Let&apos;s discuss how I can 
              contribute to your conference, meetup, or corporate event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Book Speaking Engagement
              </Link>
              <a
                href="/speaker-kit.pdf"
                className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold rounded-lg transition-colors"
                download
              >
                Download Speaker Kit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}