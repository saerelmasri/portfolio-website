import React from "react";

type ProjectProp = {
  title: string;
  description: string;
  backgroundProject?: string;
};

function ProjectSection({
  title,
  description,
  backgroundProject,
}: ProjectProp) {
  return (
    <div className={`space-y-7 mb-40 `}>
      <div
        className={`w-full h-[300px] md:h-[500px] 2xl:h-[600px] rounded-3xl bg-cover bg-center bg-project flex justify-center items-center`}
      >
        <div
          className={`w-[90%] h-[90%] rounded bg-cover bg-center ${backgroundProject} flex justify-center items-center`}
        />
      </div>
      <h4 className="text-3xl md:text-5xl 2xl:text-5xl font-extrabold hover:underline hover:cursor-pointer pl-5">
        {title}
      </h4>
      <h4 className="text-xl md:text-2xl 2xl:text-xl font-semibold text-gray-500 pl-5">
        {description}
      </h4>
    </div>
  );
}

export default ProjectSection;
