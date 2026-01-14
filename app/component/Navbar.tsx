"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  User,
  Menu,
  X,
  Home,
  Video,
  Trophy,
  Bell,
  ChevronDown,
  LogOut,
} from "lucide-react";
import EdulearnLogo from "./Illustrations/EdulearnLogo";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  submenu?: {
    name: string;
    href: string;
    description: string;
  }[];
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      name: "Courses",
      href: "/courses",
      icon: <BookOpen className="w-4 h-4" />,
      submenu: [
        {
          name: "Web Development",
          href: "/courses/web-dev",
          description: "Learn modern web technologies",
        },
        {
          name: "Data Science",
          href: "/courses/data-science",
          description: "Master data analysis & ML",
        },
        {
          name: "UI/UX Design",
          href: "/courses/design",
          description: "Create beautiful interfaces",
        },
        {
          name: "Business",
          href: "/courses/business",
          description: "Grow your business skills",
        },
      ],
    },
    {
      name: "Live Classes",
      href: "/live-classes",
      icon: <Video className="w-4 h-4" />,
    },
    {
      name: "Achievements",
      href: "/achievements",
      icon: <Trophy className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <EdulearnLogo className="w-14 h-14" />
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduLearn
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-300 group"
                >
                  <span className="mr-2 opacity-75 group-hover:opacity-100 transition-opacity">
                    {link.icon}
                  </span>
                  <span className="font-medium group-hover:translate-x-0.5 transition-transform">
                    {link.name}
                  </span>
                  {link.submenu && (
                    <ChevronDown className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* Dropdown for Courses */}
                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in slide-in-from-top-5 duration-300">
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group/item"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                            {subitem.name}
                          </span>
                          <span className="text-sm text-gray-500 group-hover/item:text-gray-700">
                            {subitem.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 w-48 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white hover:border-blue-300"
              />
            </div>

            {/* Notifications */}
            <button className="p-2 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform">
                3
              </span>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>

              {/* Profile Dropdown */}
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">student@edulearn.com</p>
                </div>
                <Link
                  href="/profile"
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <User className="w-4 h-4 mr-3" />
                  My Profile
                </Link>
                <Link
                  href="/my-courses"
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <BookOpen className="w-4 h-4 mr-3" />
                  My Courses
                </Link>
                <button className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3 opacity-75 group-hover:opacity-100">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                </Link>

                {/* Mobile Submenu */}
                {link.submenu && (
                  <div className="ml-8 mt-1 space-y-1">
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-2">
                <Link
                  href="/notifications"
                  className="flex-1 flex items-center justify-center p-2 bg-gray-50 rounded-xl hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </Link>
                <Link
                  href="/profile"
                  className="flex-1 flex items-center justify-center p-2 bg-gray-50 rounded-xl hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
