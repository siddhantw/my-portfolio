"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Mic, 
  GraduationCap, 
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Engineering Leadership Consulting",
      description: "Strategic guidance for building high-performing QA teams and implementing quality engineering best practices.",
      features: [
        "Quality strategy development",
        "Team structure optimization",
        "Process improvement",
        "Tool selection and implementation",
        "Metrics and KPI establishment",
        "Risk assessment and mitigation"
      ],
      price: "Starting from $200/hour",
      duration: "1-3 months engagement",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Test Automation Mentorship",
      description: "1-on-1 coaching for automation best practices, framework design, and technical skill development.",
      features: [
        "Framework architecture design",
        "Code review and optimization",
        "CI/CD integration strategies",
        "Performance testing guidance",
        "Security testing implementation",
        "Career development planning"
      ],
      price: "Starting from $150/hour",
      duration: "Ongoing sessions",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Career Coaching",
      description: "Professional development guidance for SDET and QA professionals looking to advance their careers.",
      features: [
        "Career path planning",
        "Resume and portfolio review",
        "Interview preparation",
        "Skill gap analysis",
        "Leadership development",
        "Industry insights and trends"
      ],
      price: "Starting from $100/hour",
      duration: "3-6 month programs",
      color: "bg-purple-500"
    },
    {
      icon: Mic,
      title: "Speaking Engagements",
      description: "Keynote speeches and technical presentations for conferences, meetups, and corporate events.",
      features: [
        "Keynote presentations",
        "Technical workshops",
        "Panel discussions",
        "Webinar hosting",
        "Corporate training sessions",
        "Conference speaking"
      ],
      price: "Contact for pricing",
      duration: "1-3 days",
      color: "bg-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Technical Training",
      description: "Comprehensive training programs on test automation, quality engineering, and modern testing practices.",
      features: [
        "Test automation bootcamps",
        "API testing workshops",
        "Performance testing training",
        "Security testing fundamentals",
        "DevOps for QA professionals",
        "Custom curriculum development"
      ],
      price: "Starting from $2000/program",
      duration: "1-4 weeks",
      color: "bg-red-500"
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Comprehensive analysis and optimization of existing testing processes and quality assurance workflows.",
      features: [
        "Current process assessment",
        "Bottleneck identification",
        "Workflow optimization",
        "Tool integration",
        "Documentation improvement",
        "ROI measurement and reporting"
      ],
      price: "Starting from $5000/project",
      duration: "4-8 weeks",
      color: "bg-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Chiranjit Dutta",
      role: "Director Software Engineering - INDIA",
      company: "Newfold Digital",
      quote: "Being a marvelous SDET contributor, Siddhant diligently worked and kept on building a stronger Quality gateway across the Bluehost ecosystem. A great team player, while having increased the automation coverage to nearly 100%.",
      rating: 5
    },
    {
      name: "Lauren Richter",
      role: "Website Product Owner - USA",
      company: "Endurance International Group",
      quote: "I've had the pleasure of working with Siddhant on a front-of-site agile team at EIG. Siddhant lead QA efforts, thoroughly testing product quality, supporting our releases, continuous delivery and automation efforts, and site monitoring.",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We'll discuss your challenges, goals, and current situation in a 30-minute discovery call."
    },
    {
      step: "02",
      title: "Assessment & Planning",
      description: "I'll analyze your needs and create a customized plan with clear objectives and timelines."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We'll work together to implement solutions, with regular check-ins and progress updates."
    },
    {
      step: "04",
      title: "Results & Follow-up",
      description: "Measure success, document learnings, and provide ongoing support as needed."
    }
  ];

  // Pricing data structures
  type PricingRow = {
    region: string;
    time: string;
    mode: string; // Virtual or In-Person
    inr?: number | null; // optional / may be undefined if only USD
    usd?: number | null;
  };

  interface PricingCategory {
    title: string;
    subtitle?: string;
    rows: PricingRow[];
  }

  const pricingCategories: PricingCategory[] = [
    {
      title: "University / Educational",
      rows: [
        { region: "Within Mumbai", time: "1 hour", mode: "Virtual", inr: 5000, usd: 100 },
        { region: "Within Mumbai", time: "1 hour", mode: "In-Person", inr: 10000, usd: 150 },
        { region: "In India (outside Mumbai)", time: "1 hour", mode: "Virtual", inr: 15000, usd: 200 },
        { region: "In India (outside Mumbai)", time: "1 hour", mode: "In-Person", inr: 45000, usd: 500 },
        { region: "Outside India", time: "1 hour", mode: "Virtual", inr: null, usd: 1000 },
        { region: "Outside India", time: "1 hour", mode: "In-Person", inr: null, usd: 2500 }
      ]
    },
    {
      title: "Corporate Trainings",
      rows: [
        { region: "Within Mumbai", time: "1 hour", mode: "Virtual", inr: 15000, usd: 200 },
        { region: "Within Mumbai", time: "1 hour", mode: "In-Person", inr: 30000, usd: 350 },
        { region: "In India (outside Mumbai)", time: "1 hour", mode: "Virtual", inr: 45000, usd: 500 },
        { region: "In India (outside Mumbai)", time: "1 hour", mode: "In-Person", inr: 75000, usd: 1000 },
        { region: "Outside India", time: "1 hour", mode: "Virtual", inr: null, usd: 1500 },
        { region: "Outside India", time: "1 hour", mode: "In-Person", inr: null, usd: 3000 }
      ]
    },
    {
      title: "Engagement Types",
      subtitle: "Podcast • Mentoring • Speaking",
      rows: [
        { region: "Podcast", time: "30 mins", mode: "Virtual", inr: 10000, usd: 250 },
        { region: "Podcast", time: "30 mins", mode: "In-Person", inr: 25000, usd: 1250 },
        { region: "Mentoring", time: "1 hour", mode: "Virtual", inr: 10000, usd: 500 },
        { region: "Mentoring", time: "1 hour", mode: "In-Person", inr: 25000, usd: 2500 },
        { region: "Speaker", time: "30 mins", mode: "Virtual", inr: 10000, usd: 500 },
        { region: "Speaker", time: "30 mins", mode: "In-Person", inr: 25000, usd: 1250 },
        { region: "Speaker", time: "1 hour", mode: "Virtual", inr: 20000, usd: 1000 },
        { region: "Speaker", time: "1 hour", mode: "In-Person", inr: 50000, usd: 2500 }
      ]
    }
  ];

  const formatINR = (val?: number | null) => (val === null || val === undefined ? "—" : `₹${val.toLocaleString('en-IN')}`);
  const formatUSD = (val?: number | null) => (val === null || val === undefined ? "—" : `$${val.toLocaleString('en-US')}`);

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
              Services & Consulting
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Elevate your quality engineering practices with expert guidance, mentorship, 
              and training from a seasoned professional with 10+ years of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Packages Section */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/40 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pricing & Engagement Models
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transparent baseline pricing for popular formats. Final quotes may vary based on scope, audience size,
              preparation depth, customization, travel logistics, and intellectual property requirements.
            </p>
          </motion.div>

          <div className="space-y-20">
            {pricingCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {cat.title}
                    </h3>
                    {cat.subtitle && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide mt-1">
                        {cat.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white/70 dark:bg-gray-800/70 backdrop-blur">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100/70 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200">
                      <tr className="text-left">
                        <th className="py-3 px-4 font-medium">Region / Type</th>
                        <th className="py-3 px-4 font-medium">Time</th>
                        <th className="py-3 px-4 font-medium">Format</th>
                        <th className="py-3 px-4 font-medium">Charges (INR)</th>
                        <th className="py-3 px-4 font-medium">Charges (USD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {cat.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="group hover:bg-blue-50/60 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">
                            {row.region}
                          </td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                            {row.time}
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide">
                              {row.mode}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200 tabular-nums">
                            {formatINR(row.inr)}
                          </td>
                          <td className="py-3 px-4 text-gray-700 dark:text-gray-200 tabular-nums">
                            {formatUSD(row.usd)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <p className="flex items-start gap-2"><span className="mt-0.5 text-blue-600 dark:text-blue-400">•</span> Prices are indicative starting points; detailed proposals provided after discovery.</p>
              <p className="flex items-start gap-2"><span className="mt-0.5 text-blue-600 dark:text-blue-400">•</span> &quot;—&quot; indicates pricing primarily quoted in USD or requires a tailored INR quote.</p>
              <p className="flex items-start gap-2"><span className="mt-0.5 text-blue-600 dark:text-blue-400">•</span> Travel, accommodation, extended prep, custom curriculum & licensing are additional where applicable.</p>
              <p className="flex items-start gap-2"><span className="mt-0.5 text-blue-600 dark:text-blue-400">•</span> Discounts available for universities, nonprofits & multi-session bundles.</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-colors"
              >
                Contact for Customized Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://calendly.com/siddhantwadhwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-lg border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium transition-colors"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How We Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach to ensure we achieve your quality engineering goals effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from professionals who have benefited from my services and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonial.company}
                  </div>
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
              Ready to Transform Your Quality Engineering?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your specific needs and create a customized plan to achieve your quality engineering goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://calendly.com/siddhantwadhwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}