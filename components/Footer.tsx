"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 bg-white border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-black">
                Saer<span className="text-primary">.</span>
              </h3>
            </Link>
            <p className="text-gray-600  max-w-xs">
              Full stack developer crafting beautiful, functional websites and applications.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/saerelmasri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600  hover:text-[#6f4cff] dark:hover:text-[#6f4cff]"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saer-el-masri/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600  hover:text-[#6f4cff] dark:hover:text-[#6f4cff]"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600  hover:text-[#6f4cff] dark:hover:text-[#6f4cff] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-600  hover:text-[#6f4cff] dark:hover:text-[#6f4cff] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-600  hover:text-[#6f4cff] dark:hover:text-[#6f4cff] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600 ">
              <p>Beirut, Lebanon</p>
              <p>saer1890@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 ">
            © {currentYear} Saer El Masri. All rights reserved.
          </p>
          <p className="text-sm text-gray-600  mt-2 md:mt-0">Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

