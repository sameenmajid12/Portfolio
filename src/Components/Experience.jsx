import { motion } from "framer-motion";
const experiences = [
  {
    date: "November 2024 - Present",
    role: "Frontend & Backend Developer",
    company: "Humanity Unleashed",
    companyLogo: "/assets/humun_logo.jpg",
    description: (
      <>
        <strong>Coauthored a published research paper</strong> by analyzing and
        recommending the ideal database architecture to{" "}
        <strong>optimize scalability and efficiency</strong>. Designed and
        implemented <strong>API endpoints</strong> for user authentication,
        ensuring{" "}
        <strong>
          secure and seamless communication between the front-end and back-end
        </strong>
        . <strong>Developed detailed documentation</strong> for the
        authentication system to streamline integration and improve developer
        comprehension.
      </>
    ),
    skills: [
      "API Development and Documentation",
      "Database Architecture",
      "Research",
      "Figma",
      "MongoDB",
      "Authentication Systems",
    ],
    externalLink: "https://humun.org/",
  },
];
function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[calc(100svh-var(--header-height))] sidePadding py-10 flex flex-col gap-y-10"
    >
      <div className="flex md:justify-start justify-center">
        <div className="w-max relative text-5xl font-bold">
          <span className=" w-[70%] h-[70%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#E5DCF1] from-[#DECFF3] z-10"></span>
          <h1 className="z-20 relative text-[clamp(2.5rem,5vw,3.75rem)]">
            Experience.
          </h1>
        </div>
      </div>
      {experiences.map((experience, index) => {
        return (
          <a
            key={index}
            href={experience.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white w-full py-5 px-5 flex [@media(max-width:1200px)]:flex-col gap-x-5 rounded-2xl hover:shadow-md hover:bg-[rgba(255,255,255,0.5)] transition-all">
              <p className="text-[clamp(0.875rem,1.5vw,1.25rem)] whitespace-nowrap">
                {experience.date}
              </p>
              <div className="flex flex-col">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="text-[clamp(0.875rem,1.5vw,1.5rem)] text-2xl font-bold pb-1"
                >
                  {experience.role} • {experience.company}{" "}
                  <i className="fa-solid fa-square-arrow-up-right text-[#A75FFF] text-[clamp(1.25rem,1.5vw,1.875rem)] pl-2 [@media(max-width:444px)]:pl-0 [@media(max-width:420px)]:pl-2"></i>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="text-[#6F6F6F] text-[clamp(0.75rem,1vw,1rem)]"
                >
                  {experience.description}
                </motion.p>
                <div className="pt-10 [@media(max-width:1200px)]:pt-4 flex gap-x-2 items-center">
                  <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
                    <i className="fa-solid fa-microchip text-2xl text-[#A75FFF]"></i>
                    {experience.skills.map((skill, index) => {
                      return (
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          key={skill + index}
                          className="text-[clamp(0.625rem,1.25vw,0.75rem)] bg-[#D3AFFF] px-5 [@media(max-width:1200px)]:px-3 h-[clamp(1.125rem,1.75vw,1.5rem)] text-white rounded-full"
                        >
                          {skill}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="max-w-[100px] aspect-w-1 aspect-h-1 [@media(max-width:1200px)]:hidden">
                <img
                  className="border-1 border-gray-200 rounded-md "
                  src="/assets/humun_logo.jpg"
                ></img>
              </div>
            </div>
          </a>
        );
      })}

      <motion.div
        initial={{ translateX: "-5dvw", opacity: 0 }}
        whileInView={{ translateX: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 1 }}
        style={{ willChange: "opacity" }}
      >
        <a
          href="https://www.linkedin.com/in/sameen-majid-8b31591ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center flex-col md:flex-row gap-y-2 w-full items-center gap-x-3 group cursor-pointer">
            <p className="font-bold text-[#313131] md:text-[#6F6F6F] text-center text-[clamp(0.75rem,1.5vw,1rem)] group-hover:text-[#313131]">
              I’m always looking for the next opportunity to apply my skills.
              Let’s get in touch and discuss how I can help bring your project
              to life!
            </p>
            <i className="fa-brands fa-linkedin text-[clamp(1rem,1.5vw,1.5rem)] text-[#A75FFF] md:text-[#D3AFFF] group-hover:text-[#A75FFF]"></i>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
export default Experience;
