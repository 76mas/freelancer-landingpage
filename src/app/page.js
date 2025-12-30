import Hero from "@/sections/Hero";
import Header from "@/components/header";
import About from "@/sections/About";
import Service from "@/sections/Service";
import Projects from "@/sections/Projects";
import Blog from "@/sections/Blog";
import Fqa from "@/sections/Fqa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Header />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Blog />
      <Fqa />

    </div>
  );
}
