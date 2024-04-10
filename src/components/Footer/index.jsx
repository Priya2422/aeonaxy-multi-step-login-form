/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsDribbble,
  BsPinterest,
} from "react-icons/bs";
import { useEffect, useState } from "react";
export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 813) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <footer className={`bg-[#fafafa] p-20 tab-rev:pr-10`}>
      <div
        className={`flex justify-around tab-rev:flex-col tab-rev:px-10 tab-rev:gap-8 `}
      >
        <div className={`flex flex-col gap-3 px-2 `}>
          <div>
            <h1 className="font-cursive text-3xl text-[#ea4b8b] font-[100]">
              dribble
            </h1>
            <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black " />
          </div>
          <p className={` text-[#9c9c9c] w-[50%] max-[500]:w-full`}>
            Dribble is the world's leading community for creatives to
            share,grow, and get hired.
          </p>
          <div className={`flex gap-5 ${isMobile ? "pb-10" : ""}`}>
            <a href={"https://www.aedin.com/in/priya-pandey-292176206/"}>
              <BsDribbble />
            </a>
            <a href={"https://www.aedin.com/in/priya-pandey-292176206/"}>
              <BsTwitter />
            </a>
            <a href={"https://www.facebook.com/"}>
              <BsFacebook />
            </a>
            <a href={"https://www.instagram.com/"}>
              <BsInstagram />
            </a>
            <a href={"https://www.aedin.com/in/priya-pandey-292176206/"}>
              <BsPinterest />
            </a>
          </div>
        </div>
        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-3"} px-2 `}>
          <div className={`flex flex-col`}>
            <h1 className="font-bold">For designers</h1>
            <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black mb-2 " />{" "}
          </div>
          <a href="#">Go Pro!</a>
          <a href="#">Explore design work</a>
          <a href="#">Design blog</a>
          <a href="#">Overtime podcast</a>
          <a href="#">Playoffs</a>
          <a href="#">Weekly Warm-Up</a>
          <a href="#">Refer a Friend</a>
          <a href="#">Code of conduct</a>
        </div>
        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-3"} px-2 `}>
          <div className={`flex flex-col`}>
            <h1 className="font-bold">Hire designers</h1>
            <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black mb-2 " />
          </div>
          <a href="#">Go Pro!</a>
          <a href="#">Post a job opening</a>
          <a href="#">Post a freelance project</a>
          <a href="#">Search for designers</a>
          <h1 className="font-bold">Brands</h1>
          <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black mb-2 " />
          <a href="#">Advertise with us</a>
        </div>
        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-3"} px-2 `}>
          <div className={`flex flex-col`}>
            <h1 className="font-bold">Company</h1>
            <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black mb-2 " />
          </div>
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Support</a>
          <a href="#">Media Kit</a>
          <a href="#">Testimonials</a>
          <a href="#">API</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <div className={`flex flex-col ${isMobile ? "gap-0" : "gap-3"} px-2 `}>
          <div className={`flex flex-col`}>
            <h1 className="font-bold">Directories</h1>
            <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black mb-2 " />
          </div>
          <a href="#">Design jobs</a>
          <a href="#">Designers for hire</a>
          <a href="#">Freelance designers for hire</a>
          <a href="#">Tags</a>
          <a href="#">Places</a>
          <h1 className="font-bold">Design assets</h1>
          <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black mb-2 " />
          <a href="#">Dribbble Marketplace</a>
          <a href="#">Creative Market</a>
          <a href="#">Fontspring</a>
          <a href="#">Font Squirrel</a>
        </div>
        <div className={`flex flex-col "gap-3" px-2 `}>
          <div className={`flex flex-col`}>
            <h1 className="font-bold">Design Resources</h1>
            <div className="mt-2 tab:hidden w-[15%] h-[2px] bg-black mb-2 " />
          </div>
          <a href="#">Freelancing</a>
          <a href="#">Design Hiring</a>
          <a href="#">Design Portfolio</a>
          <a href="#">Design Education</a>
          <a href="#">Creative Process</a>
          <a href="#">Design Industry Trends</a>
        </div>
      </div>
    </footer>
  );
}
