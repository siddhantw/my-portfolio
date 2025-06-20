"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "The Realm Dashboard",
      description: "Comprehensive analytics and monitoring dashboard for quality engineering metrics, providing real-time insights into test automation coverage, defect trends, and team performance.",
      image: "/projects/realm-dashboard.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Docker"],
      features: [
        "Real-time test execution monitoring",
        "Automated reporting and alerts",
        "Team performance analytics",
        "Integration with CI/CD pipelines"
      ],
      liveUrl: "https://realm-dashboard.example.com",
      githubUrl: "https://github.com/siddhantwadhwani/realm-dashboard",
      category: "Dashboard",
      impact: "Reduced reporting time by 80% and improved visibility across 5 engineering teams"
    },
    {
      title: "SiRaKi Automation Portal",
      description: "Centralized test automation platform enabling teams to create, manage, and execute automated test suites across multiple environments and technologies.",
      image: "/projects/siraki-portal.jpg",
      technologies: ["Java", "Selenium", "Spring Boot", "PostgreSQL", "Kubernetes"],
      features: [
        "Multi-browser test execution",
        "Parallel test running",
        "Environment management",
        "Test data management"
      ],
      liveUrl: "https://siraki-portal.example.com",
      githubUrl: "https://github.com/siddhantwadhwani/siraki-portal",
      category: "Automation",
      impact: "Increased automation coverage from 60% to 95% across all product lines"
    },
    {
      title: "Insignia Loyalty Platform",
      description: "End-to-end testing framework for a customer loyalty platform, ensuring reliability and performance at scale with comprehensive API and UI testing.",
      image: "/projects/insignia-loyalty.jpg",
      technologies: ["Python", "Pytest", "REST Assured", "Jenkins", "AWS"],
      features: [
        "API testing automation",
        "Performance testing suite",
        "Security testing integration",
        "Cross-platform compatibility"
      ],
      liveUrl: "https://insignia-loyalty.example.com",
      githubUrl: "https://github.com/siddhantwadhwani/insignia-loyalty",
      category: "Testing Framework",
      impact: "Reduced critical bugs in production by 70% and improved customer satisfaction"
    },
    {
      title: "Quality Engineering Blog",
      description: "Technical blog platform focused on modern testing practices, automation strategies, and quality engineering insights with interactive code examples.",
      image: "/projects/qa-blog.jpg",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel", "Algolia"],
      features: [
        "Interactive code examples",
        "Category-based filtering",
        "Search functionality",
        "Social sharing integration"
      ],
      liveUrl: "https://qa-blog.siddhantwadhwani.com",
      githubUrl: "https://github.com/siddhantwadhwani/qa-blog",
      category: "Blog",
      impact: "Reached 50K+ monthly readers and became a go-to resource for QA professionals"
    },
    {
      title: "Food & Travel Chronicles",
      description: "Personal blog documenting culinary adventures and travel experiences around the world, with rich visual storytelling and location-based content.",
      image: "/projects/food-travel-blog.jpg",
      technologies: ["WordPress", "PHP", "MySQL", "Google Maps API"],
      features: [
        "Location-based posts",
        "Image galleries",
        "Recipe sharing",
        "Travel itineraries"
      ],
      liveUrl: "https://food-travel.siddhantwadhwani.com",
      githubUrl: null,
      category: "Blog",
      impact: "Built a community of 10K+ food and travel enthusiasts"
    },
    {
      title: "Metaverse Testing Framework",
      description: "Innovative testing framework for virtual reality and metaverse applications, addressing unique challenges in immersive technology testing.",
      image: "/projects/metaverse-testing.jpg",
      technologies: ["Unity", "C#", "WebRTC", "Docker", "Kubernetes"],
      features: [
        "VR environment testing",
        "Performance monitoring",
        "User interaction validation",
        "Cross-platform compatibility"
      ],
      liveUrl: "https://metaverse-testing.example.com",
      githubUrl: "https://github.com/siddhantwadhwani/metaverse-testing",
      category: "Innovation",
      impact: "Pioneered testing methodologies for emerging VR/AR applications"
    }
  ];

  const categories = ["All", "Dashboard", "Automation", "Testing Framework", "Blog", "Innovation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Portfolio & Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of innovative quality engineering solutions, automation frameworks, 
              and technical projects that have driven measurable impact across organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                  {/* Fallback gradient background with project icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white/80">
                      {project.category === 'Dashboard' && '📊'}
                      {project.category === 'Automation' && '🤖'}
                      {project.category === 'Testing Framework' && '🧪'}
                      {project.category === 'Blog' && '📝'}
                      {project.category === 'Innovation' && '🚀'}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-medium text-gray-900 dark:text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-400">Impact</span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Project Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Measurable results across all projects and initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Delivered
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                80%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Average Efficiency Gain
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg"
            >
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                50K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Users Impacted
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg"
            >
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Organizations Served
              </div>
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate on building innovative quality engineering solutions that drive real impact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors"
            >
              Start a Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}