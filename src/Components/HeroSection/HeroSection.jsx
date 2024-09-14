import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";

import {} from 'swiper'
import { useEffect } from "react";
const HeroSection = () => {
  const slides = [
    {
      imageSrc: "https://swiperjs.com/demos/images/nature-1.jpg",
      title: "Slide Title 1",
      description:
        "Description for slide 1. Include any relevant information or a call to action.",
    },
    {
      imageSrc: "https://swiperjs.com/demos/images/nature-2.jpg",
      title: "Slide Title 2",
      description:
        "Description for slide 2. Include any relevant information or a call to action.",
    },
  ];
    
    useEffect(() => {
      (async function () {
        const response = await fetch(
          "https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=test&get_section=yes&image=yes&post=yes&file=yes&gallery=yes"
        );
        const data = await response.json();
        console.log(
          data?.data?.sections,
          data?.data?.sections?.sections_data?.template
        );
      })();
    }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={slide.imageSrc}
              alt={slide.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white">
              <div className="relative z-10 p-6">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-8">{slide.description}</p>
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg">
                  Action Button
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
