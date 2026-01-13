// components/Footer.tsx
import Link from "next/link";
import {
  BookOpen,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-gray-900 via-indigo-950 to-purple-950 text-gray-300">
      <div className="relative container max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand & About */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="p-2.5 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-105 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EduLearn
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Unlock your potential with high-quality courses, live classes, and
              a supportive learning community.
            </p>

            <div className="flex gap-5">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Platform
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition-colors"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/live-classes"
                  className="hover:text-blue-300 transition-colors"
                >
                  Live Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:text-blue-300 transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-blue-300 transition-colors"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Categories
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/courses/web-dev"
                  className="hover:text-blue-300 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-science"
                  className="hover:text-blue-300 transition-colors"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/design"
                  className="hover:text-blue-300 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/business"
                  className="hover:text-blue-300 transition-colors"
                >
                  Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Support
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/help"
                  className="hover:text-blue-300 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-blue-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-blue-300 transition-colors"
                >
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                <span>support@edulearn.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-indigo-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <div>
              © {currentYear} EduLearn. Made with
              <Heart className="inline-block h-4 w-4 mx-1.5 text-red-500 fill-current animate-pulse" />
              for lifelong learners
            </div>

            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="hover:text-blue-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-blue-300 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
