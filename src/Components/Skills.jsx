import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", image: "/assets/javascript.png" },
        { name: "Swift", image: "/assets/swift.png" },
        { name: "Java", image: "/assets/java.png" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML", image: "/assets/html.png" },
        { name: "CSS", image: "/assets/css.png" },
        { name: "React", image: "/assets/react.png" },
        { name: "TailwindCSS", image: "/assets/tailwind.png" },
        { name:"React native", image:"/assets/react.png"}
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Express.js", image: "/assets/express.png" },

        { name: "Node.js", image: "/assets/nodejs.png" },
        { name: "Socket.IO", image: "/assets/socketio.png" },
        { name: "AWS", image: "/assets/aws.png" },
        { name: "Firebase", image: "/assets/firebase.png" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "SQL", image: "/assets/sql.png" },
        { name: "MongoDB", image: "/assets/mongodb.png" },
      ],
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", image: "/assets/git.png" },
        { name: "GitHub", image: "/assets/github.svg" },
      ],
    },
    {
      category: "UI/UX",
      skills: [{ name: "Figma", image: "/assets/figma.png" }],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-[calc(100svh-var(--header-height))] py-10 flex flex-col gap-y-10 sidePadding pb-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex md:justify-start justify-center"
      >
        <div className="w-max relative text-5xl font-bold">
          <span className="w-[67%] h-[65%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#F2D4D4] from-[#F5B9B9] z-10 opacity-70"></span>
          <h1 className="z-20 relative text-[clamp(2.5rem,5vw,3.75rem)]">
            Skills.
          </h1>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 text-center gap-x-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="font-bold text-red text-[clamp(1.25rem,1.5vw,1.5rem)]">
              {category.category}
            </h2>
            <div className="flex gap-x-2 flex-wrap gap-y-1 justify-center md:justify-start">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  className="flex items-center gap-x-2 font-bold text-[clamp(1rem,1.25vw,1.125rem)]"
                >
                  {skill.name}
                  <div className="flex items-center gap-x-[2px]">
                    <img className="max-h-5 max-w-7" src={skill.image}></img>
                    {skillIndex !== category.skills.length - 1 ? ", " : ""}{" "}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
