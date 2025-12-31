"use client";
import Container from "@/components/Continor";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import { FaAngleDoubleRight } from "react-icons/fa";

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
                  +1 234 564 34
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 flex items-center justify-center  rounded-full">
                  <IoLocationOutline className="text-xl" />
                </div>
                <span className="text-lg">
                  43 Louise Ave, 10, Charlotte, NC 204
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#f8f9fa] border border-gray-200 rounded-[40px] p-10 md:p-12 shadow-sm">
            <form
              className="flex flex-col gap-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-500">
                    {t.firstName}
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-500">
                    {t.lastName}
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-500">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-500">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">
                  {t.message}
                </label>
                <textarea
                  rows="1"
                  className="bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none overflow-hidden"
                ></textarea>
              </div>

              <button className="w-full bg-black text-white h-[60px] rounded-full flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-300 hover:bg-zinc-800">
                <span className="text-lg font-medium mx-auto">{t.submit}</span>
                <div className="absolute right-6">
                  <FaAngleDoubleRight className="text-xl group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </Container>

      <div className="w-full relative h-[500px] bg-[#f8f9fa]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1652792997653-7e5897fb309a?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Contect;
