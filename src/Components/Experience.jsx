import { motion } from "framer-motion";
import ShowCaseModal from "./ShowCaseModal";
const experiences = [
  {
    date: "May 2025 - Present",
    role: "Founder & Developer",
    company: "Nito",
    //companyLogo: "/assets/deerectlogo.png",
    description: (
      <>
        Conceptualized and engineered a <strong>React Native</strong> mobile app
        for university students, facilitating anonymous, timed matchmaking to
        reduce social anxiety on campus. Deployed a scalable backend utilizing{" "}
        <strong>AWS</strong>, specifically <strong>S3</strong> for image
        storage, <strong>SES</strong> for email verification, and
        <strong>Lambda</strong> with <strong>SQS</strong> and{" "}
        <strong>EventBridge</strong> for automated matchmaking and timed reveal
        phases. Implemented database and API infrastructure using
        <strong>MongoDB</strong> and <strong>Express.js</strong>, integrated{" "}
        <strong>Websockets</strong> for real-time interactions, and utilized{" "}
        <strong>vector embeddings</strong> for interest-based matchmaking
        between users.
      </>
    ),
    skills: [
      "React Native",
      "Lambda",
      "SQS",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    showCaseImages: [
      "nito1.png",
      "nito2.png",
      "nito3.png",
      "nito4.png",
      "nito5.png",
      "nito6.png",
      "nito7.png",
      "nito8.jpeg",
    ],
  },
  {
    date: "Apr 2025 - Present",
    role: "Software Engineering Intern",
    company: "Deerect",
    //companyLogo: "/assets/deerectlogo.png",
    description: (
      <>
        Collaborated with a team of 4 to{" "}
        <strong>
          build an innovative platform aimed at simplifying tax lien investments
        </strong>{" "}
        for individuals. <strong>Designed and developed</strong> the platform’s
        initial mockups for <strong>8 different sections</strong> on Figma,
        including the landing page, user dashboard, settings interface, and
        waitlist page. Built a <strong>responsive waitlist</strong> page using{" "}
        <strong>Next.js and Tailwind CSS</strong>, integrating Google Sheets via
        Google APIs to securely store over <strong>150 user sign-ups</strong>.
        Developed a <strong>streamlined communication channel</strong> between
        users and our team using Resend,{" "}
        <strong>improving response efficiency and user engagement.</strong>
      </>
    ),
    skills: [
      "UI/UX Design",
      "Figma",
      "Next.js",
      "React.js",
      "Google APIS",
      "Resend",
    ],
    externalLink:
      "https://www.figma.com/design/2cUvTHQvlIEi3CFNNQsd9k/Deerect-2.0?t=TtesUzlPHJK5Lpl9-0",
  },
  {
    date: "Nov 2024 - Apr 2025",
    role: "Frontend & Backend Developer",
    company: "Humanity Unleashed",
    //companyLogo: "/assets/humun_logo.jpg",
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
function Experience({ showcaseProject, setShowcaseProject }) {
  return (
    <>
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
              <div
                onClick={() => {
                  if (experience.showCaseImages) {
                    setShowcaseProject({ isVisible: true, data: experience });
                  }
                }}
                className="bg-white w-full py-5 px-5 flex [@media(max-width:1200px)]:flex-col gap-x-5 rounded-2xl hover:shadow-md hover:bg-[rgba(255,255,255,0.5)] transition-all cursor-pointer  "
              >
                <p className="text-[clamp(0.875rem,1.5vw,1.25rem)] whitespace-nowrap ">
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
                      <i className="fa-solid fa-microchip text-2xl text-[#A75FFF] pr-1"></i>
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
              <p className="font-bold text-[#313131] md:text-[#6F6F6F] text-center text-[clamp(0.875rem,1.5vw,1rem)] group-hover:text-[#313131]">
                I'm always eager to work on new projects. Let’s connect and
                create something great!
              </p>
              <i className="fa-brands fa-linkedin text-[clamp(1.125rem,1.5vw,1.5rem)] text-[#A75FFF] md:text-[#D3AFFF] group-hover:text-[#A75FFF]"></i>
            </div>
          </a>
        </motion.div>
      </section>
      {showcaseProject.isVisible && (
        <ShowCaseModal
          project={showcaseProject}
          setProject={setShowcaseProject}
        />
      )}
    </>
  );
}
export default Experience;
