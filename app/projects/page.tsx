/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { projects } from "@/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ButtonCustom from "@/components/Button";

export default function ProjectsPage() {
  return (
    <main className="pt-10 pb-20">
      {/* Header Section */}
      <div className="w-full px-6 sm:px-12 lg:px-20 mb-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Projects<span className="text-primary">.</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my work that showcases my skills and experience in
              building digital products.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} delay={(index % 3) * 100}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  backgroundProject={project.backgroundProject}
                  path={project.path}
                  skills={project.skills}
                  websiteURL={project.websiteURL}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full px-6 sm:px-12 lg:px-20 mt-20">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 text-center shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                Interested in working together?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects and opportunities.
                Let's create something amazing together.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <ButtonCustom
                  path="/contact"
                  title="Get in Touch"
                  variant="outline"
                />
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}
