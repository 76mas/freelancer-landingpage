"use client";
import Container from "./Continor";
import MainButton from "./mainbutton";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Header = () => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].header;
  const [theme, setTheme] = useState("light"); // light: white header bg, black: black header bg
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bg = entry.target.getAttribute("data-bg");
          const id = entry.target.id;

          if (bg === "black") {
            setTheme("light");
          } else if (bg === "white") {
            setTheme("dark");
          }

          if (id && id !== "hero") {
            setActiveSection(id);
          } else if (id === "hero") {
            setActiveSection("");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const themeClasses = {
    bg: theme === "light" ? "bg-white" : "bg-black",
    text: theme === "light" ? "text-black" : "text-white",
    fill: theme === "light" ? "white" : "black",
    logo: theme === "light" ? "text-white" : "text-black",
    switcherBg: theme === "light" ? "bg-white" : "bg-black",
    activeBtnBg: theme === "light" ? "bg-black" : "bg-white",
    activeBtnText: theme === "light" ? "text-white" : "text-black",
    overlayBg: theme === "light" ? "bg-white/95" : "bg-black/95",
  };

  const mobileThemeClasses = {
    logo: isOpen ? themeClasses.text : themeClasses.logo,
    burger: isOpen ? themeClasses.text : themeClasses.logo,
  };

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.services, href: "#services" },
    { label: t.projects, href: "#projects" },
    { label: t.blog, href: "#blog" },
    { label: t.faq, href: "#faq" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <div className="w-full h-[120px] md:h-[200px] fixed top-0 left-0 z-50 flex items-center justify-center transition-all duration-500">
      <Container>
        <div className="flex items-center justify-between relative z-60">
          <div
            className={`flex items-start justify-center font-bold text-2xl transition-colors duration-500 ${mobileThemeClasses.logo}`}
          >
            MAS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden min-[980px]:flex items-start justify-center ">
            {/* Left Wing (Flipped SVGR in LTR, Normal in RTL) */}
            <SVGR
              className={`${lang === "ar" ? "" : "scale-x-[-1]"} `}
              fill={themeClasses.fill}
            />

            {/* Center Content */}
            <div
              className={`flex relative z-20 items-center justify-center gap-8 ${themeClasses.bg} h-[51px] px-8  min-w-[600px]`}
            >
              <div className="flex items-center justify-between gap-8 h-full">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`${
                      activeSection === link.href.replace("#", "")
                        ? "text-yellow-500"
                        : themeClasses.text
                    } hover:text-yellow-500 font-bold text-sm transition-colors duration-500`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Wing (Normal in LTR, Flipped in RTL) */}
            <SVGR
              fill={themeClasses.fill}
              className={`${lang === "ar" ? "scale-x-[-1]" : ""} `}
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            {/* Language Switcher */}
            <div
              className={`hidden md:flex items-center ${themeClasses.switcherBg} rounded-full p-1 shadow-md gap-1 transition-all duration-500`}
            >
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  lang === "en"
                    ? `${themeClasses.activeBtnBg} ${themeClasses.activeBtnText} shadow-sm`
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  lang === "ar"
                    ? `${themeClasses.activeBtnBg} ${themeClasses.activeBtnText} shadow-sm`
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                AR
              </button>
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`min-[980px]:hidden text-3xl transition-colors duration-500 ${mobileThemeClasses.burger}`}
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-50 ${themeClasses.overlayBg} backdrop-blur-md flex flex-col items-center justify-center min-[980px]:hidden`}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.label}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-2xl font-bold ${
                    activeSection === link.href.replace("#", "")
                      ? "text-yellow-500"
                      : themeClasses.text
                  } hover:text-yellow-500 transition-colors duration-300`}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Mobile Language Switcher */}
              <div
                className={`flex mt-8 items-center ${themeClasses.switcherBg} rounded-full p-1 shadow-md gap-1 transition-all duration-500`}
              >
                <button
                  onClick={() => setLang("en")}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    lang === "en"
                      ? `${themeClasses.activeBtnBg} ${themeClasses.activeBtnText} shadow-sm`
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  ENG
                </button>
                <button
                  onClick={() => setLang("ar")}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    lang === "ar"
                      ? `${themeClasses.activeBtnBg} ${themeClasses.activeBtnText} shadow-sm`
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
