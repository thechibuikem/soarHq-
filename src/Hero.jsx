const NavBar = () =>{
return(
    <nav id="nav-bar" className="bg-[#fcfbfa] flex justify-between px-[2rem] w-screen">
        {/* logo on navBar */}
        <div className="">
          <img id="logo" src="./images/SoarLogo.png" alt="soar logo" className="w-[4rem]" />
          {/* <img id="logo" src="images/SOAR HQLOGO-A PNG.png" alt=""> */}
        </div>

        {/* navBar list of links */}
        <div className="hidden md:flex">
          <ul className="flex">
            {/* home */}
            <li>
              <a href="#heroSection" id="g2-1" class="grp2-member">home</a>
            </li>

            {/* about us */}
            <li>
              <a href="#mission" id="g2-2" class="grp2-member">about</a>
            </li>

            {/* meet our team link */}
            <li>
              <a href="#meetOurTeam" class="grp2-member">the workforce</a>
            </li>

            {/* coaching plans */}
            <li>
              <a href="comingSoon.html" id="g2-3" class="grp2-member">Discipleship plans</a>
            </li>

            {/* group to hide Elibrary, Light Podcast and Events in navbar */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 48 48"
                className="see-on-hover"
              >
                <path
                  fill="none"
                  stroke="#2c2b2b"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M36 18L24 30L12 18"
                />
              </svg>

              {/* the extras */}
              <figure className="seen-on-hovered flex flex-col flex-start w-[12vw] gap-2 p-4 absolute translate-y-[20%] z-5 bg-[#fcfbfa] rounded-sm shadow-md opacity-0 invisible transition-all duration-500 ease-in-out ">
                {/* Digital library */}
                <li>
                  <a href="elibrary.html" id="g2-4" class="grp2-member">
                    Digital Library
                  </a>
                </li>

                {/* other */}
                <li>
                  <a
                    href="https://open.spotify.com/show/53QIPqFtvF2BFqNV8pn9vd?si=00cb28e4627d48f8"
                    id="g2-4"
                    class="grp2-member"
                    target="_blank"
                  >
                    Light Podcast
                  </a>
                </li>

                {/* events */}
                <li>
                  <a href="upcomingEvents.html" id="g2-4" class="grp2-member">
                    Events
                  </a>
                </li>
              </figure>
            </li>
          </ul>
        </div>

        {/* navBar hamburger icon */}
        <button id="inviNav" className="md:hidden cursor-pointer">
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

        {/* main navBar stops */}
      </nav>
)
}

const HamBurgerNav = () =>{
      <nav id="navBarRight" class="navBarRightStyle">
        <div class="rightNavBarGrp1">
          <img src="images/SOAR HQLOGO-A PNG.png" alt="" />
        </div>
        <div class="rightNavBarGrp2">
          <ul>
            {/* hamburger nav bar home */}
            <li>
              <a href="#heroSection">home</a>
            </li>

            {/* hamburger nav bar about */}
            <li>
              <a href="#moreAboutSection">About</a>
            </li>

            {/* hamburger nav bar coaching plans */}
            <li>
              <a href="#meetOurTeam">The WorkForce</a>
            </li>

            {/* hamburger nav bar elibrary */}
            <li>
              <a target="_blank" href="elibrary.html">Digital Library</a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/show/53QIPqFtvF2BFqNV8pn9vd?si=00cb28e4627d48f8"
              >
                Light Podcast
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="upcomingEvents.html"
              >
                Events
              </a>
            </li>
          </ul>
        </div>
        <button id="cancel" class="rightNavBarGrp3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
          >
            <path
              fill="#dbdada"
              d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
            />
          </svg>
        </button>
      </nav>
}


const Hero = () => {
  return (
    <section id="heroSection">
      {/* nav bar starts */}
      {/* top nav bar */}
      <NavBar />

      {/* hamburger nav bar */}


      {/* reminant of hero section */}
      <div className=" max-h-fit bg-[url('.`/images/soarbackground.webp')] bg-cover bg-center bg-[#0000008f] bg-blend-darken">
        <div id="remHeroText" className="w-[60%] min-w-[80%] pt-[6rem] mx-auto font-extrabold tracking-[2px] leading-[1.6] text-5xl text-center text-[#fcfbfa]">
          <div class="remHeroText1">
            <span className="text-[#d4af35]"> Discipling </span>
            <span class="span2"> Nations </span>
          </div>
          <div class="remHeroText2">
            {/* <br/> */}
            For Excellence And Dominion
          </div>
        </div>

        <div id="discoverXlearnmore" className=" flex flex-col w-screen  h-fit py-[4rem] item-center justify-center md:pt-[6rem]">
          <button
            id="discover" className="md:text-2xl text-xl text-[#f2f3f7]  max-w-[80%] w-[80%] bg-[#d4af35] border-1 border-[#f2f3f7] mx-auto py-4  transition-all duration-500 ease-in-out uppercase leading-[1.4]"
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
