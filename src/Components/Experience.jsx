import { motion } from "framer-motion";
function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[calc(100dvh-var(--spacing-header))] sidePadding py-10 flex flex-col gap-y-10"
    >
      <div className="flex justify-center">
        <div className="w-max relative text-5xl font-bold">
          <span className=" w-[70%] h-[70%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#E5DCF1] from-[#DECFF3] z-10"></span>
          <h1 className="z-20 relative text-[clamp(2.5rem,5vw,3.75rem)]">Experience.</h1>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-white w-full py-5 px-5 flex gap-x-10 rounded-2xl"
      >
        <p className="text-m whitespace-nowrap">November 2024-Present</p>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold items-center flex gap-x-3 pb-1">
            Frontend & Backend Developer • Humanity Unleashed{" "}
            <i className="fa-solid fa-square-arrow-up-right text-[#A75FFF] text-3xl"></i>
          </h3>
          <p className="text-[#6F6F6F]">
            <span className="font-bold">
              Coauthored a published research paper
            </span>{" "}
            by analyzing and recommending the ideal database architecture to{" "}
            <span className="font-bold">
              optimize scalability and efficiency
            </span>
            . Designed and implemented{" "}
            <span className="font-bold"> API endpoints </span>for user
            authentication, ensuring{" "}
            <span className="font-bold">
              secure and seamless communication between the front-end and
              back-end
            </span>
            .{" "}
            <span className="font-bold">Developed detailed documentation</span>{" "}
            for the authentication system to streamline integration and improve
            developer comprehension.
          </p>
          <div className="pt-10 flex gap-x-2 items-center">
            <i class="fa-solid fa-microchip text-2xl text-[#A75FFF]"></i>
            <div className="text-xs text-white flex gap-x-2">
              <button className="min-w-[100px] h-[24px] bg-[#D3AFFF] px-3 rounded-full">
                API Development and Documentation
              </button>
              <button className="min-w-[100px] h-[24px] bg-[#D3AFFF] px-3 rounded-full">
                Database Architecture
              </button>
              <button className="min-w-[100px] h-[24px] bg-[#D3AFFF] px-3 rounded-full">
                Research
              </button>
              <button className="min-w-[100px] h-[24px] bg-[#D3AFFF] px-3 rounded-full">
                Figma
              </button>
              <button className="min-w-[100px] h-[24px] bg-[#D3AFFF] px-3 rounded-full">
                MongoDB
              </button>
              <button className="min-w-[100px] h-[24px] bg-[#D3AFFF] px-3 rounded-full">
                Authentication Systems
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[100px] aspect-w-1 aspect-h-1">
          <img
            className="border-1 border-gray-200 rounded-md "
            src="/assets/humun_logo.jpg"
          ></img>
        </div>
      </motion.div>
      <motion.div
        initial={{ transform: "translateX(100px)", opacity: 0 }}
        whileInView={{ transform: "translateX(0px)", opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/sameen-majid-8b31591ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center flex-col md:flex-row gap-y-3 w-full items-center gap-x-3 group cursor-pointer">
            <p className="font-bold text-[#313131] md:text-[#6F6F6F] text-center text-[clamp(0.75rem,1.5vw,1rem)] group-hover:text-[#313131]">
              I’m always looking for the next opportunity to apply my skills.
              Let’s get in touch and discuss how I can help bring your project
              to life!
            </p>
            <i className="fa-brands fa-linkedin text-2xl text-[#A75FFF] md:text-[#D3AFFF] group-hover:text-[#A75FFF]"></i>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
export default Experience;
