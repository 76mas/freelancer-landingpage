import { useId } from "react";

const CustomShapeVideo = ({ src }) => {
  const clipId = useId();

  return (
    <div className="w-full h-[250px] md:h-[400px]">
      <svg width="0" height="0">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.002)"
              d="M40 0 H300 Q340 0 340 50 Q340 100 365 100 H460 Q500 100 500 140 V460 Q500 500 460 500 H200 Q160 500 160 450 Q160 400 135 400 H40 Q0 400 0 360 V40 Q0 0 40 0 Z"
            />
          </clipPath>
        </defs>
      </svg>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
        poster="https://images.unsplash.com/photo-1498409505433-aff66f7ba9e6?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CustomShapeVideo;
