import { useState, useEffect, useRef } from "react";

function Home() {
  const [ready, setReady] = useState(false);
  const [particles, setParticles] = useState([]);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [paddingTop, setPaddingTop] = useState(0);
  const homeRef = useRef(null);

  useEffect(() => {
    const updatePadding = () => {
      if (!homeRef.current) return;

      const width = window.innerWidth;
      const style = window.getComputedStyle(homeRef.current);
      const height =
        homeRef.current.scrollHeight -
        parseFloat(style.paddingTop) -
        parseFloat(style.paddingBottom);

      if (width < 768) {
        const heightDiff = window.innerHeight - height - 72;
        setPaddingBottom((heightDiff * 2) / 3);
        setPaddingTop((heightDiff * 1) / 3);
      } else {
        setPaddingBottom(150);
        setPaddingTop(12);
      }
      setReady(true);
    };

    updatePadding();
  }, []);
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
      ref={homeRef}
      style={{
        paddingBottom: `${paddingBottom}px`,
        paddingTop: `${paddingTop}px`,
      }}
      className={`flex flex-col relative md:flex-row sidePadding w-full md:min-h-[calc(100svh-var(--header-height))] gap-x-5 items-center justify-center md:justify-start gap-y-7 `}
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
      <div
        className={`flex-col flex gap-y-7  md:order-1 order-2 transition-opacity duration-1000 ease-in-out ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
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
          <a
            href="https://www.linkedin.com/in/sameen-majid-8b31591ba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer text-[clamp(0.625rem,1.5vw,0.875rem)] rounded-full shadow-xl w-[clamp(6rem,10vw,10.625rem)] h-[clamp(2.125rem,3vw,2.5rem)] bg-primary text-white  hover:bg-black hover: transition-all duration-150">
              Linkedin
            </button>
          </a>
          <a
            href="https://github.com/sameenmajid12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer text-[clamp(0.625rem,1.5vw,0.875rem)] rounded-full shadow-xl w-[clamp(6rem,15vw,10.625rem)] h-[clamp(2.125rem,3vw,2.5rem)] bg-primary text-white  hover:bg-black hover: transition-all duration-150">
              Github
            </button>
          </a>
          <a href="/assets/Sameen_Resume.pdf" target="_blank">
            <button className="cursor-pointer text-[clamp(0.625rem,1.5vw,0.875rem)] rounded-full shadow-xl w-[clamp(6rem,15vw,10.625rem)] h-[clamp(2.125rem,3vw,2.5rem)] bg-primary text-white  hover:bg-black hover: transition-all duration-150">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div
        className={`h-full w-full  md:order-2 order-1 transition-opacity duration-1000 ease-in-out ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
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
