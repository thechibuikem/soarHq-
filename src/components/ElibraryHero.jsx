import NavBar from "./NavBar";


const ElibraryHeroMainComponent = () => {
  return (
    <figure className="fade-in mx-[1rem] md:mx-[3rem] md:h-[45vh] lg:h-[80vh] md:rounded-md w-auto h-[50vh] bg-[#000000bb] bg-[url('../images/ElibraryBackground.webp')] bg-cover bg-center bg-blend-darken rounded-md text-white flex flex-col justify-end mt-8 md:mt-12 lg:mt-16 mb-[-0.9rem] sm:mb-0">
      {/* group of texts on the intro section in the hero */}
      <section className="w-[80%] md:w-full flex flex-col mx-[1rem] mb-[1rem] md:mb-[3rem]  md:mx-[3rem] md:gap-y-4">
        <h3 className="uppercase text-[#ffffff60]">introducing</h3>
        <h1 className="text-3xl md:text-7xl font-bold">
          Soar HQ Digital Library
        </h1>
        <h2 className="md:w-[50%] text-[#ffffff770]">
          Soar HQ is a global nation of nation nurturers, dedicated to driving
          social impact for women through innovation, empowerment, and
          meaningful change.
        </h2>
      </section>
    </figure>
  );
};

const ElibraryHeroSection = () => {
  return (
    <section className="w-screen">
      <NavBar />
      <ElibraryHeroMainComponent />
    </section>
  );
};

export default ElibraryHeroSection;
