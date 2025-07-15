import Hero from '../components/Hero'
import VisionStatement from '../components/VisionStatement';
import TestimonialSection from '../components/testimonial';
import MeetOurTeamSection from '../components/MeetOurTeam';
import MissionSection from '../components/Mission';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <>
        <Hero />
        <VisionStatement />
        <TestimonialSection />
        <MeetOurTeamSection />
        <MissionSection />
        <Footer />
        </>
    )
}

export default Home