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
        src={"/demo.mp4"}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      />
    </div>
  );
};

export default CustomShapeVideo;
