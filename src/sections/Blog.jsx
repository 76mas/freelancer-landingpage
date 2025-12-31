"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Container from "@/components/Continor";
import CustomShapeImage from "@/components/CustomShapeImage";

const BackSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
    >
      <g>
        <path
          d="M 7.8 4.278 C 7.8 2.562 7.8 1.703 8.204 1.087 C 8.38 0.82 8.605 0.59 8.867 0.412 C 9.472 0 10.315 0 12 0 C 13.686 0 14.528 0 15.133 0.412 C 15.395 0.59 15.62 0.82 15.796 1.087 C 16.2 1.703 16.2 2.562 16.2 4.278 M 24 13.444 L 24 12.833 C 24 8.8 24 6.783 22.77 5.531 C 21.54 4.278 19.56 4.278 15.6 4.278 L 8.4 4.278 C 4.44 4.278 2.46 4.278 1.23 5.531 C 0 6.783 0 8.8 0 12.833 L 0 13.444 C 0 17.478 0 19.494 1.23 20.747 C 2.46 22 4.44 22 8.4 22 L 15.6 22 C 19.56 22 21.54 22 22.77 20.747 C 24 19.494 24 17.478 24 13.444 Z"
          fill="transparent"
          stroke="rgb(71, 71, 71)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></path>
        <path
          d="M 13.869 13.646 C 21.032 13.023 23.6 8.556 23.6 8.556 M 0.6 8.556 C 0.6 8.556 3.168 13.023 10.331 13.646 M 10.331 13.646 L 10.331 12.374 C 10.331 12.022 10.595 11.737 10.921 11.737 L 13.279 11.737 C 13.605 11.737 13.869 12.022 13.869 12.374 L 13.869 13.646 C 13.869 14.701 13.077 15.556 12.1 15.556 C 11.123 15.556 10.331 14.701 10.331 13.646 Z"
          fill="transparent"
          stroke="rgb(71, 71, 71)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></path>
      </g>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Blog = () => {
  const { lang } = useLanguage();
  const t = translations[lang].blog;
  const blogsData = translations[lang].blogsData;
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const blogs = blogsData.map((blog) => ({
    ...blog,
    image:
      blog.id === 1
        ? "https://plus.unsplash.com/premium_photo-1661963540233-94097ba21f27?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : blog.id === 2
        ? "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : "https://plus.unsplash.com/premium_photo-1733760124949-7d15ff2f677e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: () => <p>{blog.content}</p>,
    ctaText: t.readMore,
    ctaLink: "#",
  }));

  return (
    <section
      id="blog"
      data-bg="white"
      className="min-h-screen bg-white text-black w-full flex justify-center py-20"
    >
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-100 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="flex items-center text-gray-400 font-bold justify-center gap-2">
              <BackSvg />
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

          <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-20 place-items-center">
            {blogs.map((blog) => (
              <motion.div
                layoutId={`card-${blog.title}-${id}`}
                key={blog.id}
                onClick={() => setActive(blog)}
                className="flex relative w-full max-w-[350px] h-fit flex-col items-center justify-start gap-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full">
                  <motion.div layoutId={`image-${blog.title}-${id}`}>
                    <CustomShapeImage
                      src={blog.image}
                      width={350}
                      height={300}
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col items-center md:items-start justify-center w-full px-2">
                  <motion.h1
                    layoutId={`title-${blog.title}-${id}`}
                    className="text-xl font-bold line-clamp-1 text-center md:text-left"
                  >
                    {blog.title}
                  </motion.h1>
                  <motion.p
                    layoutId={`description-${blog.description}-${id}`}
                    className="text-gray-600 text-sm line-clamp-2 text-center md:text-left"
                  >
                    {blog.description}
                  </motion.p>
                </div>
                <div className="absolute top-4 left-4 p-2 px-4 bg-[#cc8f00] text-white text-xs font-bold rounded-full uppercase z-10">
                  {blog.category}
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
