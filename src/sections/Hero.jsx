"use client";
import Container from "@/components/Continor";
import CustomShapeVideo from "@/components/CustomShapeVideo";
import SplitText from "@/components/textanmation";
import { FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";
import MainButton from "@/components/mainbutton";

import { motion } from "motion/react";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Hero = ({}) => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      data-bg="black"
      className="w-full h-full min-h-screen flex items-center justify-center bg-black"
    >
      <Container>
        <div className="w-full h-full flex flex-col gap-8 md:gap-[30px] mt-24 md:mt-10 justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full h-full gap-8 lg:gap-0">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {lang === "ar" ? (
                <>
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                    className="text-4xl md:text-6xl font-bold text-white px-2"
                  >
                    {t.title1}
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                      ease: "easeOut",
                    }}
                    className="text-4xl md:text-6xl font-bold text-white px-2"
                  >
                    {t.title2}
                  </motion.h1>
                </>
              ) : (
                <>
                  <SplitText
                    text={t.title1}
                    className="text-4xl md:text-6xl font-bold text-white px-2"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                  <SplitText
                    text={t.title2}
                    className="text-4xl md:text-6xl font-bold text-white px-2"
                    delay={150}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </>
              )}
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-6">
              <p className="text-gray-300 text-center lg:text-right text-base md:text-xl max-w-md">
                {t.description}
              </p>

              <MainButton
                text={t.cta}
                href="#services"
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
