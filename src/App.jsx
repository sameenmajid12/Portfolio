import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ContactBar from "./Components/ContactBar";
import "./index.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  const [windowTop, setWindowTop] = useState(true);
  const [active, setActive] = useState("");
  const [screenSize, setScreenSize] = useState(false);
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
    document.documentElement.style.setProperty(
      "--header-height",
      window.scrollY === 0 ? "0px" : `72px`
    )
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
    <div className={`flex-col min-h-screen mt-[var(--header-height)]`}>
      <Header
        windowTop={windowTop}
        scrollToSection={scrollToSection}
        checkActive={checkActive}
      />
      <Home scrollToSection={scrollToSection} />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
      <ContactBar />
    </div>
  );
}

export default App;
