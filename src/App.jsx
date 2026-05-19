import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        
        {/* TOP GLOW */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />

        {/* RIGHT GLOW */}
        <div className="absolute top-[300px] right-[-150px] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-3xl" />

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-[-200px] left-[30%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

        {/* GRID EFFECT */}
        <div
          className="
            absolute inset-0
            opacity-[0.03]
            dark:opacity-[0.06]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;