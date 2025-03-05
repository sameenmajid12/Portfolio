import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Lume",
    description: (
      <>
        An <strong>online learning platform</strong> where users have the
        ability to contribute their knowledge on topics and get rewarded with
        our website’s currency, Brains. Using this currency, users have the
        ability to buy other courses on the website, creating a{" "}
        <strong>self-sustaining economy</strong> where{" "}
        <strong>learning and teaching are highly rewarded</strong>.
      </>
    ),
    imageUrl: "/assets/LumeSS.png",
    logoUrl: "/assets/LumeLogo.png",
    tools: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Figma",
      "UI/UX",
      "REST APIs",
    ],
    status: "In Progress",
    link: "https://github.com/Saminraiyan12/Lume",
  },
  {
    title: "NestFrames",
    description: (
      <>
        A <strong>social media web app for collaborative group albums</strong>,
        letting users{" "}
        <strong>create, share, and manage albums with friends</strong>. With{" "}
        <strong>real-time messaging and notifications</strong>, users stay
        connected through updates, tags, and comments. Customizable profiles
        make sharing seamless, fostering a community-driven experience built
        around shared memories.
      </>
    ),
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
    link: "https://github.com/Saminraiyan12/NestFrames-Backend",
  },
  {
    title: "InterModal",
    description: (
      <>
        InterModal is a smart transportation app designed to{" "}
        <strong>optimize travel</strong> across multiple modes of transit,
        making commuting{" "}
        <strong>faster, more efficient, and hassle-free</strong>. With{" "}
        <strong>real-time route planning</strong>, <strong>live updates</strong>
        , and <strong>seamless integration</strong> of various transportation
        options, InterModal helps users navigate their journeys{" "}
        <strong>with ease</strong>.
      </>
    ),
    imageUrl: "/assets/InterModalSS.png",
    logoUrl: "/assets/intermodal.svg",
    tools: ["Swift", "SwiftUI", "Firebase", "XCode"],
    status: "Submitted to HackRU Fall 2024",
    link: "https://devpost.com/software/intermodal",
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
      className="min-h-[calc(100svh-var(--header-height))] sidePadding py-10 flex flex-col gap-y-15 md:gap-y-10"
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
            <div
              key={project.title}
              className="cursor-pointer flex flex-col md:flex-row bg-white w-full  flex gap-x-5 gap-y-2 p-5 rounded-2xl md:rounded-3xl relative hover:shadow-md hover:bg-[rgba(255,255,255,0.5)] transition-all"
            >
              <img
                className="w-full md:w-[clamp(15rem,20vw,19.375rem)] object-cover rounded-md md:rounded-xl border border-[rgba(0,0,0,0.10)]"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="flex flex-col gap-y-1 justify-between max-w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="flex gap-x-2 font-bold text-[clamp(1.25rem,2vw,1.5rem)] items-center pb-1">
                    {project.title}
                    {project.logoUrl && (
                      <img
                        className={`w-auto ${index === 2 ? "h-5" : "h-7"}`}
                        src={project.logoUrl}
                        alt={`${project.title} Logo`}
                      />
                    )}
                  </h2>
                  <p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-[clamp(0.75rem,1vw,1rem)] text-[#6F6F6F] w-full mb-2"
                  >
                    {project.description}
                  </p>
                </motion.div>
                <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
                  <i className="fa-solid fa-screwdriver-wrench text-[#FF6868]"></i>
                  {project.tools.map((tool, i) => (
                    <motion.button
                      key={i}
                      className="text-[clamp(0.625rem,1.25vw,0.75rem)] bg-[#FFB4B4] px-5 h-[clamp(1.125rem,1.75vw,1.5rem)] text-white rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tool}
                    </motion.button>
                  ))}
                </div>
              </div>
              <motion.span
                initial={{ translateX: 20, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="absolute right-0 top-0 transform -translate-y-[100%] font-bold text-[clamp(0.875rem,1.25vw,1rem)]"
              >
                {project.status}
              </motion.span>
            </div>
          </a>
        ))}
        <motion.div
          initial={{ translateX: "-5dvw", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="flex justify-center font-bold items-center pb-5"
          style={{ willChange: "opacity" }}
        >
          <div className="relative pr-2 text-[clamp(1rem, 1.25vw,1.25rem)]">
            Stay tuned for more!
            <span className="w-[30%] absolute h-[3px] bg-[#FF6868] rounded-md bottom-[-2px] left-0"></span>
          </div>
          <i className="fa-solid fa-folder-open text-[#FF6868]"></i>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
