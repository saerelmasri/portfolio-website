"use client"

import Link from "next/link"
import type React from "react"
import { motion } from "framer-motion"

interface ButtonProps {
  title: string
  path: string
  variant: "default" | "outline" | "ghost"
  sx?: string
  icon?: React.ReactNode
}

const ButtonCustom: React.FC<ButtonProps> = ({ title, path, variant, sx, icon }) => {
  const baseClasses =
    "py-3 px-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"

  let variantClasses = ""

  switch (variant) {
    case "default":
      variantClasses = "bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/20"
      break
    case "outline":
      variantClasses = "border-2 border-primary text-primary hover:bg-primary/10"
      break
    case "ghost":
      variantClasses = "text-primary hover:bg-primary/10"
      break
    default:
      variantClasses = "bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/20"
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link href={path} className={`${baseClasses} ${variantClasses} ${sx}`}>
        {icon && <span>{icon}</span>}
        {title}
      </Link>
    </motion.div>
  )
}

export default ButtonCustom

