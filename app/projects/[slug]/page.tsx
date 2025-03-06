/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/constants";
import { notFound } from "next/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Find the project based on the slug
  const project = projects.find((p) => {
    const path = p.path.replace(/^\/projects\//, "");
    return path === params.slug;
  });

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  return (
    <main className="pt-10 pb-20">
      {/* Header Section */}
      <div className="w-full px-6 sm:px-12 lg:px-20 mb-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project Image */}
      <div className="w-full px-6 sm:px-12 lg:px-20 mb-16">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={project.backgroundProject || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Project Details */}
      <div className="w-full px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <RevealOnScroll delay={100} className="md:col-span-2">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  This is a detailed description of the {project.title} project.
                  Here you would describe the project's purpose, the problem it
                  solves, and any interesting challenges you faced during
                  development.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  You can also discuss the technologies used, your role in the
                  project, and the outcome or results achieved.
                </p>

                <h2 className="text-2xl font-bold pt-4">Key Features</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Feature one description</li>
                  <li>Feature two description</li>
                  <li>Feature three description</li>
                  <li>Feature four description</li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-md backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      CLIENT
                    </h4>
                    <p>Client Name</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      TIMELINE
                    </h4>
                    <p>3 months</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      ROLE
                    </h4>
                    <p>Full Stack Developer</p>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      LINKS
                    </h4>
                    <div className="flex flex-col space-y-2">
                      <a
                        href="#"
                        className="inline-flex items-center text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="w-full px-6 sm:px-12 lg:px-20 mt-20">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="bg-gradient-to-r from-primary/90 to-primary text-white rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Next Project</h3>
                  <p className="text-white/80">Continue exploring my work</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 md:mt-0"
                >
                  <Link
                    href="/projects"
                    className="inline-flex items-center font-bold"
                  >
                    View All Projects
                    <ArrowLeft size={16} className="ml-2 rotate-180" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}
