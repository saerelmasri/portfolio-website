/* eslint-disable react/no-unescaped-entities */

import ButtonCustom from "@/components/Button";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center">
      <div className=" w-full md:w-1/2 text-black flex flex-col justify-center space-y-3 p-4  md:p-8">
        <h5 className="text-2xl md:text-xl text-gray-500">Hey, I am Saer 👋</h5>
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
            sx={"w-1/3 text-sm md:w-1/5 md:text-lg mr-5 text-white "}
          />
          <ButtonCustom
            title="Browse Projects"
            path="/projects"
            variant={"outline"}
            sx={
              "border border-black border-solid w-1/2 md:w-1/4 text-sm md:text-lg mr-5 hover:bg-secondary hover:text-white hover:border-transparent"
            }
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:h-screen flex justify-center items-center p-10">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cover bg-center rounded-full border border-solid border-gray-300 flex justify-center items-center">
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cover bg-center rounded-full bg-hero-section"></div>

        </div>
      </div>
    </main>
  );
}
