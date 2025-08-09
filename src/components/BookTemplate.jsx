// FlipbookViewer.jsx
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const FlipbookViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null); //used to target dom elements

  // Get the array that was passed from the clicking component
  const booksArray = location.state?.booksArray || [];
  const bookTitle = location.state?.bookTitle || "Unknown Book";

  useEffect(() => {
    // This is my original logic converted to React
    if (booksArray.length > 0 && containerRef.current && window.$) {
      const pagesArray = booksArray.map((book) => ({
        src: book.content,
        thumb: book.content,
        title: `book.pageNumber`,
      }));

      // Initialize flipbook with options to disable overlay
      window.$(containerRef.current).flipBook({
        pages: pagesArray,
        lightBox: false, // Disable lightbox mode
        autoSize: false, // Don't auto-size to viewport
        height: 600, // Set specific height
        width: 800, // Set specific width
      });

      window.$(containerRef.current).flipBook({
        pages: pagesArray,
      }); //we are targetting the flipBook div and setting it's content to the Array

    }

    // Cleanup when component unmounts to avoid overstacking of flipbooks
    return () => {
      if (containerRef.current && window.$ && window.$.fn.flipBook) {
        window.$(containerRef.current).flipBook("destroy");
      }
    };
  }, [booksArray]);

  // Handle case where no data was passed
  if (!booksArray || booksArray.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">No book data found</h2>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (

      <div ref={containerRef} id="" className="w-full max-h-fit"/>

  );
};

export default FlipbookViewer;
