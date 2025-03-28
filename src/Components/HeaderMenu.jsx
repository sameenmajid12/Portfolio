import { useEffect } from "react";

function HeaderMenu({ toggleVisibility, scrollToSection, checkActive}) {
  const navigate = (route) => {
    scrollToSection(route);
    toggleVisibility();
  };
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);
  return (
    <div className="flex flex-col gap-y-5 animate-slide-in bg-white w-[100dvw] h-[100dvh] z-200 fixed top-0 bottom-0 right-0 left-0 p-5 pt-[90px] overflow-hidden">
      <div
        className={"flex justify-between p-5  h-18 items-center bg-white border-b-1 border-b-solid border-b-[rgba(0,0,0,0.15)] fixed top-0 right-0 left-0 z-110"}
      >
        <img className="w-auto h-[clamp(1.25rem,1.5vw,1.5rem)]" src="/assets/logo.png"></img>
        <i
        onClick={toggleVisibility}
        className="fa-solid fa-multiply text-2xl cursor-pointer"
      ></i>
      </div>
      
      <div
        onClick={() => navigate("home")}
        className={`flex items-center gap-x-3 text-[40px] cursor-pointer w-max ${checkActive('home')?'font-bold text-[#313131]':'text-[#474747]'}`}
      >
        Home
        {checkActive('home')?<i className="fa-solid fa-circle-chevron-right text-xl text-red"></i>:''}
      </div>
      <div
        onClick={() => navigate("projects")}
        className={`flex items-center gap-x-3 text-[40px] cursor-pointer w-max ${checkActive('projects')?'font-bold text-[#313131]':'text-[#474747]'}`}
      >
        Projects
        {checkActive('projects')?<i className="fa-solid fa-circle-chevron-right text-xl text-red"></i>:''}

      </div>
      <div
        onClick={() => navigate("experience")}
        className={`flex items-center gap-x-3 text-[40px] cursor-pointer w-max ${checkActive('experience')?'font-bold text-[#313131]':'text-[#474747]'}`}
      >
        Experience
        {checkActive('experience')?<i className="fa-solid fa-circle-chevron-right text-xl text-red"></i>:''}
      </div>
      <div
        onClick={() => navigate("skills")}
        className={`flex items-center gap-x-3 text-[40px] cursor-pointer w-max ${checkActive('skills')?'font-bold text-[#313131]':'text-[#474747]'}`}
      >
        Skills
        {checkActive('skills')?<i className="fa-solid fa-circle-chevron-right text-xl text-red"></i>:''}

      </div>
    </div>
  );
}
export default HeaderMenu;
