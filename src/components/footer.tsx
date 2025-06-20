import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github,
  Heart
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
  ];

  const resources = [
    { href: "/speaking", label: "Speaking" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/siddhantwadhwani",
      icon: Linkedin,
      label: "LinkedIn",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      href: "https://twitter.com/siddhantwadhwani",
      icon: Twitter,
      label: "Twitter",
      color: "text-sky-500 hover:text-sky-600"
    },
    {
      href: "https://youtube.com/@siddhantwadhwani",
      icon: Youtube,
      label: "YouTube",
      color: "text-red-600 hover:text-red-700"
    },
    {
      href: "https://github.com/siddhantwadhwani",
      icon: Github,
      label: "GitHub",
      color: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Siddhant Wadhwani
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Engineering Manager - SDET at Newfold Digital. Global tech speaker, 
              BrowserStack Champion, and LinkedIn Top Voice passionate about quality engineering.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <a 
                  href="mailto:hello@siddhantwadhwani.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  hello@siddhantwadhwani.com
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <a 
                  href="tel:+917021158300"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +91 – 7021158300
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <span>© {currentYear} Siddhant Wadhwani. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>in Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}