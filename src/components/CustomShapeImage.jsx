const CustomShapeImage = ({ src, width, height }) => {
  return (
    <div className={`w-[${width}px] h-[${height}px]`}>
      <svg width="0" height="0">
        <defs>
          <clipPath id="shape" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.002)"
              d="M40 0 
                    H300 
                    Q340 0 340 25 
                    Q340 50 365 50 
                    H460 
                    Q500 50 500 90 
                    V460 
                    Q500 500 460 500 
                    H200 
                    Q160 500 160 475 
                    Q160 450 135 450 
                    H40 
                    Q0 450 0 410 
                    V40 
                    Q0 0 40 0 
                    Z"
            />
          </clipPath>
        </defs>
      </svg>

      <img
        src={src}
        className="w-full h-full object-cover"
        style={{ clipPath: "url(#shape)" }}
      />
    </div>
  );
};

export default CustomShapeImage;
