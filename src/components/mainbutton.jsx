"use client";
import { useState } from "react";
import clsx from "clsx";
import { FaAnglesRight } from "react-icons/fa6";

const MainButton = ({
  text,
  textcolor,
  texthovercolor,
  buttoncolor,
  buttonhovercolor,
  backgroundcolor,
  iconcolor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex cursor-pointer z-10 items-center overflow-hidden justify-between gap-4 p-1 pr-9 rounded-full ${backgroundcolor} transition-all duration-300`}
    >
      <div
        className={`flex items-center gap-2 p-2 z-20 rounded-full ${buttoncolor}`}
      >
        <p
          className={clsx(
            "transition-all duration-300 relative z-20",
            isHovered ? texthovercolor : textcolor
          )}
        >
          {text}
        </p>

        <div
          style={{
            width: isHovered ? "100%" : "0",
          }}
          className={`absolute transition-all duration-300 top-0 left-0 w-0 h-full ${buttonhovercolor} z-10`}
        ></div>
      </div>
      <FaAnglesRight
        className={clsx(
          `w-5 h-5 z-20 absolute transition-all duration-300 ${iconcolor}`,
          isHovered ? "right-2 opacity-100" : "right-12 opacity-0"
        )}
      />

      <div
        className={clsx(
          `absolute z-20 transition-all duration-300 ${iconcolor}`,
          isHovered ? "translate-x-10 opacity-0" : "right-2 translate-x-0"
        )}
      >
        <FaAnglesRight className="w-5 h-5" />
      </div>
    </button>
  );
};

export default MainButton;
