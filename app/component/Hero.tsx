"use client";

import { BookOpen, GraduationCap, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";
interface StatsData {
  activeStudents: number;
  onlineCourses: number;
}
export default function Hero() {
  const [stats, setStats] = useState<StatsData>({
    activeStudents: 500,
    onlineCourses: 12,
  });

  // 🔹 Fetch data from backend
  useEffect(() => {
    const fetchStats = async () => {
      /* try {
        const res = await fetch("/api/stats"); // your backend endpoint
        const data: StatsData = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } */
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Animated background elements */}
      <div className="inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">
                Transform Your Future
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Build Your{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600 inline-flex items-center gap-3">
                  Skills
                  <GraduationCap className="w-12 h-12 text-purple-600" />
                </span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                With Experts Any Time,
                <br />
                Anywhere
              </h2>
            </div>

            <p className="text-lg text-gray-600 max-w-xl">
              from the world&apos;s leading experts
              <br />
              Join{" "}
              <span className="font-bold text-purple-600">
                10+ Million
              </span>{" "}
              learners today
            </p>

            <button className="group relative px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10">Join Us Today</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {/* Active Students */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-md">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>

                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    <CountUp
                      start={0}
                      end={stats.activeStudents}
                      duration={2}
                      separator=","
                    />
                    +
                  </div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </div>
              </div>

              {/* Online Courses */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-md">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>

                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    <CountUp start={0} end={stats.onlineCourses} duration={2} />
                    +
                  </div>
                  <div className="text-sm text-gray-600">Online Courses</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center w-full max-w-xl">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br from-purple-400 to-indigo-500 rounded-3xl transform rotate-12 animate-bounce [animation-duration:5s]"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-pink-400 to-purple-500 rounded-full animate-pulse"></div>

              {/* Main image container */}
              <div className="relative rounded-3xl w-full overflow-hidden">
                {/* Next.js Image Component */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/img/edulearn-hero.png"
                    alt="Educational content or course preview"
                    width={800}
                    height={1000}
                    className="object-cover w-full h-full rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 left-2 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2 z-10 animate-bounce [animation-duration:5s]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Lifetime Access
                  </span>
                </div>

                <div className="absolute bottom-8 right-2 px-5 py-3 bg-gray-600 text-white rounded-2xl shadow-xl transform hover:scale-105 transition-transform z-10">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <div>
                      <div className="text-lg font-bold">150k</div>
                      <div className="text-xs text-gray-300">
                        Active Students
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/3 -translate-y-1/2 left-2 px-2 py-3 bg-white rounded-2xl shadow-lg flex items-center gap-2 z-10">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-indigo-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    12 Courses
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
