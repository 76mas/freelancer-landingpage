"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import {
  IoBedOutline,
  IoRestaurantOutline,
  IoDesktopOutline,
  IoLeafOutline,
  IoAdd,
} from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { LuSofa } from "react-icons/lu";
import clsx from "clsx";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function BasicAccordion() {
  const { lang } = useLanguage();
  const t = translations[lang].accordion;

  const icons = [
    <IoBedOutline className="text-xl" />,
    <IoRestaurantOutline className="text-xl" />,
    <BiBath className="text-xl" />,
    <LuSofa className="text-xl" />,
    <IoDesktopOutline className="text-xl" />,
    <IoLeafOutline className="text-xl" />,
  ];

  const items = t.map((item, index) => ({
    key: (index + 1).toString(),
    ariaLabel: item.title,
    title: item.title,
    icon: icons[index],
    content: item.content,
  }));

  return (
    <Accordion
      variant="light"
      showDivider={true}
      className="w-full"
      itemClasses={{
        base: "py-0 w-full border-b border-white",
        title: "font-normal text-md text-white",
        trigger:
          "px-2 py-4 data-[hover=true]:bg-default-100/10 h-14 flex items-center justify-between",
        indicator: "text-md text-white",
        content: "text-sm px-2 text-gray-400 pb-4",
      }}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.ariaLabel}
          indicator={({ isOpen }) => (
            <IoAdd
              className={clsx(
                `text-white text-xl transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-[#966106] " : ""
                }`
              )}
            />
          )}
          title={
            <div className="flex items-center gap-3">
              <span className="text-white text-xl">{item.icon}</span>
              <span>{item.title}</span>
            </div>
          }
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
