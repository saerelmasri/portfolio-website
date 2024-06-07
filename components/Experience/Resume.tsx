"use client";

import React, { useState } from "react";
import Experience from "./Experience";

type Company = {
  name: string;
  position: string;
  duration: string;
  responsibilities: string[];
};

const companies: Company[] = [
  {
    name: "Celitech",
    position: "Full Stack Developer",
    duration: "August 2023 - Present",
    responsibilities: [
      "Designed and implemented responsive user interfaces using React.js, enhancing user experience and accessibility across multiple devices",
      "Developed and maintained RESTful APIs with Node.js and Express, ensuring seamless data integration and real-time updates for web applications",
      "Optimized database performance and wrote complex SQL queries in PostgreSQL to handle large-scale data processing and ensure data integrity",
    ],
  },
  {
    name: "Gozilla",
    position: "Intern as Backend Developer",
    duration: "August 2022 - October 2022",
    responsibilities: [
      "Implemented RESTful APIs using Java and Spring Boot, facilitating efficient communication between front-end and back-end systems",
      "Assisted in the migration of a legacy database to a modern SQL-based system, improving data retrieval speed and reliability",
      "Collaborated with senior developers to debug and optimize server-side code, enhancing overall application performance and stability",
    ],
  },
];

function Resume() {
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[0]);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4">
        {companies.map((company) => (
          <button
            key={company.name}
            className={`text-2xl block w-full text-left p-2 ${
              selectedCompany.name === company.name
                ? "text-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setSelectedCompany(company)}
          >
            {company.name}
          </button>
        ))}
      </div>
      <div className="w-full md:w-3/4 p-4">
        <Experience
          company={selectedCompany.name}
          position={selectedCompany.position}
          duration={selectedCompany.duration}
          responsibilities={selectedCompany.responsibilities}
        />
      </div>
    </div>
  );
}

export default Resume;
