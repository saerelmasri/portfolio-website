import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

type ProjectCardProp = {
  title: string;
  description: string;
  skills: string[];
  sxCard?: string;
  path?: string;
  backgroundProject: string;
};

function ProjectCard({
  title,
  description,
  skills,
  sxCard,
  path,
  backgroundProject,
}: ProjectCardProp) {
  const isInternalLink = path && (path.startsWith("/") || path.startsWith("#"));

  return (
    <div className={`space-y-3 ${sxCard}`}>
      <div
        className={`w-full h-[300px] mb-10 rounded-3xl bg-cover bg-center bg-projects flex justify-center items-center`}
      >
        <div
          className="w-[90%] h-[250px] rounded bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundProject})` }}
        />
      </div>
      {path ? (
        isInternalLink ? (
          <Link href={path} passHref>
            <h4 className="text-lg font-bold hover:underline hover:cursor-pointer">
              {title}
            </h4>
          </Link>
        ) : (
          <a
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold hover:underline hover:cursor-pointer"
          >
            {title}
          </a>
        )
      ) : (
        <h4 className="text-lg font-bold">{title}</h4>
      )}
      <div className=" w-full">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="p-1.5 flex justify-center items-center rounded-lg text-center text-xs hover:bg-primary"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      <h4 className="text-base font-semibold text-gray-500">{description}</h4>
    </div>
  );
}

export default ProjectCard;
