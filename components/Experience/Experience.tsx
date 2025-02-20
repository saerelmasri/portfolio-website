import React from "react";

type ExperienceProps = {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
};

function Experience({
  company,
  position,
  duration,
  responsibilities,
}: ExperienceProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 p-4">
        <h4 className="text-xl font-bold text-black">{position} <strong className="text-primary">@{company}</strong></h4>
        <p className="text-sm text-gray-600">{duration}</p>
        <ul className="list-disc list-outside mt-3 space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-gray-800 text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
