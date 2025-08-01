import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import { useNavigate } from "react-router-dom";


//function to get the Array that is needed
const handleBookClick = async (page_Id) => {
  // Extract book title from page_id (remove "_page_0" part)
  const bookTitle = page_Id.replace(/_.*/, "");

  // Fetch all pages of this book
  const { data: requiredPages } = await supabase
    .from("Books-SoarHQ")
    .select("*")
    .eq("book_title", bookTitle)
    .order("page_number", { ascending: true });

  console.log(requiredPages, bookTitle);
  return requiredPages;

  // Navigate to flipbook component with the pages data
      navigate('/flipbook', { 
        state: { 
          booksArray: requiredPages,  // This is your pages array
          bookTitle: bookTitle        // Also pass the book title
        } 
      });

};

const ElibraryHeader = () => {
  return <h3></h3>;
};

const ElibraryBook = () => {
  return (
    <>
      <figure className="bg-[url()]"></figure>
      <h4></h4>
    </>
  );
};

// Full MeetOurTeam section component
const ElibraryBookDisplaySection = () => {
  const [booksArray, setBooksArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  // Function that runs once on rendering testimonial section
  useEffect(() => {
    const fetchElibraryBooks = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("Books-Index").select("*");

        if (error) {
          console.error("error fetching book front pages", error);
          return;
        }

        console.log(data, "the book front pages");
        setBooksArray(data || []);
      } catch (error) {
        console.error("unexpected error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchElibraryBooks();
  }, []);

  // Show loading state
  if (loading) {
    return <div className="text-lg animate-pulse">Loading Books...</div>;
  }

  // Show message if no team members
  if (!booksArray || booksArray.length === 0) {
    return <>no books available</>;
  }
  /////////////////////// rember to remove experimental padding below ////////

  // Rendering the slides if meet our team cards are available
  return (
    <figure className="mx-[1rem] md:mx-[3rem] h-fit md:h-[45vh md:rounded-md w-auto bg-[#00000031] bg-cover text-white flex flex-col sm:flex-row justify-end mt-8 md:mt-12 lg:mt-16 mb-[-0.9rem] sm:mb-0">
      {/* container of books on the book section in the elibrary */}
      <section className="w-[80%] md:w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-[1rem] my-[1rem] md:mb-[3rem] md:pt-[3rem] md:mx-[3rem] md:gap-y-4">
        {/* returning the books themselves */}
        {booksArray.map((book, index) => (
          <div key={index} className="w-fit">
            {/* Dynamically apply background image */}
            <figure
              className="h-[20vh] w-[8rem] sm:h-[40vh] sm:w-[15rem] bg-contain bg-center bg-no-repeat rounded-sm bg-[#fff]"
              style={{ backgroundImage: `url(${book.content})` }}
            ></figure>

            {/* Book Title I'm getting this by performing regex on my oage id*/}

            {/* this h4 is what would route to my flipbook jsx */}
            <h4
              className="text-lg font-semibold mt-2 cursor-pointer text-shadow-md"
              onClick={() => handleBookClick(book.page_id)}
            >
              {book.page_id.replace(/_.*/, "")}
            </h4>
          </div>
        ))}
      </section>
    </figure>
  );
};

export default ElibraryBookDisplaySection;
