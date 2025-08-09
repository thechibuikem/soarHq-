import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import { useNavigate } from "react-router-dom";

// Full MeetOurTeam section component
const ElibraryBookDisplaySection = () => {
  const [booksArray, setBooksArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ Keep this here

  // ✅ Move handleBookClick INSIDE the component
  const handleBookClick = async (page_Id) => {
    try {
      // Extract book title from page_id (remove "_page_0" part)
      const bookTitle = page_Id.replace(/_.*/, "");

      // Fetch all pages of this book
      const { data: requiredPages } = await supabase
        .from("Books-SoarHQ")
        .select("*")
        .eq("book_title", bookTitle)
        .order("page_number", { ascending: true });

      console.log(requiredPages, bookTitle);

      // ✅ Navigate immediately after fetching (remove the return statement)
      navigate('/flipbook', { 
        state: { 
          booksArray: requiredPages,  // This is your pages array
          bookTitle: bookTitle        // Also pass the book title
        } 
      });

    } catch (error) {
      console.error("Error fetching book pages:", error);
    }
  };

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
    return <div className="text-lg animate-pulse text-center mt-8 sm:mt-16">Loading Books...</div>;
  }

  // Show message if no books available
  if (!booksArray || booksArray.length === 0) {
    return <div className="text-lg animate-pulse text-center mt-8 sm:mt-16">no books available</div>;
  }

  // Rest of your JSX stays exactly the same...
  return (
    <figure className="mx-[1rem] md:mx-[3rem] h-fit md:h-[45vh md:rounded-md w-auto bg-[#00000031] bg-cover text-white flex flex-col sm:flex-row justify-end mt-8 md:mt-12 lg:mt-16 mb-[-0.9rem] sm:mb-0">
      <section className="w-[80%] md:w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-[1rem] my-[1rem] md:mb-[3rem] md:pt-[3rem] md:mx-[3rem] md:gap-y-4">
        {booksArray.map((book, index) => (
          <div key={index} className="w-fit">
            <figure
              className="h-[20vh] w-[8rem] sm:h-[40vh] sm:w-[15rem] bg-contain bg-center bg-no-repeat rounded-sm bg-[#fff]"
              style={{ backgroundImage: `url(${book.content})` }}
            ></figure>
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