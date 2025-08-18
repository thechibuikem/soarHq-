const EventHeader = ({ showUpcoming, toggleView, upcomingCount }) => {
  return (
    <div className="flex flex-col mx-[2rem] md:flex-row md:justify-between md:items-center mt-16 md:mt-20">
      <div className="header-content">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#1a1a1a]">
          {showUpcoming ? "Upcoming Events" : "All Events"}
        </h2>
        <p className="text-[#666] mb-5 md:mb-0">
          {showUpcoming
            ? `Discover ${upcomingCount} upcoming events and connect with the community.`
            : "Join us at our upcoming events and connect with the community, you could also view our past events to stay in the flow."}
        </p>
      </div>
      <button
        onClick={toggleView}
        className="inline-block px-5 text-[#f2f3f7] font-semibold cursor-pointer transition-all duration-300 text-sm btn-back bg-[#d4af37] border-1 border-[#00000010] rounded-sm uppercase py-2 shadow-sm"
      >
        {showUpcoming ? "View All Events" : "View Upcoming Events"}
      </button>
    </div>
  );
};
export default EventHeader;
