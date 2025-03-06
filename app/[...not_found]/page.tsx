/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Home
      </Link>
    </div>
  )
}

