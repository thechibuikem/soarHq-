import { useState } from "react";

// hamburger
const Hamburger = () => {
  const [seeSideNav, setSeeSideNav] = useState(false);

  return (
    <>
      <button
        onClick={() => setSeeSideNav(true)}
        className="md:hidden cursor-pointer"
      >
        {/* the hamburgers button itself */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="#d4af35"
            fillRule="evenodd"
            d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75m0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8M2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* the right hamburger */}
      <div
        className={`h-screen w-screen backdrop-blur-md bg-white/10 border border-white/20 shadow-lg
   flex flex-col top-[0] fixed px-[2rem] py-[1rem] z-50 ring-1 ring-white/10 rounded-xl ${
     seeSideNav ? "flex" : "hidden"
   }`}
      >
        {/* the button */}
        <button
          onClick={() => setSeeSideNav(false)}
          className="fixed right-[4rem] cursor-pointer"
        >
          {/* element 1 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path
              fill="#d4af35"
              fillRule="evenodd"
              d="M3.22 3.22a.75.75 0 0 1 1.06 0L8 6.94l3.72-3.72a.75.75 0 1 1 1.06 1.06L9.06 8l3.72 3.72a.75.75 0 0 1-1.06 1.06L8 9.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06L6.94 8 3.22 4.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="bg-black/40 text-white mt-[4rem] mr-[2rem] px-[6rem] py-[2rem] flex flex-col justify-end self-end gap-y-[1rem] text-[1rem] rounded-md">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Stewards</a>
          <a href="">Discipleship Plans</a>
          <a href="">Digital Library</a>
          <a href="">Light Podcast</a>
          <a href="">Events</a>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
