import React from "react";

const images = [
  "https://via.placeholder.com/1200x400?text=Sale+1",
  "https://via.placeholder.com/1200x400?text=Sale+2",
  "https://via.placeholder.com/1200x400?text=Sale+3",
];

export const Carousel = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex animate-slide">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`slide-${idx}`} className="w-full flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};
