/* eslint-disable react/no-unescaped-entities */
import Skills from "@/components/Skills";
import { mySkills } from "@/constants";
import React from "react";

function AboutPage() {
  return (
    <main className="px-5 md:px-12 2xl:px-60">
      {/* Header Section */}
      <div className="w-full text-center py-12">
        <h3 className="text-2xl md:text-4xl font-bold">
          Hi! I'm Saer<strong className="text-primary">.</strong>
        </h3>
      </div>

      {/* About Section */}
      <div className="w-full flex flex-col lg:flex-row items-center py-10 lg:py-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div
              className="relative bg-cover bg-center bg-hero-section"
              style={{
                aspectRatio: "1 / 1",
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                maxHeight: "400px",
                borderRadius: "50% 50% 0 0", // Top rounded, bottom straight
                overflow: "hidden",
              }}
            />
          </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 px-2 md:px-10">
          <h4 className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
            I'm a Full Stack Developer working remotely from Beirut, Lebanon.
          </h4>
          <p className="text-base md:text-lg text-gray-700">
            Since 2022, I've been dedicated to building robust and scalable web
            applications. My journey began with a degree in Computer Science,
            followed by intensive training at Lebanon's premier coding bootcamp.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Today, I continuously enhance my skills through personal projects,
            freelance work, and staying updated with the latest technologies. I
            thrive on solving complex problems and am passionate about
            delivering high-quality code.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full py-10 lg:py-20">
        <h3 className="text-3xl md:text-5xl font-bold mb-8">
          Skills<strong className="text-primary">.</strong>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mySkills.map((item, index) => (
            <Skills
              key={index}
              title={item.title}
              skillsCollection={item.skillsCollection}
            />
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="w-full text-gray-700 space-y-6 py-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          My Story<strong className="text-primary">.</strong>
        </h3>
        <p>
          My journey as a{" "}
          <strong className="text-primary">full stack developer</strong> began
          in 2022 upon graduating with a Bachelor's degree in Computer Science.
          While my university education provided me with a solid foundation in
          programming, I knew there was much more to learn and explore.
        </p>
        <p>
          Eager to enhance my skills, I seized the opportunity to enroll in one
          of Lebanon's most prestigious coding bootcamps, SE Factory. The
          selection process was rigorous, reflecting the program's high
          standards, and the intensity of the three-month curriculum pushed me
          to my limits. However, I emerged from the experience armed with{" "}
          <strong className="text-primary">cutting-edge knowledge</strong> and a
          portfolio of projects that showcased my abilities as a full-stack
          developer.
        </p>
        <p>
          Since graduating from SE Factory, my journey has been one of
          continuous growth and learning. I am committed to staying abreast of
          the latest <strong className="text-primary">technologies</strong> and
          methodologies, whether through personal projects, freelance work, or
          ongoing education. <strong className="text-primary">Coding</strong>{" "}
          has evolved from a skillset into a passion, and I find fulfillment in
          honing my craft and tackling new challenges.
        </p>
        <p>
          Choosing this path has not only enriched my professional life but has
          also had a profound impact on my personal satisfaction. The
          flexibility afforded by my career allows me to work from anywhere,
          granting me the freedom to pursue my interests and spend time with
          loved ones without sacrificing my professional goals.
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
