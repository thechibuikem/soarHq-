import NavBar from "./NavBar";


const ElibraryHeroMainComponent = () => {
  return (
    <figure className="fade-in mx-[1rem] md:mx-[3rem] md:h-[45vh] lg:h-[80vh] md:rounded-md w-auto h-[50vh] bg-[#000000bb] bg-[url('https://uokpdllmsspezsqltpxj.supabase.co/storage/v1/object/sign/soar-hq-bucket/ElibraryBackground.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYWRmMGY1MS04ZDNiLTQ3OTgtYTg3NS0xZGIwMjMxZGNhNDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzb2FyLWhxLWJ1Y2tldC9FbGlicmFyeUJhY2tncm91bmQuanBnIiwiaWF0IjoxNzU1ODUyODE2LCJleHAiOjI4Mzk5OTU4NTI4MTZ9.4Eq59M7dSG5DgMktZNdwRrwoMI0KGlqbXpZAky6p6IY')] bg-cover bg-center bg-blend-darken rounded-md text-white flex flex-col justify-end mt-8 md:mt-12 lg:mt-16 mb-[1rem] sm:mb-0">
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
