import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles/globals.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Welcome from "./components/Welcome/Welcome";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-glow"
        animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      />

      <HeaderMenu />

      <div className="main-content" id="presentation">
        <Welcome />
      </div>

      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
