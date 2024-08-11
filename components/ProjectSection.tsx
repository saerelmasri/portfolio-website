import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type ProjectProp = {
  title: string;
  description: string;
  backgroundProject: string;
  skills: string[];
  path?: string;
  website?: string;
};

function ProjectSection({
  title,
  description,
  backgroundProject,
  skills,
  path,
  website,
}: ProjectProp) {
  return (
    <div className="space-y-7 mb-40">
      <div className="w-full h-[300px] md:h-[500px] 2xl:h-[600px] rounded-3xl flex justify-center items-center mb-10 relative overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={backgroundProject}
            alt="Project Background"
            layout="responsive"
            width={1600} // original width of the image
            height={900} // original height of the image
            objectFit="cover"
            objectPosition="center"
            className="rounded-3xl"
            priority
          />
        </div>
      </div>
      <h4 className="text-3xl md:text-5xl 2xl:text-5xl font-extrabold pl-5">
        {title}
      </h4>
      <div className="px-5 w-full">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="h-[40px] flex justify-center items-center rounded-xl text-center text-sm hover:bg-primary"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      <h4 className="text-xl md:text-2xl 2xl:text-xl font-semibold text-gray-500 pl-5">
        {description}
      </h4>
      {website ? (
        <Link href={website}>
          <h4 className="text-lg md:text-lg 2xl:text-lg font-medium hover:underline hover:cursor-pointer  pt-5 pl-5">
            Link to the website
          </h4>
        </Link>
      ) : (
        <></>
      )}
      {path ? (
        <Link href={path}>
          <h4 className="text-lg md:text-lg 2xl:text-lg font-medium hover:underline hover:cursor-pointer pt-5 pl-5">
            Link to the Github repository
          </h4>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProjectSection;
