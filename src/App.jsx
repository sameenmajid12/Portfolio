import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ContactBar from "./Components/ContactBar";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  const [windowTop, setWindowTop] = useState(true);
  const handleScrollTop = () => {
    if (window.scrollY === 0) {
      setWindowTop(true);
      
    } else {
      setWindowTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div className={`flex-col min-h-screen ${!windowTop?'mt-18':''}`}>
      <Header windowTop={windowTop}/>
      <Outlet/>
      <ContactBar />
    </div>
  );
}

export default App;
