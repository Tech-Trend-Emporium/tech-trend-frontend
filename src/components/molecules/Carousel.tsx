import { Carousel } from "flowbite-react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const seeds = ["hero-a", "hero-b", "hero-c", "hero-d", "hero-e"]; // distinct images, stable each refresh
const carouselImages = seeds.map(
  (s) => `https://picsum.photos/seed/${s}/1600/900`
);

export function CarouselComponent() {
  return (
    // make the carousel full-bleed (fill viewport width) while keeping a fixed height
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <Carousel 
        leftControl={<CiCircleChevLeft className="text-white text-5xl dark:text-gray-400 dark:hover:text-gray-200 hover:scale-120 transition-transform hover:text-blue-200" />} 
        rightControl={<CiCircleChevRight className="text-white text-5xl dark:text-gray-400 dark:hover:text-gray-200 hover:scale-120 transition-transform hover:text-blue-200" />}
        slideInterval={2000}
      >
        {carouselImages.map((src, index) => (
          <div key={src} className="w-full h-full relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full brightness-95 dark:brightness-75"
              loading="lazy"
            />
            {/* subtle overlay to improve contrast for controls in dark mode */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
