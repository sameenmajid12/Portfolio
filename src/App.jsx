import { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./index.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { ClimbingBoxLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(window.innerWidth < 768);
  const [showLoader, setShowLoader] = useState(true);
  const [windowTop, setWindowTop] = useState(true);
  const [showCaseProject, setShowCaseProject] = useState({
    isVisible: false,
    data: null,
  });
  const [active, setActive] = useState("");
  const changeThemeColor = (color) => {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute("content", color);
  };
  useEffect(() => {
    const handleScrollTop = () => {
      setWindowTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);
  useEffect(() => {
    changeThemeColor(windowTop ? "#efefef" : "#FFF");
  }, [windowTop]);
  useEffect(() => {
  const preventDefault = (e) => e.preventDefault();
  const preventKeys = (e) => {
    const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
    if (keys.includes(e.key)) e.preventDefault();
  };

  window.addEventListener("wheel", preventDefault, { passive: false });
  window.addEventListener("touchmove", preventDefault, { passive: false });
  window.addEventListener("keydown", preventKeys, { passive: false });

  const loaderAnimationTimeout = setTimeout(() => {
    setShowLoader(false);
  }, 4500);

  const closeLoaderTimeout = setTimeout(() => {
    setLoading(false);
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
    window.removeEventListener("keydown", preventKeys);
  }, 5250);

  return () => {
    clearTimeout(loaderAnimationTimeout);
    clearTimeout(closeLoaderTimeout);
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
    window.removeEventListener("keydown", preventKeys);
  };
}, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const checkActive = (route) => {
    if (active === route) {
      return true;
    }
    return false;
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!checkActive(sectionId)) {
      window.scrollTo({
        top: section.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {loading && (
        <div
          className={`absolute bg-[#EFEFEF] top-0 bottom-0 right-0 left-0 z-1000  flex justify-center items-center transition-all duration-750 ease opacity-${
            showLoader ? "1" : "0"
          }`}
        >
          <ClimbingBoxLoader
            size={20}
            color="#333333"
            style={{ transform: "rotate(35deg)" }}
          />
          <p className="absolute rotate-350 left-[50%] translate-x-[-35%] translate-y-[20px] font-bold">
            Loading...
          </p>
        </div>
      )}
      <div className={`flex-col relative min-h-screen pt-[72px]`}>
        <Header
          windowTop={windowTop}
          scrollToSection={scrollToSection}
          checkActive={checkActive}
          changeThemeColor={changeThemeColor}
          active={active}
          setActive={setActive}
        />
        <Home />
        <Experience
          showcaseProject={showCaseProject}
          setShowcaseProject={setShowCaseProject}
        />
        <Projects
          showcaseProject={showCaseProject}
          setShowcaseProject={setShowCaseProject}
        />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
