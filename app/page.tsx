/* eslint-disable react/no-unescaped-entities */

import ButtonCustom from "@/components/Button";
import Resume from "@/components/Experience/Resume";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import { mySkills } from "@/constants";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center justify-center  sm:pl-5 sm:pr-5 md:pl-30 md:pr-30 2xl:pl-60 2xl:pr-60">
        <div className=" w-full md:w-1/2 text-black flex flex-col justify-center space-y-3 p-4 md:p-10 2xl:p-12">
          <h5 className="text-2xl md:text-xl text-gray-500">
            Hey, I am Saer 👋
          </h5>
          <h2 className="text-black text-6xl md:text-5xl lg:text-8xl font-extrabold">
            <strong className="text-primary">Full Stack</strong> Developer
          </h2>
          <p className="text-lg md:text-2xl text-gray-500 max-w-prose">
            I'm a full stack developer based in Lebanon, I'll help you build
            beautiful websites your users will love.
          </p>
          <div className="w-full h-16 flex justify-start items-center">
            <ButtonCustom
              title="Get in Touch"
              path="/dd"
              variant={"default"}
              sx={"text-sm w-1/3 mr-5 text-white text-based pl-20 pr-20"}
            />
            <ButtonCustom
              title="Browse Projects"
              path="/projects"
              variant={"outline"}
              sx={
                "border border-black border-solid w-1/3 text-sm mr-5 pl-20 pr-20 hover:bg-secondary hover:text-white hover:border-transparent"
              }
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:h-screen flex justify-center items-center p-10">
          <div
            className="bg-cover bg-center rounded-full bg-hero-section"
            style={{
              aspectRatio: "1 / 1",
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              maxHeight: "500px",
            }}
          ></div>
        </div>
      </div>

      <div className="w-full mt-36 pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50">
        <div className="w-full p-12">
          <h3 className="text-6xl font-bold">
            Projects<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full md:grid md:grid-cols-3 gap-10 md:p-8 flex flex-col justify-center p-13">
          <ProjectCard
            title="TaskFlow"
            description="Task management system with drag-and-drop, real-time collaboration, and responsive layout."
            backgroundProject="bg-vitality"
          />
          <ProjectCard
            title="TaskFlow"
            description="Task management system with drag-and-drop, real-time collaboration, and responsive layout."
            backgroundProject="bg-vitality"
            sxCard="col-span-2"
          />
          <ProjectCard
            title="TaskFlow"
            description="Task management system with drag-and-drop, real-time collaboration, and responsive layout."
            backgroundProject="bg-vitality"
          />
        </div>
      </div>

      <div className="w-full mt-36 pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50">
        <div className="w-full p-12">
          <h3 className="text-6xl font-bold">
            Experience<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full p-12">
          <Resume />
        </div>
      </div>

      <div className="w-full mt-36 pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50">
        <div className="w-full p-12">
          <h3 className="text-6xl font-bold">
            Skills<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="w-full p-12 md:flex md:space-y-0 space-y-5">
          {mySkills.map((item, index) => (
            <Skills
              key={index}
              title={item.title}
              skillsCollection={item.skillsCollection}
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-36 pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50">
        <div className="w-full p-12">
          <h3 className="text-6xl font-bold">
            My Story<strong className="text-primary">.</strong>
          </h3>
        </div>
        <div className="text-xl text-gray-600 space-y-3 p-12">
          <p>
            My journey as a{" "}
            <strong className="text-primary">full stack developer</strong> began
            in 2023 upon graduating with a Bachelor's degree in Computer
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
