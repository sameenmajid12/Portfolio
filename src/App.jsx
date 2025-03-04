import { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./index.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  const [windowTop, setWindowTop] = useState(true);
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
    if (window.screen.width > 767) {
      sections.forEach((section) => observer.observe(section));
    }
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
    <div className={`flex-col relative min-h-screen pt-[72px]`}>
      <Header
        windowTop={windowTop}
        scrollToSection={scrollToSection}
        checkActive={checkActive}
        changeThemeColor={changeThemeColor}
      />
      <Home scrollToSection={scrollToSection} />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
