import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Lume",
    description:
      "An online learning platform where users can contribute their knowledge and get rewarded with website currency. It creates a self-sustaining economy where learning and teaching are highly rewarded.",
    imageUrl: "/assets/LumeSS.png",
    logoUrl: "/assets/LumeLogo.png",
    tools: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Figma",
      "UI/UX Design",
      "REST APIs",
    ],
    status: "In Progress",
    link: "https://github.com/Saminraiyan12/Lume",
  },
  {
    title: "NestFrames",
    description:
      "A social media web app for collaborative group albums, allowing users to create, share, and manage albums with friends. Real-time messaging and notifications keep users connected.",
    imageUrl: "/assets/NestFramesSS.png",
    logoUrl: "/assets/NestFramesLogo.png",
    tools: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Websockets",
      "UI/UX Design",
      "REST APIs",
      "AWS",
    ],
    status: "In Progress",
  },
  {
    title: "InterModal",
    description:
      "An iOS application that revolutionizes trip planning by calculating routes with unlimited stops and different modes of transportation. It seamlessly combines transit options for a flexible travel plan.",
    imageUrl: "/assets/InterModalSS.png",
    logoUrl: "",
    tools: ["Swift", "SwiftUI", "Firebase", "XCode"],
    status: "Submitted to HackRU Fall 2024",
  },
];

function Projects() {
  const navigate = useNavigate();
  const navToProject = (route) => {
    navigate(`${route}`);
  };

  return (
    <section
      id="projects"
      className="min-h-[calc(100dvh-var(--spacing-header))] sidePadding py-10 flex flex-col gap-y-10"
    >
      <div className="flex md:justify-start justify-center">
        <div className="w-max relative text-5xl font-bold">
          <span className=" w-[67%] h-[65%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#F2D4D4] from-[#F5B9B9] z-10 opacity-70"></span>
          <h1 className="z-20 relative text-[clamp(2.5rem,5vw,3.75rem)]">
            Projects.
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial={{ opacity: 0, transform: "translateY(50%)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="cursor-pointer flex flex-col md:flex-row bg-white w-full h-50 flex gap-x-5 md:p-5 rounded-3xl relative hover:shadow-md hover:bg-[rgba(255,255,255,0.5)] transition-all"
            >
              <img
                className="w-[clamp(15rem,20vw,19.375rem)] object-cover rounded-3xl md:rounded-sm border border-[rgba(0,0,0,0.10)]"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="flex gap-x-2 font-bold text-2xl items-center pb-1">
                    {project.title}
                    {project.logoUrl && (
                      <img
                        className="h-7 w-auto"
                        src={project.logoUrl}
                        alt={`${project.title} Logo`}
                      />
                    )}
                  </h2>
                  <p className="text-m text-[#6F6F6F]">{project.description}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <i className="fa-solid fa-screwdriver-wrench text-[#FF6868]"></i>
                  {project.tools.map((tool, i) => (
                    <button
                      key={i}
                      className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-full"
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
              <span className="absolute right-0 top-0 transform -translate-y-[100%] font-bold">
                {project.status}
              </span>
            </motion.div>
          </a>
        ))}
        <div className="flex justify-center text-xl font-bold items-center pb-5">
          <div className="relative pr-2">
            Stay tuned for more!
            <span className="w-[30%] absolute h-[3px] bg-[#FF6868] rounded-md bottom-[-2px] left-0"></span>
          </div>
          <i className="fa-solid fa-folder-open text-[#FF6868]"></i>
        </div>
      </div>
    </section>
  );
}

export default Projects;
