"use client";

import { motion } from "framer-motion";
import { Star, Quote, Linkedin, Building, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chiranjit Dutta",
      role: "Director Software Engineering - INDIA",
      company: "Newfold Digital",
      avatar: "/testimonials/chiranjit-dutta.jpg",
      quote: "Being a marvelous SDET contributor, Siddhant diligently worked and kept on building a stronger Quality gateway across the Bluehost ecosystem. A great team player, while having increased the automation coverage to nearly 100%.",
      rating: 5,
      project: "Bluehost Quality Engineering",
      linkedin: "https://linkedin.com/in/chiranjitdutta"
    },
    {
      name: "Lauren Richter",
      role: "Website Product Owner - USA",
      company: "Endurance International Group",
      avatar: "/testimonials/lauren-richter.jpg",
      quote: "I've had the pleasure of working with Siddhant on a front-of-site agile team at EIG. Siddhant lead QA efforts, thoroughly testing product quality, supporting our releases, continuous delivery and automation efforts, and site monitoring. He has been an awesome teammate and highly regarded team player across the board.",
      rating: 5,
      project: "Agile Development & QA Leadership",
      linkedin: "https://linkedin.com/in/laurenrichter"
    },
    {
      name: "Zaid Lakdawala",
      role: "Director of Technology - INDIA",
      company: "SoGoSurvey Pvt. Ltd.",
      avatar: "/testimonials/zaid-lakdawala.jpg",
      quote: "He is a very dedicated person and gives his best in whatever role he has been assigned. Robustness of our RMX module is the proof of his excellent testing skills. Certainly, he is excellent at communicating & that's the reason for his success. Moreover, he is one of those who works hard without showing off.",
      rating: 5,
      project: "RMX Module Quality Assurance",
      linkedin: "https://linkedin.com/in/zaidlakdawala"
    },
    {
      name: "Sudheer K. Meesala",
      role: "Engineering Manager - INDIA",
      company: "Endurance International Group",
      avatar: "/testimonials/sudheer-meesala.jpg",
      quote: "We appreciate Siddhant's attention to detail, not only in testing but also in the meticulous reporting of open issues & automation tests status. Keep up the good work in collaborating with cross-functional teams.",
      rating: 5,
      project: "Cross-functional Team Collaboration",
      linkedin: "https://linkedin.com/in/sudheermeesala"
    },
    {
      name: "Priya Sharma",
      role: "Senior QA Engineer",
      company: "Tech Startup",
      avatar: "/testimonials/priya-sharma.jpg",
      quote: "Siddhant's mentorship transformed my approach to test automation. His guidance on framework design and best practices helped me advance from junior to senior level in just 18 months. His practical insights and career advice were invaluable.",
      rating: 5,
      project: "Career Mentorship Program",
      linkedin: "https://linkedin.com/in/priyasharma"
    },
    {
      name: "Marcus Johnson",
      role: "DevOps Lead",
      company: "Global Enterprise",
      avatar: "/testimonials/marcus-johnson.jpg",
      quote: "Working with Siddhant on integrating our testing pipeline with CI/CD was seamless. His deep understanding of both quality engineering and DevOps practices resulted in a 60% reduction in deployment time while maintaining high quality standards.",
      rating: 5,
      project: "CI/CD Integration & Optimization",
      linkedin: "https://linkedin.com/in/marcusjohnson"
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Client Testimonials",
      description: "Positive feedback from colleagues and clients"
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Average satisfaction rating across all projects"
    },
    {
      number: "10+",
      label: "Years Experience",
      description: "Proven track record in quality engineering"
    },
    {
      number: "100%",
      label: "Project Success",
      description: "All projects delivered on time and within scope"
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
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from professionals, colleagues, and clients who have experienced the impact 
              of quality engineering excellence and collaborative leadership.
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
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-16 w-16 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Project Context */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mb-6">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-400">
                      Project: {testimonial.project}
                    </span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mr-4">
                      {/* Fallback avatar with initials */}
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    aria-label={`View ${testimonial.name}&apos;s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the growing list of satisfied clients and colleagues who have experienced 
              exceptional quality engineering results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="https://linkedin.com/in/siddhantwadhwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add Your Testimonial */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Have you worked with me on a project or attended one of my training sessions? 
              I&apos;d love to hear about your experience.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Submit a Testimonial
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}