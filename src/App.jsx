import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ContactBar from "./Components/ContactBar";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  const [windowTop, setWindowTop] = useState(true);
  const [count, setCount] = useState(0);
  const handleScrollTop = () => {
    if (window.scroll === 0) {
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
    <>
      <Header windowTop={windowTop}/>
      <Outlet/>
      <ContactBar />
    </>
  );
}

export default App;
