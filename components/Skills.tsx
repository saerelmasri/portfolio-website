import { title } from "process";
import React from "react";

type SkillsProp = {
  title: string;
  skillsCollection: string[];
};

function Skills({ title, skillsCollection }: SkillsProp) {
  return (
    <div className="w-full space-y-5">
      <h2 className="text-black text-2xl font-extrabold">{title}</h2>

      <ul className="text-gray-500 font-medium text-lg">
        {skillsCollection.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
