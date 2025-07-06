import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import Slider from "react-slick";

// Make sure to import the required CSS (add these to your main CSS file or index.js)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// MeetOurTeam component
const MeetOurTeamCard = ({ name, image, role }) => {
  return (
    <figure className="md:max-w-[24rem] w-[18rem] mx-auto shrink-0 flex cursor-pointer flex-col h-[70vh] rounded-lg border border-[#2c2b2b34] transition-all duration-500 ease-in shadow-md">
      <div className="w-full h-[75%]">
        <img 
          src={image} 
          className="w-full h-full max-h-full object-cover bg-[#2c2b2b] rounded-t-lg" 
          alt={name} 
        />
      </div>
      <div className="flex flex-col justify-center items-center h-[25%] bg-[#d4af35] border-t border-[rgba(136,136,136,0.425)] rounded-b-lg">
        <h4 className="text-center text-[1.2rem] uppercase font-light">{name}</h4>
        <h3 className="text-center text-[1rem] uppercase font-light text-[#f2f3f7e5]">{role}</h3>
      </div>
    </figure>
  );
};

// Creating Meet our team Header component
const MeetOurHeader = () => {
  return (
    <div className="sm:text-[1.3rem] text-[1.2rem] tracking-[1px] font-normal text-[#2c2b2b] uppercase text-center">
      <h3>The WorkForce</h3>
    </div>
  );
};

// Full MeetOurTeam section component
const MeetOurTeamSection = () => {
  const [teamArray, setTeamArray] = useState([]);
  const [loading, setLoading] = useState(true);

  // Improved slider settings with responsive breakpoints
  const settings = {
    className: "center",
    cssEase: "linear",
    centerPadding: "20px", // Reduced padding
    slidesToShow: 3,
    speed: 1500,
    infinite: true,
    autoplay: true,
    centerMode: true,
    prevArrow: null,
    nextArrow: null,
    arrow:false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        }
      }
    ]
  };

  // Function that runs once on rendering testimonial section
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('workforce').select('*');

        if (error) {
          console.error("error fetching workforce members", error);
          return;
        }

        console.log(data, "the workforce");
        setTeamArray(data || []);
      } catch (error) {
        console.error("unexpected error", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTeamMembers();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section className="w-[80%] mx-auto h-fit bg-[#2c2b2b0b] border border-[#d4af375c] rounded overflow-hidden flex flex-col items-center justify-center gap-[3rem] pt-[3rem] pb-[4rem] mb-[8rem] max-[450px]:w-[90%] max-[450px]:gap-[2rem] max-[450px]:mb-0">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg animate-pulse">Loading Team Members...</div>
        </div>
      </section>
    );
  }

  // Show message if no team members
  if (!teamArray || teamArray.length === 0) {
    return (
      <section className="w-[80%] mx-auto h-fit bg-[#2c2b2b0b] border border-[#d4af375c] rounded overflow-hidden flex flex-col items-center justify-center gap-[3rem] pt-[3rem] pb-[4rem] mb-[8rem] max-[450px]:w-[90%] max-[450px]:gap-[2rem] max-[450px]:mb-0">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg text-gray-500">No team members available...</div>
        </div>
      </section>
    );
  }

  // Rendering the slides if meet our team cards are available
  return (
    <section className="w-[80%] mx-auto h-fit bg-[#2c2b2b0b] border border-[#d4af375c] rounded overflow-hidden flex flex-col items-center justify-center gap-[3rem] pt-[3rem] pb-[4rem] mb-[8rem] max-[450px]:w-[90%] max-[450px]:gap-[2rem] max-[450px]:mb-0">
      {/* Meet our team section starts */}
      <MeetOurHeader />
      
      {/* Simplified container structure */}
      <div className="w-full px-4" style={{
  '& .slick-prev': { display: 'none' },
  '& .slick-next': { display: 'none' }}}>
        <Slider {...settings}>
          {/* Mapping to create each team card inside the slider */}
          {teamArray.map((teamMember) => (
            <div key={teamMember.id} className="px-2">
              <MeetOurTeamCard
                name={teamMember.name}
                image={teamMember.image}
                role={teamMember.role}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;