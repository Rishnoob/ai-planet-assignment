import React from "react";
import { Link } from "react-router-dom";
import bulb from "../assets/bulb.png";
import waves from "../assets/waves.png";
const HeroSection = () => {
  return (
    // Hero Section Contianer
    <div className="relative bg-[#003145]">
      <div className=" w-full h-[416px] text-white flex justify-between items-center px-6 sm:px-[60px] lg:px-[142px] ">
        {/* Left Section */}
        <div className="w-[792px] items-center">
          <h1 className="text-2xl md:text-4xl lg:text-[42px] font-semibold mb-[30px] tracking-wide overflow-hidden ">
            Hackathon Submissions
          </h1>
          <p className="mb-[30px] text-sm sm:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.{" "}
          </p>
          <Link to="/form">
            <button className="bg-[#44924c] font-semibold text-md p-4 shadow-md rounded-lg">
              Upload Submission
            </button>
          </Link>
        </div>
        {/* Right Section */}
        <div className=" sm:h-[300px] sm:w-[200px] items-center flex justify-center">
          <img className=" " src={bulb} alt="bulb" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
