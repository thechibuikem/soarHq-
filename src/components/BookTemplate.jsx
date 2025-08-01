// FlipbookViewer.jsx
import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FlipbookViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Get the array that was passed from the clicking component
  const booksArray = location.state?.booksArray || [];
  const bookTitle = location.state?.bookTitle || 'Unknown Book';

  useEffect(() => {
    // This is your original logic converted to React
    if (booksArray.length > 0 && containerRef.current && window.$) {
      const pagesArray = booksArray.map(book =>({
          src: book.content,     // No backticks - direct access
          thumb: book.content,   // Using same image for thumbnail
          title: `book.pageNumber`,
      }))

      // Initialize flipbook - exactly like your original code
      window.$(containerRef.current).flipBook({
        pages: pagesArray,
      });

      console.log('Flipbook initialized with pages:', pagesArray);
    }

    // Cleanup when component unmounts
    return () => {
      if (containerRef.current && window.$ && window.$.fn.flipBook) {
        window.$(containerRef.current).flipBook('destroy');
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
    <div className="min-h-screen bg-gray-900">
      {/* Header with book title and back button */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{bookTitle}</h1>
        <button 
          onClick={() => navigate(-1)}
          className="text-white hover:text-gray-300 text-xl"
        >
          ← Back to Library
        </button>
      </div>

      {/* This div is equivalent to your <div id="container"></div> */}
      <div 
        ref={containerRef} 
        id="flipbook-container"
        className="w-full h-screen"
      />
    </div>
  );
};

export default FlipbookViewer;