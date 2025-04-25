"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, TrendingUp } from "lucide-react";

function StatsSection() {
  const stats = [
    { icon: Users, title: "Total Matches", value: "74" },
    { icon: Trophy, title: "Teams", value: "10" },
    { icon: Calendar, title: "Tournament Duration", value: "51 days" },
    { icon: TrendingUp, title: "Highest Score", value: "246/7" },
  ];

  return (
    <div className="py-16 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          IPL 2025 Stats and Highlights
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white/10 rounded-xl backdrop-blur-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-lg">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
