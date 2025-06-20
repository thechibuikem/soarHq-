import React, { useEffect,useState } from "react";
import { supabase } from "./supabase";//import the superbase object which serves as an API for my backend

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

// 3. Full testimonial carousel that we are exporting
const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([])//initializing my current testimonials array to be empty
  const [currentIndex, setCurrentIndex] = useState(0);

    const fetchTestimonials = async () =>{
    const {data,error} = await supabase.from('soar-hq-testimonials').select('*');//basically what this line says is wait for a response yeah, then my supabase API from the soar-hq-testimonial table; take all the columns. you would have two responses by default one set to null and one an actual value. but they can't be both null or both actual values. so basically you have just one response

    if (error){
      console.log('Error fetching',error)
    }else{
      setTestimonials(data)
      // console.log(testimonials)
    }
  }//function to fetch testimonials
  
  fetchTestimonials();//run the function to get rows from the supabase testimonials table 


  const goLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
        {testimonials.map((testimony, index) => (
          <TestimonialCard
            key={testimony.id}
            image={testimony.image}
            name={testimony.name}
            testimony={testimony.testimony}
            visible={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection