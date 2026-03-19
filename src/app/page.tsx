import Navbar      from "@/components/sections/Navbar";
import Hero        from "@/components/sections/Hero";
import About       from "@/components/sections/About";
import Skills      from "@/components/sections/Skills";
import Projects    from "@/components/sections/Projects";
import Featured    from "@/components/sections/Featured";
import Experience  from "@/components/sections/Experience";
import Contact     from "@/components/sections/Contact";
import Footer      from "@/components/sections/Footer";
import CursorGlow  from "@/components/ui/CursorGlow";
import LoadingScreen from "@/components/ui/LoadingScreen";

function Divider() {
  return (
    <div className="h-px mx-[6%] bg-gradient-to-r from-transparent via-violet/40 to-transparent opacity-60" />
  );
}

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Featured />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
