const HamBurgerNav = () =>{
      <nav id="navBarRight" class="navBarRightStyle">
        <div class="rightNavBarGrp1">
          <img src="../images/SoarLogo.webp" alt="" />
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

export default HamBurgerNav