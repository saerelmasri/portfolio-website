"use client";

import type React from "react";
import { motion } from "framer-motion";

interface SkillsProps {
  title: string;
  skillsCollection: string[];
}

const Skills: React.FC<SkillsProps> = ({ title, skillsCollection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 rounded-xl bg-white shadow-md backdrop-blur-sm"
    >
      <h4 className="text-xl font-bold mb-6 text-primary">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {skillsCollection.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, borderRadius: "999px" }} // Start as fully rounded
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(111, 76, 255, 0.2)",
            }}
            className="px-4 py-2  bg-primary/10 text-black font-medium text-sm transition-all duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
