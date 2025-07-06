import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for better control
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
    aria-label="Previous testimonial"
  >
<svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} viewBox="0 0 1024 1024">
  <g transform="scale(-1,1) translate(-1024,0)">
    <path
      fill=""
      d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
      className="hover:fill-[#d4af37] fill-[#d4af3738] transition-all duration-200"
    />
  </g>
</svg>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white w-12 h-12 flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer"
    aria-label="Next testimonial"
  >
<svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} viewBox="0 0 1024 1024">
<path fill="" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
className="hover:fill-[#d4af37]  fill-[#d4af3738] transition-all duration-200"
></path></svg>
  </button>
);

//Creating testimonial Header component
const TestimonialHeader = () => {
  return (
     <div className="sm:text-[1.3rem] text-[1.2rem] tracking-[1px] font-normal text-[#2c2b2b] uppercase text-center">
          <h3>Testimony from our Discipleship Calls</h3>
        </div>
  )
}

// Testimonial card component
const TestimonialCard = ({ image, name, testimony }) => {
  return (
    <figure className="w-[80%] max-h-[70vh] border border-[#d4af37f8] rounded-md overflow-y-auto shadow-md p-4 flex flex-col items-center transition duration-200 ease-in-out md:p-6 mx-auto">
      {/* The image in the testimonial */}
      <div className="flex justify-center w-full md:min-w-[25%] md:mt-12">
        <img
          src={image}
          alt={name}
          className="w-20 aspect-square object-cover rounded-full border border-[#d4af37f8] my-6 md:w-32 md:my-12"
        />
      </div>

      {/* Name and testimony */}
      <div className="w-full flex flex-col items-center gap-2 px-2 md:w-[95%] md:gap-6 md:px-0">
        <h3 className="text-xl font-light uppercase text-center mb-4 md:text-2xl md:mb-0">
          {name}
        </h3>
        <div
          className="text-base leading-relaxed text-center w-[90%] mb-12 md:text-lg"
          dangerouslySetInnerHTML={{ __html: testimony }}
        />
      </div>
    </figure>
  );
};

// Full testimonial carousel component
const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);


  // Carousel settings with custom arrows
  const settings = {
    dots: true,
    infinite: testimonials.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: testimonials.length > 1,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: testimonials.length > 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "slick-dots !bottom-[-2]  text-[#d4af37] ",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide arrows on mobile for better UX
          dots: true,
        }
      }
    ]
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('soar-hq-testimonials')
          .select('*');

        if (error) {
          console.error('Error fetching testimonials:', error);
          return;
        }

        console.log(data, "the testimonials");
        setTestimonials(data || []);
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);


  // Show loading state
  if (loading) {
    return (
      <div className="slider-container flex justify-center items-center min-h-[400px]">
        <div className="text-lg animate-pulse">Loading testimonials...</div>
      </div>
    );
  }

  // Show message if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="slider-container flex justify-center items-center min-h-[400px]">
        <div className="text-lg text-gray-500">No testimonials available.</div>
      </div>
    );
  }

  // if the testimonials are available, render the freaking slide
  return (
    <section>
    <TestimonialHeader/>
    <div className="px-4 py-8 pb-16 w-full">
        <Slider {...settings}>
          {testimonials.map((testimony) => (
            <div key={testimony.id}>
              <TestimonialCard
                image={testimony.image}
                name={testimony.name} 
                testimony={testimony.testimony}
              />
            </div>
          ))}
        </Slider>
    </div>
    </section>
  );
};

export default TestimonialSection;