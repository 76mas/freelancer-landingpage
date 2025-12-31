"use client";
import BasicAccordion from "@/components/acording";
import Container from "@/components/Continor";
import { IoSettingsOutline } from "react-icons/io5";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Service = () => {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <section
      id="services"
      data-bg="white"
      className="min-h-screen text-black w-full flex justify-center pb-20"
    >
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="flex items-center justify-center gap-2 text-[#4e4e4e] font-bold">
              <IoSettingsOutline />
              <h1>{t.badge}</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold">{t.title}</h1>
            </div>

            <div className="flex items-center max-w-[600px] w-full justify-center px-4">
              <p className="text-center text-gray-500 text-lg">
                {t.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 md:mt-20 gap-10 lg:gap-20 p-6 md:p-20 items-center text-white w-full bg-black rounded-3xl justify-center">
            <div className="w-full h-[300px] md:h-[500px] rounded-2xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bedroom Makeover"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="w-full">
              <BasicAccordion />
            </div>
          </div>
        </div>

        {/*  */}
      </Container>
    </section>
  );
};

export default Service;
