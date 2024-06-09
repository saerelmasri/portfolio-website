/* eslint-disable react/no-unescaped-entities */
import Skills from "@/components/Skills";
import { mySkills } from "@/constants";
import React from "react";

function AboutPage() {
  return (
    <main>
      <div className="w-full pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50 ">
        <div className="w-full p-12 flex justify-center items-center ">
          <h3 className="text-5xl md:text-8xl 2xl:text-8xl font-bold">
            I'm Saer<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full flex md:pl-50 md:pr-50 flex-col lg:flex-row items-center mb-5">
          <div className="w-1/2 flex justify-center items-center">
            <div
              className="relative bg-cover bg-center bg-hero-section"
              style={{
                aspectRatio: "1 / 1",
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                maxHeight: "500px",
                borderRadius: "50% 50% 0 0", // This makes the top rounded and the bottom straight
                overflow: "hidden",
              }}
            />
          </div>
          <div className="w-full flex items-center flex-col space-y-7 p-2 md:p-10 justify-center">
            <h4 className="text-3xl md:text-5xl font-semibold lg:text-6xl lg:leading-tight">
              I'm a Full Stack Developer working remotely from Beirut, Lebanon.
            </h4>
            <p className="sm:text-base md:text-lg lg:text-xl ">
              Since 2022, I've been dedicated to building robust and scalable
              web applications. My journey began with a degree in Computer
              Science, followed by intensive training Lebanon's premier coding
              bootcamp.
            </p>
            <p className="sm:text-base md:text-lg lg:text-xl">
              Today, I continuously enhance my skills through personal projects,
              freelance work, and staying updated with the latest technologies.
              I thrive on solving complex problems and am passionate about
              delivering high-quality code.
            </p>
          </div>
        </div>

        <div className="w-full p-2 md:p-12">
          <h3 className="text-6xl font-bold">
            Skills<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full p-2 md:p-12 md:flex md:space-y-0 space-y-5">
          {mySkills.map((item, index) => (
            <Skills
              key={index}
              title={item.title}
              skillsCollection={item.skillsCollection}
            />
          ))}
        </div>

        <div className="text-xl text-gray-600 space-y-3 p-2 md:p-12  mt-5">
          <p>
            My journey as a{" "}
            <strong className="text-primary">full stack developer</strong> began
            in 2022 upon graduating with a Bachelor's degree in Computer
            Science. While my university education provided me with a solid
            foundation in programming, I knew there was much more to learn and
            explore.
          </p>
          <p>
            Eager to enhance my skills, I seized the opportunity to enroll in
            one of Lebanon's most prestigious coding bootcamps, SE Factory. The
            selection process was rigorous, reflecting the program's high
            standards, and the intensity of the three-month curriculum pushed me
            to my limits. However, I emerged from the experience armed with
            <strong className="text-primary">
              {" "}
              cutting-edge knowledge
            </strong>{" "}
            and a portfolio of projects that showcased my abilities as a
            full-stack developer.
          </p>
          <p>
            Since graduating from SE Factory, my journey has been one of
            continuous growth and learning. I am committed to staying abreast of
            the latest <strong className="text-primary">technologies</strong>{" "}
            and methodologies, whether through personal projects, freelance
            work, or ongoing education.{" "}
            <strong className="text-primary">Coding</strong> has evolved from a
            skillset into a passion, and I find fulfillment in honing my craft
            and tackling new challenges.
          </p>
          <p>
            Choosing this path has not only enriched my professional life but
            has also had a profound impact on my personal satisfaction. The
            flexibility afforded by my career allows me to work from anywhere,
            granting me the freedom to pursue my interests and spend time with
            loved ones without sacrificing my professional goals.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
