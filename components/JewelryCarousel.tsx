import React, { useState, useEffect } from 'react';

const images = [
  "/featured-jewelry-1.png", // User uploaded image
  "https://loremflickr.com/450/350/jewelry,diamond?lock=10",
  "https://loremflickr.com/450/350/jewelry,gold?lock=11",
  "https://loremflickr.com/450/350/jewelry,platinum?lock=12",
  "https://loremflickr.com/450/350/jewelry,necklace?lock=13",
  "https://loremflickr.com/450/350/jewelry,ring?lock=14",
  "https://loremflickr.com/450/350/jewelry,luxury?lock=15",
  "https://loremflickr.com/450/350/jewelry,fashion?lock=16",
];

export const JewelryCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5s
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-slate mb-3 block">
          Exclusive Gallery
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-luxury-black">
          Masterpiece <span className="italic text-luxury-silver">Showcase</span>
        </h2>
      </div>

      <div
        className="relative w-full h-[500px] flex justify-center items-center perspective-1000"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((src, index) => {
          let offset = index - activeIndex;
          if (offset > images.length / 2) offset -= images.length;
          if (offset < -images.length / 2) offset += images.length;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const isVisible = absOffset <= 2;

          const translateX = offset * 140; // Increased spacing
          const scale = 1 - absOffset * 0.2;
          const zIndex = 10 - absOffset;
          const opacity = absOffset > 2 ? 0 : 1;
          const rotateY = offset * -15; // Increased rotation for more 3D feel

          return (
            <div
              key={index}
              className="card absolute top-1/2 left-1/2 transition-all duration-700 ease-out"
              style={{
                width: '450px',
                height: '350px',
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                boxShadow: isActive ? '0 30px 60px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                zIndex: zIndex,
                opacity: opacity,
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                pointerEvents: isVisible ? 'auto' : 'none',
                filter: isActive ? 'brightness(1.05)' : 'brightness(0.9) blur(1px)',
              }}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest mb-1 block">Collection 2024</span>
                  <h3 className="font-serif text-xl">Luxe Piece #{index + 1}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-8">
        <button onClick={handlePrev} className="p-4 rounded-full border border-luxury-silver/30 hover:bg-luxury-black hover:text-white transition-all group">
          <span className="group-hover:-translate-x-1 transition-transform block">←</span>
        </button>
        <button onClick={handleNext} className="p-4 rounded-full border border-luxury-silver/30 hover:bg-luxury-black hover:text-white transition-all group">
          <span className="group-hover:translate-x-1 transition-transform block">→</span>
        </button>
      </div>
    </section>
  );
};
