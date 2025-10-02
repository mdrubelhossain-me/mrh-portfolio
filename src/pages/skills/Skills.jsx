import React from "react";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  // { name: "Redux Toolkit", icon: "https://redux-toolkit.js.org/img/redux.svg" },
  {
    name: "Context API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
];

const Skills = () => (
  <div>
    <h2 className="text-3xl font-bold mb-2 font-primary text-center">Skills</h2>
    <h3 className="text-lg font-semibold mb-1 font-primary text-center text-gray-600">My Technical Proficiencies</h3>
    <p className="text-gray-500 mb-8 font-primary text-center">
      Technologies I use to build modern web applications
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow duration-200 font-primary"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-12 h-12 mb-2 object-contain"
          />
          <span className="text-base font-medium text-gray-700 mt-1">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
