"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { IoChevronForward } from "react-icons/io5";

export default function AcordingFq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
      <AccordionItem
        key="1"
        aria-label="What is the refund policy?"
        title="What is the refund policy?"
        indicator={<IoChevronForward size={18} />}
      >
        {defaultContent}
      </AccordionItem>

      <AccordionItem
        key="4"
        aria-label="What is the refund policy?"
        title="What is the refund policy?"
        indicator={<IoChevronForward size={18} />}
      >
        {defaultContent}
      </AccordionItem>

      <AccordionItem
        key="6"
        aria-label="What is the refund policy?"
        title="What is the refund policy?"
        indicator={<IoChevronForward size={18} />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="How do I track my order?"
        title="How do I track my order?"
        indicator={<IoChevronForward size={18} />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Can I change my subscription plan?"
        title="Can I change my subscription plan?"
        indicator={<IoChevronForward size={18} />}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
