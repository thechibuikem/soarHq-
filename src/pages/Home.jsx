import { useState } from 'react';
import { useEffect } from 'react';
import Hero from '../components/Hero'
import VisionStatement from '../components/VisionStatement';
import TestimonialSection from '../components/testimonial';
import MeetOurTeamSection from '../components/MeetOurTeam';

const Home = () => {
    return(
        <>
        <Hero />
        <VisionStatement />
        <TestimonialSection />
        <MeetOurTeamSection />
        </>
    )
}

export default Home