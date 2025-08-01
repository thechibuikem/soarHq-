import { useState } from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      id="nav-bar"
      className="bg-[#fcfbfa] flex justify-between items-center px-[2rem] py-1 w-full md:px-[3rem]"
    >
      {/* logo on navBar */}
      <div className="">
        <img
          id="logo"
          src="../images/SoarLogo.webp"
          alt="soar logo"
          className="w-[4rem] md:w-[5rem]"
        />
      </div>

      {/* navBar list of links */}
      <div className="hidden md:flex ">
        <ul className="flex items-center md:gap-x-[3rem] text-md capitalize">
          {/* home */}
          <li>
            <Link
              to="/"
              id="g2-1"
              className="text-base no-underline capitalize text-[#2c2b2b] transition duration-500 ease-in-out"
            >
              home
            </Link>
          </li>

          {/* about us */}
          <li>
            <a
              href="#mission"
              id="g2-2"
              className="text-base no-underline capitalize text-[#2c2b2b] transition duration-500 ease-in-out"
            >
              about
            </a>
          </li>

          {/* meet our team link */}
          <li>
            <a
              href="#meetOurTeam"
              className="text-base no-underline capitalize text-[#2c2b2b] transition duration-500 ease-in-out"
            >
              the workforce
            </a>
          </li>

          {/* coaching plans */}
          <li>
            <a
              href="#"
              id="g2-3"
              className="text-base no-underline capitalize text-[#2c2b2b] transition duration-500 ease-in-out"
            >
              Discipleship plans
            </a>
          </li>

          {/* group to hide Elibrary, Light Podcast and Events in navbar */}
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 48 48"
              className="see-on-hover cursor-pointer relative"
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
            <figure className="seen-on-hovered flex flex-col flex-start w-[12vw] gap-2 p-4 absolute translate-y-[-10%] right-2 z-5 bg-[#fcfbfa] rounded-sm shadow-md opacity-0 invisible transition-all duration-500 ease-in-out">
              {/* Digital library */}
              <li>
                <Link
                  to="/Elibrary"
                  id="g2-4"
                  className="text-base no-underline capitalize text-[#2c2b2b] transition duration-500 ease-in-out"
                >
                  Digital Library
                </Link>
              </li>

              {/* other */}
              <li>
                <a
                  href="https://open.spotify.com/show/53QIPqFtvF2BFqNV8pn9vd?si=00cb28e4627d48f8"
                  id="g2-4"
                  className="text-base no-underline capitalize text-[#2c2b2b] transition duration-500 ease-in-out"
                  target="_blank"
                >
                  Light Podcast
                </a>
              </li>

              {/* events */}
              <li>
                <Link
                  to="/Events"
                  id="g2-4"
                  className="text-base no-underline capitalize text-[#2c2b2b] transition duration-500 ease-in-out"
                >
                  Events
                </Link>
              </li>
            </figure>
          </li>
        </ul>
      </div>

      {/* navBar hamburger icon */}
      <Hamburger />

      {/* main navBar stops */}
    </nav>
  );
};

export default NavBar;
