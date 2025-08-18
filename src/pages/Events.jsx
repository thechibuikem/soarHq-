// This is where all your original data fetching logic goes!

import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import EventHeader from "../components/EventHeader";
import EventsContainer from "../components/EventsContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"

const EventsPage = () => {
  // Move all your state from EventsContainer here
  const [loading, setLoading] = useState(true);
  const [eventsContainer, setEventsContainer] = useState([]);
  const [upcomingEventsContainer, setUpcomingEventsContainer] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(false); // NEW: toggle state

  useEffect(() => {
    const fetchEvents = async () => {
      // Copy your EXACT fetchEvents function here
      try {
        setLoading(true);
        const { data, error } = await supabase.from("EventsSoarHQ").select("*");

        if (data) {
          const formattedEvents = data.map((event) => {
            const rawDate = new Date(event.Date);

            const timeObj = new Date(`1970-01-01T${event.Time}`);
            const formattedTime = timeObj.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });

            const dateObj = new Date(event.Date);
            const formattedDate = dateObj.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            return {
              ...event,
              RawDate: rawDate,
              Time: formattedTime,
              Date: formattedDate,
            };
          });

          const isUpcoming = (event) => {
            const Today = new Date();
            const EventDate = new Date(event.RawDate);
            Today.setHours(0, 0, 0, 0);
            EventDate.setHours(0, 0, 0, 0);

            let result = EventDate > Today;
            return result;
          };

          setEventsContainer(formattedEvents);
          setUpcomingEventsContainer(formattedEvents.filter(isUpcoming));

          console.log("upcoming Events: ", formattedEvents.filter(isUpcoming));
        }

        if (error) {
          console.error(
            "Supabase encountered an error whilst fetching events: ",
            error
          );
          return;
        }
      } catch (err) {
        console.error("Unexpected non-supabase error occurred: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // NEW: Toggle function
  const toggleView = () => {
    setShowUpcoming(!showUpcoming);
  };

  // NEW: Determine which events to show
  const eventsToShow = showUpcoming ? upcomingEventsContainer : eventsContainer;

  return (
    <div>

      <NavBar/>
      <EventHeader 
        showUpcoming={showUpcoming} 
        toggleView={toggleView}
        upcomingCount={upcomingEventsContainer.length}
      />
      <EventsContainer 
        eventsToShow={eventsToShow}
        loading={loading}
        showUpcoming={showUpcoming}
      />
      <Footer/>
    </div>
  );
};

export default EventsPage;