"use client";
import Container from "@/components/Continor";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import MainButton from "@/components/mainbutton";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Contect = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section
      id="contact"
      data-bg="white"
      className="w-full min-h-screen text-black bg-white flex flex-col items-center justify-center pt-20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-10 ">
          {/* Left Column: Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <IoCallOutline className="text-lg" />
                <span>{t.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {t.title}
              </h1>
              <p className="text-gray-600 text-lg">{t.description}</p>
            </div>

            <div className="flex flex-col gap-1 mt-4">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 flex items-center justify-center  rounded-full">
                  <IoMailOutline className="text-xl" />
                </div>
                <span className="text-lg">Deankresh@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 flex items-center justify-center  rounded-full">
                  <IoCallOutline className="text-xl" />
                </div>
                <span className="text-lg" dir="ltr">
                  +964 770 018 0809
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 flex items-center justify-center  rounded-full">
                  <IoLocationOutline className="text-xl" />
                </div>
                <span className="text-lg">{t.location}</span>
              </div>
            </div>
          </div>

          <div className="relative group bg-black border border-gray-800 rounded-[40px] overflow-hidden shadow-sm h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3334.5420228990533!2d44.35067278480455!3d33.30464248081599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE4JzE2LjciTiA0NMKwMjAnNTQuNSJF!5e0!3m2!1sar!2siq!4v1767782242530!5m2!1sar!2siq"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            {/* Transparent layer to catch touches on mobile without triggering iframe pan immediately */}
            <div className="absolute inset-0 z-10 lg:hidden pointer-events-auto" />

            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 transition-all duration-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 pointer-events-auto lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <div className="transform scale-90 sm:scale-100">
                <MainButton
                  text={lang === "ar" ? "عرض الموقع" : "View Location"}
                  href="https://maps.google.com/?q=33.30464248081599,44.35067278480455"
                  target="_blank"
                  textcolor="text-white"
                  texthovercolor="text-white"
                  buttoncolor="bg-[#000000]"
                  buttonhovercolor="bg-[#966106]"
                  backgroundcolor="bg-[#966106]"
                  iconcolor="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="w-full relative h-[500px] bg-[#f8f9fa]">
        <img
          className="w-full h-full object-cover"
          src="/images/footer.png"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Contect;
