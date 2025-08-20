import Hero from "../components/Hero";
import TestimonialSection from "../components/testimonial";
import MeetOurTeamSection from "../components/MeetOurTeam";
import MissionSection from "../components/Mission";
import Footer from "../components/Footer";
import SoarVision from "../components/SoarVision";

const Home = () => {
  return (
    <>
      <Hero />
      <SoarVision/>
      <TestimonialSection />
      <MeetOurTeamSection />
      <MissionSection />
      <Footer />
    </>
  );
};

export default Home;
