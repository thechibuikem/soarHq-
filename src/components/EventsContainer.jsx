import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

// creating and passing props into event card
const EventCard = ({ image, title, description, date, time, location }) => {
  return (
    <figure className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-[30rem] max-h-[32rem] aspect-[2/3] transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md border-1 border-[#00000020]">
      {/* Image Section */}
      <div className="relative w-full pt-[56.25%]">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out hover:z-10 hover:h-[30rem] hover:max-h-[32rem]"
        />

      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 truncate">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-col gap-2 flex-grow">
          <div className="flex items-center text-sm">
            <i className="far fa-calendar text-gray-500 w-5 mr-2"></i>
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <i className="far fa-clock text-gray-500 w-5 mr-2"></i>
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <i className="fas fa-map-marker-alt text-gray-500 w-5 mr-2"></i>
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        <button className="w-full px-5 py-2 border border-gray-400 text-gray-700 rounded-md transition duration-300 hover:bg-[#d4af37] hover:text-white hover:border-white cursor-pointer">
          Register
        </button>
      </div>
    </figure>
  );
};
const EventsContainer = () => {
  const [loading, setLoading] = useState(true); //loading state to check if fetch is still on going or not
  const [eventsContainer, setEventsContainer] = useState([]);
  const [upcomingEventsContainer, setUpcomingEventsContainer] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      //we use try,catch,finally here because this code is very prone to crashing
      try {
        //the line that can most likely crash
        setLoading(true);
        const { data, error } = await supabase.from("EventsSoarHQ").select("*");
        setEventsContainer(data)
        if (error) {
          console.error(
            "Supabase encountered an error whilst fetching events: ",
            error
          );
          return;
        }

        // if (data) {
        //   data.forEach((i) => i.time);
        // }
      } catch (err) {
        //catch any high level errors, that's like the non-supabase errors
        console.error("Unexpected non-supabase error occurred: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  //initializing testimonial section
if (loading){
  return(
          <div className="slider-container flex justify-center items-center min-h-[400px]">
        <div className="text-lg animate-pulse">Loading Events...</div>
      </div>
  )
}

if (eventsContainer.length === 0){
  return(
          <div className="slider-container flex justify-center items-center min-h-[400px]">
        <div className="text-lg animate-pulse">No Events Available...</div>
      </div>
  )
}

  return (<section
  id="event-grid"
  className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 md:mx-[2rem] mt-16 md:mt-20 "
>
{eventsContainer.map((e)=><div className="mx-auto" key={e.id}>
  <EventCard
  image={e.Image}
  title={e.Name}
   description={e.Description}
time={e.Time}
date={e.Date}
    location={e.Location}
  />
</div>)}
  {/* All event cards will be added here */}
</section>
);
};

export default EventsContainer;
