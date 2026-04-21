import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar dark={dark} setDark={setDark} />
      <Home />
      <About />
      <Education />
       <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}