import { useEffect } from "react";

function HeaderMenu({ toggleVisibility, scrollToSection }) {
  const navigate = (route) => {
    scrollToSection(route);
    toggleVisibility();
  };
  return (
    <div className="flex flex-col gap-y-10 animate-slide-in bg-white w-[100dvw] h-[100dvh] z-200 fixed top-0 bottom-0 right-0 left-0 p-5">
      <i
        onClick={toggleVisibility}
        className="fa-solid fa-multiply absolute top-3 right-5 text-3xl cursor-pointer transform -translate-y-[-50%]"
      ></i>
      <div
        onClick={() => navigate("home")}
        className="text-5xl font-bold cursor-pointer w-max"
      >
        Home
      </div>
      <div
        onClick={() => navigate("projects")}
        className="text-5xl font-bold cursor-pointer w-max"
      >
        Projects
      </div>
      <div
        onClick={() => navigate("experience")}
        className="text-5xl font-bold cursor-pointer w-max"
      >
        Experience
      </div>
      <div
        onClick={() => navigate("skills")}
        className="text-5xl font-bold cursor-pointer w-max"
      >
        Skills
      </div>
    </div>
  );
}
export default HeaderMenu;
