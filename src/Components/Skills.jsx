function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", image: "/assets/javascript.png" },
        { name: "Swift", image: "/assets/swift.png" },
        {name:"Java", image:"/assets/java.png"}
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML", image: "/assets/html.png" },
        { name: "CSS", image: "/assets/css.png" },
        { name: "TailwindCSS", image: "/assets/tailwind.png" },
        { name: "React", image: "/assets/react.png" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Express.js", image: "/assets/express.png" },
        { name: "MongoDB", image: "/assets/mongodb.svg" },
        { name: "Node.js", image: "/assets/nodejs.png" },
        { name: "Socket.IO", image: "/assets/socketio.png" },
        {name:"SQL", image:"/assets/sql.png"},
        {name:"Firebase", image:"/assets/firebase.png"}
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
      className="min-h-[calc(100dvh-72px)] py-10 flex flex-col gap-y-10 sidePadding pb-50"
    >
      <div className="flex md:justify-start justify-center">
        <div className="w-max relative text-5xl font-bold">
          <span className=" w-[67%] h-[65%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#F2D4D4] from-[#F5B9B9] z-10 opacity-70"></span>
          <h1 className="z-20 relative text-[clamp(2.5rem,5vw,3.75rem)]">
            Skills.
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h2 className="font-bold">{category.category}</h2>
            <div className="grid grid-cols-[repeat(auto-fit,clamp(8rem,17.5vw,12.5rem))] gap-x-[clamp(2.5rem,4vw,4rem)] gap-y-[clamp(1.5rem,4vw,2.5rem)]">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="h-[clamp(10rem,17.5vw,15.625rem)] w-[clamp(8rem,17.5vw,12.5rem)] flex flex-col bg-white rounded-2xl shadow-[0px_15px_15px_rgba(255,104,104,0.15)] overflow-hidden items-center"
                >
                  <div className="flex-1 flex justify-center">
                    <img
                      className="object-contain w-[clamp(3.75rem,10vw,4.25rem)]"
                      src={skill.image}
                      alt={skill.name}
                    />
                  </div>
                  <div className="w-full bg-red flex justify-center items-center text-white font-bold py-2 text-sm">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
