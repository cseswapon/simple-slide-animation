import { useState, useEffect } from "react";

const sliderData = [
  {
    id: 1,
    imgSrc: "https://via.placeholder.com/300/FF0000",
    title: "Slide 1",
    description: "Description for Slide 1",
  },
  {
    id: 2,
    imgSrc: "https://via.placeholder.com/300/00FF00",
    title: "Slide 2",
    description: "Description for Slide 2",
  },
  {
    id: 3,
    imgSrc: "https://via.placeholder.com/300/0000FF",
    title: "Slide 3",
    description: "Description for Slide 3",
  },
];

const SLIDE_WIDTH = 300;
const SLIDE_MARGIN = 16;
const SCROLL_DURATION = 10; 
export default function OurConcert() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = sliderData.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
    }, SCROLL_DURATION * 1000);

    return () => clearInterval(slideInterval);
  }, [slidesCount]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesCount) % slidesCount);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
  };

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
        })()
    },[])
    
  return (
    <div className="container mx-auto my-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Marquee Slider</h1>
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-800 text-white"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-800 text-white"
          >
            {">"}
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white">View All</button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentSlide * (SLIDE_WIDTH + SLIDE_MARGIN)
            }px)`,
          }}
        >
          {sliderData.concat(sliderData).map((item) => (
            <div key={item.id} className="inline-block w-[300px] mr-4 group">
              <div className="relative h-[200px] bg-black overflow-hidden group-hover:bg-opacity-0 transition-opacity duration-300">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-0 flex flex-col justify-center items-start p-4 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-400">
                    {item.title}
                  </h3>
                  <p className="text-white group-hover:text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flex {
          display: flex;
        }
        .transition-transform {
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
