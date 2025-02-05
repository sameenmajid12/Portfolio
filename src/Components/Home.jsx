import { useState, useEffect } from "react";
function Home(){
  const [particles, setParticles] = useState([]);

  useEffect(() => {

    const generateParticles = () => {
      console.log(Math.random()*99);
      const newParticles = Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        x: Math.random() * 99, // Random X position (percentage)
        y: Math.random() * 99, // Random Y position (percentage)
        size: Math.random() * 5 + 5, // Random size between 5px and 10px
        duration: Math.random() * 6 + 2, // Random animation duration
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);
  return(
  <section id="home" className="flex pl-50 pr-50 pt-3 pb-3 w-full min-h-[calc(100dvh-72px)] pb-[calc(72px+78px)] gap-x-5 items-center">
    <div className={"absolute top-0 bottom-0 right-0 left-0 pointer-events-none z-0"}>
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
    <div className="flex-col flex gap-y-7">
      <div className="flex-col">
        <div className="w-max relative text-6xl font-bold"><span className=" w-[50%] h-[65%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#E5DCF1] from-[#DECFF3] z-10"></span><h1 className="z-20 relative">Hi, I'm Sameen.</h1></div>
        <h2 className="text-xl">Welcome to my portfolio! Explore how I combine creativity with functionality to bring ideas to life.</h2>
      </div>
      <div className="flex gap-x-[15px]">
        <button className="cursor-pointer text-sm rounded-full shadow-xl w-[170px] h-[40px] bg-primary text-white  hover:bg-black hover: transition-all duration-150">Projects</button>
        <button className="cursor-pointer text-sm rounded-full shadow-xl w-[170px] h-[40px] bg-primary text-white hover:bg-black  transition-all duration-150">Experience</button>
        <button className="cursor-pointer text-sm rounded-full shadow-xl w-[170px] h-[40px] bg-primary text-white hover:bg-black  transition-all duration-150">Skills</button>
      </div>
    </div>
    <div className="h-full w-full">
      <div className="flex justify-end">
        <img className="w-[25vw] rounded-full z-100" src="/assets/Profile.jpg"></img>
      </div>

    </div>
  </section>)
}
export default Home;