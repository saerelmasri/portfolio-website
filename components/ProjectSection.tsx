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
    <div className="space-y-6 mb-20">
      {/* Project Background Image */}
      <div className="border w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] rounded-3xl flex justify-center items-center mb-6 relative overflow-hidden">
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

      {/* Project Title */}
      <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold pl-4 sm:pl-6">{title}</h4>

      {/* Skills Section */}
      <div className="px-4 sm:px-6 w-full">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="h-[30px] sm:h-[35px] flex justify-center items-center rounded-xl text-center text-xs sm:text-sm hover:bg-primary"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <h4 className="text-base sm:text-lg md:text-xl font-medium text-gray-600 pl-4 sm:pl-6">{description}</h4>

      {/* Website Link */}
      {website && (
        <Link href={website}>
          <h4 className="text-base sm:text-lg font-medium text-primary hover:underline pt-4 pl-4 sm:pl-6">
            Link to the website
          </h4>
        </Link>
      )}

      {/* GitHub Repository Link */}
      {path && (
        <Link href={path}>
          <h4 className="text-base sm:text-lg font-medium text-primary hover:underline pt-4 pl-4 sm:pl-6">
            Link to the Github repository
          </h4>
        </Link>
      )}
    </div>
  );
}

export default ProjectSection;
