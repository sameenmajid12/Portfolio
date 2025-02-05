function Projects() {
  return (
    <section id="projects" className="min-h-[calc(100dvh-72px)] px-50 py-10 flex flex-col gap-y-10">
      <div className="w-max relative text-5xl font-bold">
        <span className=" w-[67%] h-[65%] right-[-5px] bottom-[-5px] absolute bg-gradient-to-l to-[#F2D4D4] from-[#F5B9B9] z-10 opacity-70"></span>
        <h1 className="z-20 relative">My Projects.</h1>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="bg-white w-full h-50 flex gap-x-5 p-5 rounded-xl relative">
          <img
            className="rounded-sm border border-[rgba(0,0,0,0.10)]"
            src="/assets/LumeSS.png"
          ></img>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="flex gap-x-2 font-bold text-2xl items-center pb-1">
                Lume
                <img className="h-7 w-auto" src="/assets/LumeLogo.png"></img>
              </h2>
              <p className="text-m text-[#6F6F6F]">
                An <span className="font-bold">online learning platform</span>{" "}
                where users have the ability to contribute their knowledge on
                topics and get rewarded with our websites currency Brains. Using
                this currency users have the ability to buy other courses on the
                website, creating a{" "}
                <span className="font-bold">self-sustaining economy</span> where{" "}
                <span className="font-bold">
                  learning and teaching are highly rewarded
                </span>
              </p>
            </div>

            <div className="flex items-center gap-x-3 ">
              <i class="fa-solid fa-screwdriver-wrench text-[#FF6868]"></i>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-sm">
                React.js
              </button>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-sm">
                Express.js
              </button>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-sm">
                Node.js
              </button>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-sm">
                MongoDB
              </button>
              <p className="text-[#FF6868]">& more</p>
            </div>
          </div>
          <span className="absolute right-0 top-0 transform -translate-y-[100%] font-bold">
            In Progress
          </span>
        </div>{" "}
        <div className="bg-white w-full h-50 flex gap-x-5 p-6 rounded-xl relative cursor-pointer">
          <img
            className="rounded-sm border border-[rgba(0,0,0,0.10)]"
            src="/assets/NestFramesSS.png"
          ></img>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="flex gap-x-2 font-bold text-2xl items-center pb-1">
                NestFrames
                <img
                  className="h-7 w-auto"
                  src="/assets/NestFramesLogo.png"
                ></img>
              </h2>
              <p className="text-m text-[#6F6F6F]">
                A <span className="font-bold">social media web app</span> for
                collaborative <span className="font-bold">group albums</span>,
                letting users{" "}
                <span className="font-bold">
                  create, share, and manage albums
                </span>{" "}
                with friends. With
                <span className="font-bold">
                  {" "}
                  real-time messaging and notifications
                </span>
                , users stay connected through updates, tags, and comments.
                Customizable profiles make sharing seamless, fostering a
                community-driven experience built around shared memories.
              </p>
            </div>

            <div className="flex items-center gap-x-3 ">
              <i class="fa-solid fa-screwdriver-wrench text-[#FF6868]"></i>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-md">
                React.js
              </button>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-md">
                Express.js
              </button>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-md">
                Node.js
              </button>
              <button className="text-xs bg-[#FFB4B4] w-25 h-6 text-white rounded-md">
                MongoDB
              </button>
              <p className="text-[#FF6868]">& more</p>
            </div>
          </div>
          <span className="absolute right-0 top-0 transform -translate-y-[100%] font-bold">
            In Progress
          </span>
        </div>
      </div>
    </section>
  );
}
export default Projects;
