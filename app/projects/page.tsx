import ProjectCard from "@/components/ProjectCard";
import ProjectSection from "@/components/ProjectSection";
import React from "react";

function ProjectsPage() {
  return (
    <main>
      <div className="w-full pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50">
        <div className="w-full p-12">
          <h3 className="text-5xl md:text-7xl 2xl:text-8xl font-bold">
            My Projects<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full md:p-8 flex flex-col justify-center p-13">
          <ProjectSection
            title="My Landing Page"
            description="A modern, sleek portfolio crafted from scratch using Next.js and Tailwind CSS."
            backgroundProject="bg-portfolio"
          />
          <ProjectSection
            title="Vitality"
            description="A fitness app built with React Native and a Node.js/Express.js backend, designed to help users exercise and discover healthy meals."
            backgroundProject="bg-vitality"
          />
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
