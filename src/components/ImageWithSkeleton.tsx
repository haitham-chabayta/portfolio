import React, { useState } from "react";

const ImageWithSkeleton: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        className={`skeleton rounded-md absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-[#e0e0e0] via-[#dbdbdb] to-[#dbdbdb] transition-opacity duration-300 pointer-events-noneskeleton rounded-md absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-[#e0e0e0] via-[#dbdbdb] to-[#dbdbdb] transition-opacity duration-300 pointer-events-none ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={loaded ? "opacity-100" : "opacity-0"}
      />
    </>
  );
};

export default ImageWithSkeleton;
