import React from "react";

type ProjectCardProp = {
  title: string;
  description: string;
  sxCard?: string;
  path?: string;
  backgroundProject?: string;
};

function ProjectCard({
  title,
  description,
  sxCard,
  path,
  backgroundProject,
}: ProjectCardProp) {
  return (
    <div className={`space-y-3  ${sxCard}`}>
      <div
        className={`w-full h-[350px] rounded-3xl bg-cover bg-center bg-project flex justify-center items-center`}
      >
        <div
          className={`w-[90%] h-[300px] rounded bg-cover bg-center ${backgroundProject} flex justify-center items-center`}
        />
      </div>
      <h4 className="text-2xl font-bold hover:underline hover:cursor-pointer">
        {title}
      </h4>
      <h4 className="text-lg font-semibold text-gray-500">{description}</h4>
    </div>
  );
}

export default ProjectCard;
