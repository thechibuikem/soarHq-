import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ElibraryHeroSection from "../components/ElibraryHero";
import ElibraryBookDisplaySection from "../components/ElibraryBookDisplay";
import ElibraryBookHeader from "../components/ElibraryBookHeader";

const Elibrary = () => {
    return(
        <>
        <ElibraryHeroSection/>
        <ElibraryBookHeader/>
        <ElibraryBookDisplaySection/>
        <Footer/>
        </>
    )
}

export default Elibrary