import NavBar from '../components/NavBar'
import HamBurgerNavBar from '../components/HamBurgerNavBar'


const Hero = () => {
  return (
    <section id="heroSection" className="w-screen h-fit flex flex-col justify-between items-center bg-[#000000] overflow-hidden">
      {/* nav bar starts */}
      {/* top nav bar */}
      <NavBar />

      {/* hamburger nav bar */}
      <HamBurgerNavBar/>
      {/* reminant of hero section */}
      <div className=" h-fit w-full bg-[url('../images/soarbackground.webp')] bg-cover bg-center bg-[#0000008f] bg-blend-darken">
      {/*discipling nations for excellence and cominion on hero */}
        <div id="remHeroText" className="md:text-[5.2rem] md:px-[3rem] md:w-[100%] w-[60%] min-w-[80%] pt-[6rem] mx-auto tracking-[2px] leading-[1.6] text-5xl  text-center text-[#fcfbfa] font-['Poppins',sans-serif] font-normal">
          {/* group one(1) of text */}
          <div>
            <span className="text-[#d4af35]"> Discipling </span>
            <span> Nations </span>
          </div>
          {/* group two(2) of text*/}
          <div>
            For Excellence And Dominion
          </div>
        </div>

        <div id="discoverXlearnmore" className=" flex flex-col w-screen  h-fit py-[4rem] item-center justify-center md:pt-[6rem]">
          <button
            id="discover" className="md:text-2xl text-xl text-[#f2f3f7] max-w-[80%] w-[80%] md:w-fit md:px-12 bg-[#d4af35] border-1 border-[#f2f3f7] mx-auto py-4  transition-all duration-500 ease-in-out uppercase leading-[1.4] rounded-sm"
            onClick={() => window.location.href = `elibrary.html`}
          >
            Digital Library
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
