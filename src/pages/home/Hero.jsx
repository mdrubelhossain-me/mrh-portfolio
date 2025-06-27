import React from "react";
import HeroBg from "../../assets/images/hero.jpg";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="mt-0  lg:mt-4 2xl:mt-0">
          <p className=" mx-auto text-sm font-primary text-gray-100">
            Welcome To My Portfolio
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 font-primary leading-snug md:leading-tight">
            I'm Md. Rubel Hossain
          </h1>
          <p className=" max-w-[900px] text-sm md:text-lg mx-auto  mb-4 font-primary text-gray-300">
            {" "}
            an energetic, self-motivated, passionate Front-end Developer. I have
            over 2 years of experience in HTML, CSS, Bootstrap, Tailwind CSS and
            JavaScript. I have also knowledge about React.js and Next.js. I work
            efficiently and offer a hundred percent satisfaction guarantee. My
            design is very unique and very smart. I hope every client will be
            satisfied after seeing my work and appreciate it.
          </p>
          <p className="text-md mx-auto md:text-lg mb-7 font-primary text-gray-100">
            Please, don't hesitate to get in touch with me!
          </p>

          {/* Button */}
          <div>
            <button className="bg-transparent border text-white px-4 py-2 rounded-md shadow-md hover:bg-primary hover:shadow-lg transition duration-300 ease-in-out">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
