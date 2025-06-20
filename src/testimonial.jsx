import React, { useState } from "react";

// 1. Slide data
const slideListFiller = [
  {
    id: 1,
    image: "images/testimonialImages/successNwakpa.webp",
    name: "Success Nwankpa",
    testimony: `I just concluded my discipleship call with the steward and it was truly transformative...
    `,
  },
  {
    id: 2,
    image: "images/testimonialImages/soarHq.webp",
    name: "Somtochukwu Okoroafor",
    testimony: `I just concluded my discipleship call with the steward and it was refreshing...`,
  },
  {
    id: 3,
    image: "images/testimonialImages/soarHq.webp",
    name: "Ngozichukwu Udoka",
    testimony: `I had my discipleship call with the steward about a week ago and I can say for a fact that I was blessed...`,
  },
];

// 2. One testimonial card
const TestimonialCard = ({ image, name, testimony, visible })=> {
  return (
    <figure
      className={`w-[75%] max-h-[70vh] outline-1 outline-[#d4af37f8]  rounded-md overflow-scroll shadow-md p-4 flex flex-col items-center absolute transition duration-200 ease-in-out 
        ${visible ? "flex" : "hidden"} 
      md:w-4/5 md:p-6 md:pb-24`}
    >
        {/* the image in the testimonial */}
      <div className="flex justify-center w-full md:min-w-[25%] md:mt-12">
        <img
          src={image}
          alt={name}
          className="w-20 aspect-square object-contain rounded-full border border-[#d4af37f8] my-6 md:w-32 md:my-12"
        />
      </div>

        {/* basically the name of the person giving the testimony and the testimony itself */}
      <div className="w-full flex flex-col items-center gap-2 px-2 md:w-[95%]  md:gap-6 md:px-0">
        <h3 className="text-xl font-light uppercase text-center mb-4 md:text-2xl md:mb-0">
          {name}
        </h3>
        <h4
          className="text-base leading-relaxed text-center w-[90%] mb-12 md:text-lg "
        //   set innerHTML
          dangerouslySetInnerHTML={{ __html: testimony }}
        />
      </div>
    </figure>
  );
}

// 3. Full slider section that we are exporting
const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + slideListFiller.length) % slideListFiller.length);
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev + 1) % slideListFiller.length);
  };

  return (
    <section
      id="testimonialSection"
      className="w-screen h-fit flex flex-col justify-center items-center relative mb-36 md:h-screen"
    >
      {/* Buttons */}
      <button
        onClick={goLeft}
        className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent cursor-pointer z-10 absolute left-0 top-1/2 -translate-y-[40%] md:w-16 md:h-16"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
          <path
            fill="#d4af3738"
            d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z"
          />
        </svg>
      </button>

      <button
        onClick={goRight}
        className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent cursor-pointer z-10 absolute right-0 top-1/2 -translate-y-[40%] md:w-16 md:h-16"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
          <path
            fill="#d4af3738"
            d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"
          />
        </svg>
      </button>

      {/* Slides */}
      <div className="w-full h-[75vh] flex items-center justify-center relative md:h-screen">
        {slideListFiller.map((slide, index) => (
          <TestimonialCard
            key={slide.id}
            image={slide.image}
            name={slide.name}
            testimony={slide.testimony}
            visible={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection