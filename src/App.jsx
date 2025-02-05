import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ContactBar from "./Components/ContactBar";
import "./index.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
function App() {
  const [windowTop, setWindowTop] = useState(true);
  const navLinks = ["", "projects", "experience", "skills"];
  const location = useLocation();
  

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY === 0) {
        setWindowTop(true);
      } else {
        setWindowTop(false);
      }
    };
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div className={`flex-col min-h-screen ${!windowTop ? "mt-18" : ""}`}>
      <Header windowTop={windowTop} />
      <Home />
      <Projects/>
      <ContactBar />
    </div>
  );
}

export default App;
