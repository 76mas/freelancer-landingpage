"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { IoChevronForward } from "react-icons/io5";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function AcordingFq() {
  const { lang } = useLanguage();
  const t = translations[lang].faqs;

  return (
    <Accordion
      variant="splitted"
      itemClasses={{
        base: "group !bg-[#f6f5fa] !shadow-none !rounded-xl mb-3 border-none",
        title: "text-black font-semibold text-base",
        trigger: "px-5 py-3 flex items-center justify-between",
        content: "px-5 pb-5 text-neutral-500 text-sm leading-relaxed",
        indicator:
          "text-neutral-400 group-data-[open=true]:rotate-90 transition-transform duration-300",
      }}
    >
      {t.map((faq, index) => (
        <AccordionItem
          key={index}
          aria-label={faq.question}
          title={faq.question}
          indicator={<IoChevronForward size={18} />}
        >
          {faq.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
