"use client";
import Container from "./Continor";
import MainButton from "./mainbutton";
import { useState } from "react";

const SVGR = ({ className = "", fill = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="51"
      fill={fill}
      viewBox="0 0 88 51"
      className={className}
    >
      <path
        d="M 88 0 C 88 0 69 2 53 24 C 37.6 46 28 51 0 51 C 0 28 0 0 0 0 Z"
        fill={fill}
      ></path>
    </svg>
  );
};

const Header = () => {
  const [lang, setLang] = useState("en");

  return (
    <div className="w-full h-[200px] fixed top-0 left-0 z-50 flex items-center justify-center">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-start justify-center">MAS</div>

          <div className="flex items-start justify-center ">
            {/* Left Wing (Flipped SVGR) */}
            <SVGR className="scale-x-[-1]" />

            {/* Center Content */}
            <div className="flex relative z-20 items-center justify-center gap-8 bg-white h-[51px] px-8 text-white min-w-[600px]">
              <div className="flex items-center justify-between gap-8 h-full">
                <button className="text-yellow-500 font-bold text-sm">
                  About us
                </button>
                <button className="hover:text-gray-300 text-black font-bold text-sm">
                  Services
                </button>
                <button className="hover:text-gray-300 text-black font-bold text-sm">
                  Projects
                </button>
                <button className="hover:text-gray-300 text-black font-bold text-sm">
                  Pricing
                </button>
                <button className="hover:text-gray-300 text-black font-bold text-sm">
                  Blog
                </button>
                <button className="hover:text-gray-300 text-black font-bold text-sm">
                  Faq
                </button>
                <button className="hover:text-gray-300 text-black font-bold text-sm">
                  Contact us
                </button>
              </div>
            </div>

            {/* Right Wing */}
            <SVGR />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center bg-white rounded-full p-1 shadow-md gap-1">
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  lang === "en"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  lang === "ar"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
