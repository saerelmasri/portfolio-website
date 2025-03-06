/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  backgroundProject: string
  path: string
  skills: { name: string; logo: string }[]  // Updated skills type to include logo
  sxCard?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, backgroundProject, path, skills, sxCard }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`relative overflow-hidden rounded-xl shadow-lg ${sxCard}`}
    >
      <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundProject})` }} />

      <div className="p-6 bg-white dark:bg-gray-800 relative z-10">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
              <img src={skill.logo} alt={skill.name} className="h-4 w-4" />
              {skill.name}
            </span>
          ))}
        </div>

        <Link href={path} className="group inline-flex items-center text-primary font-medium">
          View Project
          <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} className="ml-1">
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

export default ProjectCard
