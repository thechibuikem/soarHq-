import { useState,useEffect } from "react";

const MissionHeader =()=>{return(
    <div className="sm:text-[1.3rem] text-[1.2rem] text-[#f2f3f7] tracking-[1px] font-normal md:text-[#2c2b2b] uppercase text-center">
          <h3>our mission</h3>
        </div> 
)}

const MissionBody = ()=>{
return(
        <div className=" w-full h-[60vh] flex gap-[1.6rem]
        md:h-fit">
            {/* the side image on the left */}
          <div className="w-[70%] hidden md:block rounded-md" data-aos="fade-right">
            <img src="https://uokpdllmsspezsqltpxj.supabase.co/storage/v1/object/sign/soar-hq-bucket/mission.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYWRmMGY1MS04ZDNiLTQ3OTgtYTg3NS0xZGIwMjMxZGNhNDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzb2FyLWhxLWJ1Y2tldC9taXNzaW9uLmpwZyIsImlhdCI6MTc1MjIyNTU3NSwiZXhwIjoxNTc4NTUyMjI1NTc1fQ.bwLt1hPF9Laxt5HZpdnL1lYKrxL3Z95sgtDBugkBE2g" alt="" />
          </div>


          {/* body of text on the right */}
          <div className="mx-4 md:w-[30%] flex flex-col gap-8 md:text-center md:h-fit ">
            <div className="w-full leading-[1.6] text-[1.3rem] font-light md:text-left
           text-[#f2f3f7] 
             [text-shadow:1px_1px_0.25rem_#000000e8] md:text-[#2c2b2b] md:[text-shadow:none]" data-aos="fade-left" data-aos-delay="5s">
              Our mission is to disciple, empower, and position women to soar in
              excellence across every sphere of life. <br />
              Through our re-creation-driven learning program and transformative
              encounters, we create an atmosphere where women fully embrace
              their God-ordained purpose, take ownership of their growth, and
              shape the world around them with love, compassion, and grace
            </div>
          </div>
        </div>
)
}

const MissionSection = ()=>{
return(
        <section className="w-full h-[80vh] flex flex-col justify-center items-center gap-[4.5rem]
 bg-[url('https://uokpdllmsspezsqltpxj.supabase.co/storage/v1/object/sign/soar-hq-bucket/mission.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYWRmMGY1MS04ZDNiLTQ3OTgtYTg3NS0xZGIwMjMxZGNhNDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzb2FyLWhxLWJ1Y2tldC9taXNzaW9uLmpwZyIsImlhdCI6MTc1MjIyNTU3NSwiZXhwIjoxNTc4NTUyMjI1NTc1fQ.bwLt1hPF9Laxt5HZpdnL1lYKrxL3Z95sgtDBugkBE2g')]
  bg-blend-darken bg-cover bg-[#00000088] sm:bg-none sm:bg-transparent md:gap-8 md:h-fit 
  md:text-[#f2f3f7] md:px-[3rem] mt-16 md:mt-20">
<MissionHeader/>
<MissionBody/>
        </section>
)
}

export default MissionSection