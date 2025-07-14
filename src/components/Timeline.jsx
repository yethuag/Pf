import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-neutral-700/50 shadow-2xl">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={images[currentSlide]}
            alt={`${title} - Image ${currentSlide + 1}`}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  slideIndex === currentSlide
                    ? "bg-purple-400 shadow-lg shadow-purple-400/50"
                    : "bg-neutral-600 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const sampleData = data;
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Experiences</h2>
      <div ref={ref} className="relative pb-20">
        {sampleData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-100">
                <h3 className="text-white drop-shadow-lg">{item.date}</h3>
                <h3 className="text-3xl text-neutral-200 drop-shadow-lg">
                  {item.title}
                </h3>
                <h3 className="text-3xl text-neutral-300 drop-shadow-lg">
                  {item.job}
                </h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-100 md:hidden">
                <h3 className="text-white drop-shadow-lg">{item.date}</h3>
                <h3 className="text-neutral-200 drop-shadow-lg">{item.job}</h3>
              </div>

              {/* Main content area */}
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-neutral-700/50 shadow-2xl">
                {/* Image positioned as a floating element within the first paragraph */}
                <div className="relative">
                  {item.images && item.images.length > 0 && (
                    <div className="float-right ml-6 mb-4 w-80 max-w-[45%] hidden md:block">
                      <ImageSlider images={item.images} title={item.title} />
                    </div>
                  )}

                  {item.contents.map((content, index) => (
                    <p
                      className="mb-4 font-normal text-neutral-100 leading-relaxed text-shadow-lg"
                      key={index}
                      style={{
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                        lineHeight: "1.6",
                      }}
                    >
                      {content}
                    </p>
                  ))}

                  {/* Mobile image slider - shown below text on small screens */}
                  {item.images && item.images.length > 0 && (
                    <div className="mt-4 md:hidden">
                      <ImageSlider images={item.images} title={item.title} />
                    </div>
                  )}

                  <div className="clear-both"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
