"use client";

/* eslint-disable react/no-unescaped-entities */

import ButtonCustom from "@/components/Button";
import Resume from "@/components/Experience/Resume";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import { mySkills, projects } from "@/constants";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Code, Cpu, Globe } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <div
        ref={targetRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        <div className="animated-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <motion.div
          style={{ opacity, scale, y }}
          className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 lg:px-20 w-full"
        >
          <div className="w-full md:w-1/2 text-black flex flex-col justify-center space-y-6 p-4 md:p-10 2xl:p-12">
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-500"
            >
              Hey, I am Saer 👋
            </motion.h5>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
            >
              <span className="text-primary">Full Stack</span> Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-500 max-w-prose"
            >
              I'm a full stack developer based in Lebanon, I'll help you build
              beautiful websites your users will love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              <ButtonCustom
                title="Get in Touch"
                path="/contact"
                variant="default"
                sx="text-white text-sm font-semibold"
              />
              <ButtonCustom
                title="Browse Projects"
                path="/projects"
                variant="outline"
                sx="text-sm"
                icon={<ArrowRight size={16} />}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
          >
            <div
              className="bg-cover bg-center rounded-full bg-hero-section sm:max-w-[500px] md:max-w-[350px] lg:max-w-[400px] shadow-2xl border-4 border-white dark:border-gray-800"
              style={{
                aspectRatio: "1 / 1",
                width: "100%",
                height: "auto",
              }}
            ></div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <RevealOnScroll>
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What I <span className="text-primary">Do</span>
          </h3>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealOnScroll delay={100} className="reveal-delay-1">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={28} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">
                Web Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Creating responsive, modern websites that provide exceptional
                user experiences across all devices.
              </p>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="reveal-delay-2">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={28} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">
                Full Stack Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Building complete web applications with robust backends,
                efficient APIs, and dynamic frontends.
              </p>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll delay={300} className="reveal-delay-3">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu size={28} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">
                Technical Consulting
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Providing expert advice on technology choices, architecture, and
                implementation strategies.
              </p>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Projects Section */}
      <div className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-gray-50 dark:bg-gray-900/30">
        <RevealOnScroll>
          <div className="w-full mb-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-black">
              Projects<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              A selection of my recent work. Each project represents a unique
              challenge and solution.
            </p>
          </div>
        </RevealOnScroll>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <ProjectCard
                title={item.title}
                description={item.description}
                backgroundProject={item.backgroundProject}
                path={item.path}
                skills={item.skills}
                websiteURL={item.websiteURL}
              />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="flex justify-center mt-12">
            <ButtonCustom
              title="View All Projects"
              path="/projects"
              variant="default"
              sx="text-white"
              icon={<ArrowRight size={16} />}
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* Experience Section */}
      <div className="w-full px-6 sm:px-12 lg:px-20 py-20">
        <RevealOnScroll>
          <div className="w-full mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-center">
              Experience<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-center">
              My professional journey and the skills I've developed along the
              way.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="w-full flex flex-col justify-center max-w-4xl mx-auto">
            <Resume />
          </div>
        </RevealOnScroll>
      </div>

      {/* Skills Section */}
      <div className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-gray-50 dark:bg-gray-900/30">
        <RevealOnScroll>
          <div className="w-full mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-black">
              Skills<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-center">
              The technologies and tools I work with to bring ideas to life.
            </p>
          </div>
        </RevealOnScroll>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mySkills.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <Skills
                title={item.title}
                skillsCollection={item.skillsCollection}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* My Story Section - Redesigned */}
      <div className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white dark:bg-gray-900/30">
        <RevealOnScroll>
          <div className="w-full mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-black">
              My Story<span className="text-primary">.</span>
            </h3>
          </div>
        </RevealOnScroll>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <RevealOnScroll delay={100}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] w-full bg-cover bg-center aesthetic-section"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-primary">
                  From Computer Science to Full Stack Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  My journey began with a Computer Science degree in 2022, but I
                  quickly realized that theoretical knowledge wasn't enough. I
                  joined SE Factory, Lebanon's premier coding bootcamp, where I
                  transformed into a full-stack developer through intensive,
                  hands-on training.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Today, I blend technical expertise with creative
                  problem-solving to build beautiful, functional websites. My
                  passion for coding drives me to continuously learn and
                  improve, ensuring I deliver exceptional results for every
                  project.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* CTA Section - Redesigned */}
      <div className="w-full px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/90 to-primary p-8 md:p-12 shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-16 -mb-16"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white space-y-4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Let's Create Something Amazing
                  </h3>
                  <p className="text-white/80 max-w-md">
                    Have a project in mind? I'd love to hear about it. Let's
                    discuss how we can work together to bring your vision to
                    life.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    Start a Project
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
