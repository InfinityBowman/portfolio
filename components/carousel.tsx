import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import CarouselCard from "@/components/ui/carousel-card";

const items = [
  {
    image: "/library-guide-images/SA-Discover.png",
    title: "BBCSO Discover",
    description: "Limited full orchestra library that works as its own plugin.",
    link: "https://www.spitfireaudio.com/bbc-symphony-orchestra-discover",
  },
  {
    image: "/library-guide-images/SA-Labs.png",
    title: "Spitfire Audio Labs",
    description: "A vast collection of instruments and sounds in its own plugin.",
    link: "https://labs.spitfireaudio.com/",
  },
  {
    image: "/library-guide-images/Komplete-Start.png",
    title: "Komplete Start",
    description:
      "Komplete start is a free collection on instruments and sounds that you can get by downloading Kontakt Player.",
    link: "https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/",
  },
  {
    image: "/library-guide-images/Heavyocity-Foundations.jpg",
    title: "Heavyocity Foundations",
    description: "Heavyocity is so good. One of the rare free good choirs.",
    link: "https://heavyocity.com/product-category/foundations/",
  },
  {
    image: "/library-guide-images/OT-Sinefactory.jpg",
    title: "SINE Factory",
    description: "An amazing suite of free instruments similar to Labs and doesn't use Kontakt at all.",
    link: "https://www.orchestraltools.com/sinefactory",
  },
  {
    image: "/library-guide-images/Impact-Soundworks.png",
    title: "Impact Soundworks Free",
    description: "Guitars, strings, sketching tools, and more.",
    link: "https://impactsoundworks.com/products/category/free-instruments/",
  },
  {
    image: "/library-guide-images/Fracture-Sounds-Blueprints.webp",
    title: "Fracture Sounds' Blueprint Series",
    description: "Another huge suite of free Kontakt libraries.",
    link: "https://fracturesounds.com/product-category/free/",
  },
  {
    image: "/library-guide-images/Westwood-Roots.jpg",
    title: "Westwood Instruments' Roots",
    description: "Westwood has a very unique and raw sound.",
    link: "https://www.westwoodinstruments.com/roots/",
  },
  {
    image: "/library-guide-images/Project-Sam-Free.png",
    title: "Project Sam Free Orchestra",
    description: "Project Sam makes the most user friendly Kontakt libraries.",
    link: "https://projectsam.com/series/the-free-orchestra",
  },
];

const SwipeToSlide: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="pb-5">
              <CarouselCard image={item.image} title={item.title} description={item.description} link={item.link} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwipeToSlide;
