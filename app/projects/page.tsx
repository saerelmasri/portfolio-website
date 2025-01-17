import ProjectCard from "@/components/ProjectCard";
import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/constants";
import React from "react";

function ProjectsPage() {
  return (
    <main>
      <div className="w-full px-5 mt-10">
        {/* Projects List Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              backgroundProject={item.backgroundProject}
              sxCard={item.sxCard}
              path={item.path}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
