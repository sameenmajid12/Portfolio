import { act, useEffect, useState } from "react";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";
function Header({windowTop}) {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.split("/")[1] || "");
  const navigate = useNavigate();
  const navToSection = (route) => {
    navigate(`${route}`);
  };
  const checkActive=(route)=>{
    if(active===route){
      return true;
    }
    return false;
  }
  useEffect(() => {
    setActive(location.pathname.split("/")[1] || "");
  }, [location]);
  const selectorLine = <span className="animate-slide-up bottom-[-5px] right-1/2 transform -translate-x-[-50%] absolute w-3.75 h-0.75 rounded bg-black"></span>;
  return (
    <div className={`flex justify-between pr-50 pl-50 pt-6 pb-6 ${!windowTop?'bg-white shadow-md fixed top-0 right-0 left-0':''}`}>
      <img className="w-auto h-6" src="/assets/logo.png"></img>
      <div className="text-primary flex text-l gap-x-5">
        <div
          onClick={() => navToSection("")}
          className={`relative cursor-pointer ${checkActive('')? "font-bold" : ""}`}
        >
          Home
          {checkActive('')?selectorLine:''}
        </div>
        <div
          onClick={() => navToSection("")}
          className={`cursor-pointer ${
            active === "projects" ? "font-bold" : ""
          }`}
        >
          Projects
        </div>
        <div
          onClick={() => navToSection("experience")}
          className={`relative cursor-pointer ${
            checkActive('experience') ? "font-bold" : ""
          }`}
        >
          Experience
          {checkActive('experience')?selectorLine:''}
        </div>
        <div
          onClick={() => navToSection("skills")}
          className={`relative cursor-pointer ${checkActive('skills') ? "font-bold" : ""}`}
        >
          Skills
          {checkActive('skills')?selectorLine:''}
        </div>
      </div>
    </div>
  );
}
export default Header;
