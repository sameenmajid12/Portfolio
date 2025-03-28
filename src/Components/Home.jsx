import { useState, useEffect } from "react";
function Home({ scrollToSection }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        x: Math.random() * 99,
        y: Math.random() * 99,
        size: Math.random() * 5 + 5,
        duration: Math.random() * 6 + 2,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);
  
  return (
    <section
      id="home"
      className="flex flex-col relative md:flex-row sidePadding pt-3 pb-3 w-full min-h-[calc(100svh-var(--header-height))] pb-[calc(72px+78px)] gap-x-5 items-center justify-center md:justify-start gap-y-7 "
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-primary opacity-60 rounded-full animate-float z-0"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="flex-col flex gap-y-7  md:order-1 order-2">
        <div className="flex-col">
          <div className="w-full flex justify-center md:justify-start">
            <div className="w-max relative text-6xl font-bold">
              <span className=" w-[50%] h-[65%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#E5DCF1] from-[#DECFF3] z-10"></span>
              <h1 className="z-20 relative text-[clamp(2.5rem,5vw,3.75rem)]">
                Hi, I'm Sameen.
              </h1>
            </div>
          </div>
          <h2 className="text-[clamp(0.75rem,2vw,1.25rem)] text-center md:text-start">
            Welcome to my portfolio! Explore how I combine creativity with
            functionality to bring ideas to life.
          </h2>
        </div>
        <div className="flex gap-x-[clamp(0.625rem,1.5vw,1rem)] justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer text-[clamp(0.625rem,1.5vw,0.875rem)] rounded-full shadow-xl w-[clamp(6rem,10vw,10.625rem)] h-[clamp(2.125rem,3vw,2.5rem)] bg-primary text-white  hover:bg-black hover: transition-all duration-150"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer text-[clamp(0.625rem,1.5vw,0.875rem)] rounded-full shadow-xl w-[clamp(6rem,15vw,10.625rem)] h-[clamp(2.125rem,3vw,2.5rem)] bg-primary text-white  hover:bg-black hover: transition-all duration-150"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer text-[clamp(0.625rem,1.5vw,0.875rem)] rounded-full shadow-xl w-[clamp(6rem,15vw,10.625rem)] h-[clamp(2.125rem,3vw,2.5rem)] bg-primary text-white  hover:bg-black hover: transition-all duration-150"
          >
            Skills
          </button>
        </div>
      </div>
      <div className="h-full w-full  md:order-2 order-1">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-[clamp(15rem,25vw,26.875rem)] rounded-full z-100"
            src="/assets/Profile.jpg"
          ></img>
        </div>
      </div>
    </section>
  );
}
export default Home;
