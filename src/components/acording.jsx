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

export default function BasicAccordion() {
  const items = [
    {
      key: "1",
      ariaLabel: "Bedroom Makeover",
      title: "Bedroom Makeover",
      icon: <IoBedOutline className="text-xl" />,
      content:
        "Create your perfect retreat with new paint, quality flooring, built-in storage, and ambient lighting. We design comfortable, stylish bedrooms where you'll love waking up and unwinding after long days.",
    },
    {
      key: "2",
      ariaLabel: "Kitchen Renovation",
      title: "Kitchen Renovation",
      icon: <IoRestaurantOutline className="text-xl" />, // Close enough to fork/knife
      content:
        "Transform your kitchen into a culinary haven with modern appliances, custom cabinetry, and durable countertops. We create functional and beautiful spaces for cooking and entertaining.",
    },
    {
      key: "3",
      ariaLabel: "Bathroom Remodeling",
      title: "Bathroom Remodeling",
      icon: <BiBath className="text-xl" />,
      content:
        "Upgrade your bathroom with spa-like features, elegant fixtures, and efficient layouts. From master baths to powder rooms, we enhance comfort and value.",
    },
    {
      key: "4",
      ariaLabel: "Living Room Refresh",
      title: "Living Room Refresh",
      icon: <LuSofa className="text-xl" />,
      content:
        "Revitalize your living space with tailored furniture layouts, accent walls, and lighting solutions. We create inviting atmospheres for relaxation and social gatherings.",
    },
    {
      key: "5",
      ariaLabel: "Home Office Setup",
      title: "Home Office Setup",
      icon: <IoDesktopOutline className="text-xl" />,
      content:
        "Boost productivity with a custom home office designed for your workflow. We focus on ergonomics, lighting, and storage to create an inspiring workspace.",
    },
    {
      key: "6",
      ariaLabel: "Outdoor Patio Design",
      title: "Outdoor Patio Design",
      icon: <IoLeafOutline className="text-xl" />,
      content:
        "Extend your living space outdoors with a beautifully designed patio. We incorporate landscaping, seating, and lighting to create the perfect alfresco retreat.",
    },
  ];

  return (
    <Accordion
      variant="light"
      className="w-full flex flex-col gap-2"
      itemClasses={{
        base: "py-0 w-full",
        title: "font-normal text-md text-white",
        trigger:
          "px-2 py-4 data-[hover=true]:bg-default-100/10 rounded-lg h-14 flex items-center justify-between",
        indicator: "text-md text-white",
        content: "text-sm px-2 text-gray-400",
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
