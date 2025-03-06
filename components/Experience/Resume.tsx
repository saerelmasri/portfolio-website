"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  type: "education" | "work";
}

const experienceData: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Celitech",
    date: "August 2023 - Present",
    description:
      "Improved the customer dashboard, optimized APIs and databases, developed SDKs for seamless integration, integrated services into third-party platforms, and collaborated on troubleshooting and system architecture.",
    type: "work",
  },
  {
    title: "Full Stack Development Bootcamp",
    company: "SE Factory",
    date: "February 2023 - May 2023",
    description:
      "Completed an intensive three-month bootcamp focused on full stack web development. Learned modern technologies and best practices while building real-world projects.",
    type: "education",
  },
  {
    title: "Software Engineer Intern",
    company: "Gozilla",
    date: "August 2022 - November 2022",
    description:
      "Optimized customer engagement by improving response times and interactions. Developed an AI-powered chatbot using Google’s Dialogflow for enhanced user experience through natural language processing and machine learning.",
    type: "work",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    company: "American University of Science and Technology",
    date: "October 2018 - July 2022",
    description:
      "Studied computer science fundamentals, algorithms, data structures, and software engineering principles. Graduated with honors.",
    type: "education",
  },
];

const Resume: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-12">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                {item.type === "education" ? (
                  <GraduationCap className="text-primary" size={24} />
                ) : (
                  <Briefcase className="text-primary" size={24} />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <div className="flex items-center text-sm text-gray-500 mt-1 md:mt-0">
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </div>
              </div>
              <h5 className="text-lg font-medium text-primary mb-2">
                {item.company}
              </h5>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
