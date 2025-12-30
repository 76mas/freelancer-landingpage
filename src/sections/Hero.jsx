"use client";
import Container from "@/components/Continor";
import CustomShapeVideo from "@/components/CustomShapeVideo";
import SplitText from "@/components/textanmation";
import { FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";
import MainButton from "@/components/mainbutton";

const Hero = ({}) => {
  return (
    <section className="w-full h-full min-h-screen flex items-center justify-center bg-black">
      <Container>
        <div className="w-full h-full flex flex-col gap-[30px] mt-10  justify-center">
          <div className="flex flex-col lg:flex-row items-end justify-between w-full h-full ">
            <div className="flex flex-col items-start">
              <SplitText
                text="Make Your"
                className="text-3xl md:text-6xl font-bold text-white text-start"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
              <SplitText
                text="Home Beautiful"
                className="text-3xl md:text-6xl font-bold text-white text-start"
                delay={150}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-end gap-6">
              <p className="text-gray-300 text-right text-lg md:text-xl max-w-md">
                We renovate kitchens, bathrooms, and{" "}
                <br className="hidden md:block" />
                bedrooms to make your home look amazing.
              </p>

              <MainButton
                text="View Our Services"
                textcolor="text-white"
                texthovercolor="text-white"
                buttoncolor="bg-[#000000]"
                buttonhovercolor="bg-[#966106]"
                backgroundcolor="bg-[#966106]"
              />
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center">
            <CustomShapeVideo src="https://youtu.be/EwvPemppoJM?si=fjymen7EMGZRPdm1" />
          </div>
        </div>
      </Container>
    </section>
  );
  
};

export default Hero;
