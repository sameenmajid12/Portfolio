import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ContactBar from "./Components/ContactBar";
import "./index.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

function App() {
  const [windowTop, setWindowTop] = useState(true);
  const [active, setActive] = useState("");

  // Detects if user is at the top of the page
  useEffect(() => {
    const handleScrollTop = () => {
      setWindowTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  // Detects which section is active
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
      { threshold: 0.8 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`flex-col min-h-screen ${!windowTop ? "mt-18" : ""}`}>
      <Header windowTop={windowTop} activeSection={active} />
      <Home />
      <Projects />
      <ContactBar />
    </div>
  );
}

export default App;
