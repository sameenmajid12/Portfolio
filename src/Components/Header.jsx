import "../index.css";
function Header({ windowTop, activeSection }) {
  const checkActive = (route) => {
    if (activeSection === route) {
      return true;
    }
    return false;
  };
  const scrollToSection = (sectionId) => {
    console.log(sectionId);
    const section = document.getElementById(sectionId);
    console.log(section.offsetTop + 72);
    if(!checkActive(sectionId)){
      window.scrollTo({
        top: section.offsetTop - 72,
        behavior: "smooth",
      });
    }
    
  };
  const selectorLine = (
    <span className="animate-slide-up bottom-[-5px] right-1/2 transform -translate-x-[-50%] absolute w-3.75 h-0.75 rounded bg-black"></span>
  );
  return (
    <div
      className={`flex justify-between sidePadding h-18 items-center ${
        !windowTop
          ? "bg-white shadow-md fixed top-0 right-0 left-0 z-110"
          : "relative shadow-none bg-transparent"
      }`}
    >
      <img className="w-auto h-6" src="/assets/logo.png"></img>
      <div className="text-primary flex text-l gap-x-5">
        <div
          className={`relative cursor-pointer ${
            checkActive("home") ? "font-bold" : ""
          }`}
        >
          <a onClick={() => scrollToSection("home")}>
            Home
          </a>

          {checkActive("home") ? selectorLine : ""}
        </div>
        <div
          className={` relative cursor-pointer ${
            checkActive("projects") ? "font-bold" : ""
          }`}
        >
          <a onClick={() => scrollToSection("projects")}>
            Projects
          </a>

          {checkActive("projects") ? selectorLine : ""}
        </div>
        <div
          className={`relative cursor-pointer ${
            checkActive("experience") ? "font-bold" : ""
          }`}
        >
          <a onClick={() => scrollToSection("experience")}>
            Experience
          </a>
          {checkActive("experience") ? selectorLine : ""}
        </div>
        <div
          className={`relative cursor-pointer ${
            checkActive("skills") ? "font-bold" : ""
          }`}
        >
          Skills
          {checkActive("skills") ? selectorLine : ""}
        </div>
      </div>
    </div>
  );
}
export default Header;
