/* eslint-disable react/no-unescaped-entities */

import ButtonCustom from "@/components/Button";
import Resume from "@/components/Experience/Resume";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import { mySkills, projects } from "@/constants";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center justify-center px-12 sm:px-12 lg:px-20">
        <div className="w-full md:w-1/2 text-black flex flex-col justify-center space-y-3 p-4 md:p-10 2xl:p-12">
          <h5 className="text-base sm:text-base md:text-lg text-gray-500">
            Hey, I am Saer 👋
          </h5>
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold">
            <strong className="text-primary">Full Stack</strong> Developer
          </h2>
          <p className="text-base sm:text-base md:text-base text-gray-500 max-w-prose">
            I'm a full stack developer based in Lebanon, I'll help you build
            beautiful websites your users will love.
          </p>
          <div className=" sm:space-y-3 flex-row justify-center items-center">
            <ButtonCustom
              title="Get in Touch"
              path="/contact"
              variant={"default"}
              sx={"text-white text-sm font-semibold mr-2"}
            />
            <ButtonCustom
              title="Browse Projects"
              path="/projects"
              variant={"outline"}
              sx={
                "border border-black text-sm hover:bg-secondary hover:text-white hover:border-transparent"
              }
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className="bg-cover bg-center rounded-full bg-hero-section sm:max-w-[500px] md:max-w-[350px] lg:max-w-[400px]"
            style={{
              aspectRatio: "1 / 1",
              width: "100%",
              height: "auto",
            }}
          ></div>
        </div>
      </div>

      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-20 mt-10">
        <div className="w-full md:py-12">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Projects<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              backgroundProject={item.backgroundProject}
              path={item.path}
              skills={item.skills}
            />
          ))}
        </div>
      </div>

      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-20 mt-10">
        <div className="w-full md:py-12">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Experience<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full flex flex-col justify-center">
          <Resume />
        </div>
      </div>

      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-20 mt-10">
        <div className="w-full md:py-12">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Skills<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full flex justify-center">
          {mySkills.map((item, index) => (
            <Skills
              key={index}
              title={item.title}
              skillsCollection={item.skillsCollection}
            />
          ))}
        </div>
      </div>

      <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-20 mt-10">
        <div className="w-full md:py-12">
          <h3 className="text-3xl sm:text-4xl font-bold">
            My Story<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="text-sm sm:text-base lg:text-lg text-gray-600 space-y-4 sm:space-y-6">
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
