import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const EventHeader = ()=>{
    return(
            <div className="flex flex-col mx-[2rem] md:flex-row md:justify-between md:items-center">
            <div className="header-content">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#1a1a1a]">
                All Events</h2>
            <p className="text-[#666] mb-5 md:mb-0"
>
              Join us at our upcoming events and connect with the community. 
            </p>
            </div>
            <button className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer transition-all duration-300 text-sm btn-back">View upcoming Events</button>
            </div>
    )
}

const Events = () => {
    return(
    <>
    <NavBar/>
    <EventHeader/>
    <Footer/>
    </>
    )
    
}

export default Events