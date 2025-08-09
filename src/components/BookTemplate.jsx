// FlipbookViewer.jsx
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FlipbookViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const booksArray = location.state?.booksArray || [];
  const bookTitle = location.state?.bookTitle || "Unknown Book";

  useEffect(() => {
    // Wait a bit for jQuery and flipBook to be fully ready
    const initFlipbook = () => {
      if (!window.$ || !window.$.fn.flipBook) {
        console.error('jQuery or flipBook not available');
        return;
      }

      if (booksArray.length > 0 && containerRef.current) {
        const pagesArray = booksArray.map((book, index) => ({
          src: book.content,
          thumb: book.content,
          title: `Page ${index + 1}`, // Fixed template literal
        }));

        // Initialize flipbook ONLY ONCE
        try {
          window.$(containerRef.current).flipBook({
            pages: pagesArray,
            lightBox: false,
            autoSize: false,
            height: fit,
            width: 800,
          });
        } catch (error) {
          console.error('FlipBook initialization error:', error);
        }
      }
    };

    // Small delay to ensure everything is loaded
    const timer = setTimeout(initFlipbook, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup
      if (containerRef.current && window.$ && window.$.fn.flipBook) {
        try {
          window.$(containerRef.current).flipBook("destroy");
        } catch (error) {
          console.error('FlipBook destroy error:', error);
        }
      }
    };
  }, [booksArray]);

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
    <div className="max-h-screen">
      <div ref={containerRef} className="w-full max-h-fit" />
    </div>
  );
};

export default FlipbookViewer;