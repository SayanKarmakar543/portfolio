import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <div
        className={`min-h-screen overflow-x-hidden transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
