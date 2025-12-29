import CustomShapeVideo from "@/components/CustomShapeVideo";
import CustomShapeImage from "../components/CustomShapeImage";
import Container from "@/components/Continor";
import Hero from "@/sections/Hero";
import Header from "@/components/header";
import About from "@/sections/About";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Header />
      <Hero />

      <About />
    </div>
  );
}
