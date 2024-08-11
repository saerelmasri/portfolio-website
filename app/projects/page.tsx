import ProjectCard from "@/components/ProjectCard";
import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/constants";
import React from "react";

function ProjectsPage() {
  return (
    <main>
      <div className="w-full pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50">
        <div className="w-full p-12">
          <h3 className="text-5xl md:text-7xl 2xl:text-7xl font-bold">
            My Projects<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full md:p-8 flex flex-col justify-center p-13">
          {projects.map((item, index) => (
            <ProjectSection
              key={index}
              title={item.title}
              description={item.description}
              backgroundProject={item.backgroundProject}
              path={item.path}
              skills={item.skills}
              website={item.website}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
