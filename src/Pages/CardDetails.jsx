import React, { useState } from "react";
import InterviewMe from "../assets/InterviewMe.png";
import {
  AiFillStar,
  AiOutlineStar,
  AiTwotoneCalendar,
  AiFillGithub,
} from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const CardDetails = () => {
  const location = useLocation();
  const data = location.state?.data;
  const [favourite, setFavourite] = useState(false);

  const handleDelete = () => {
    const lsData = localStorage.getItem("projects");
    var projects = JSON.parse(lsData);
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].id === data.id) {
        console.log(projects[i]);
        projects.splice(i, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
        break;
      } else {
        console.log("Project not Found");
      }
    }
  };
  const handleFavourite = () => {
    setFavourite(!favourite);
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#003145]">
        <div className=" w-full h-[416px] text-white flex flex-col lg:flex-row lg:justify-between mt-8 lg:mt-0 lg:items-center px-6 sm:px-[60px] lg:px-[142px]">
          {/* Left Hero */}
          <div className="items-center lg:w-[600px]">
            <div className="flex items-center gap-[40px] mb-[30px]">
              {/* Image */}
              <img
                src={data.image ? data?.image : InterviewMe}
                alt="ProjectImage"
                className="h-[80px] sm:h-[120px] w-[80px] sm:w-[120px] object-cover rounded-md"
              />
              {/* Title */}
              <h1 className="text-2xl sm:text-[42px] font-semibold  tracking-wide overflow-hidden py-3">
                {data?.title}
              </h1>
            </div>
            {/* Summary */}
            <p className="mb-[30px] text-sm sm:text-base text-justify">
              {data?.summary}
            </p>
            {/* Star and Date */}
            <div className="flex items-center gap-6 sm:text-2xl">
              <button onClick={handleFavourite}>
                <div>
                  {favourite ? (
                    <AiFillStar className="text-yellow-400" />
                  ) : (
                    <AiOutlineStar />
                  )}
                </div>
              </button>
              <p className="overflow-hidden border border-[#486a78] h-8"></p>
              <div className="bg-[#245873] px-2 py-1 rounded-full flex items-center gap-1">
                <AiTwotoneCalendar className="h-5 w-5" />
                <p className="text-sm">{data?.hackstart}</p>
              </div>
            </div>
          </div>
          {/* Right Hero (Edit and Delete Buttons )*/}
          <div className="w-full mt-8 lg:mt-0 lg:w-auto gap-2 lg:gap-4 flex flex-col">
            <button className="border border-[#fefffe] text-[#fefffe] rounded-lg flex items-center gap-2 w-[100px] lg:w-[120px] h-[30px] lg:h-[40px] overflow-hidden justify-center">
              <MdEdit />
              Edit
            </button>
            <Link to="/">
              <button
                onClick={handleDelete}
                className="border border-[#fefffe] text-[#fefffe] rounded-lg flex items-center gap-2 w-[100px] lg:w-[120px] h-[30px] lg:h-[40px] overflow-hidden justify-center"
              >
                <MdDelete />
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between my-[50px] px-6 sm:px-[60px] lg:px-[142px]">
        {/* Left Description */}
        <div className="lg:w-[600px] mb-8">
          <p className="text-xl font-semibold mb-5">Description</p>
          <p className="text-sm sm:text-base text-justify tracking-tighter">
            {data?.description}
          </p>
        </div>
        {/* Right Hackathon Details */}
        <div className="flex flex-col justify-center gap-1 lg:gap-5 lg:ml-2">
          <p className="text-gray-500">Hackathon</p>
          {/* Name */}
          <p className="text-xl">{data?.hackname}</p>
          {/* Date */}
          <div className="text-sm flex gap-2 text-gray-400">
            <AiTwotoneCalendar />
            <p>
              {data?.hackstart} - {data?.hackend}
            </p>
          </div>
          {/* Links */}
          <div className="font-semibold mt-3 flex-col flex gap-2">
            <a
              href={data?.gitlink}
              className="border-2 border-gray-400 text-gray-500 rounded-lg flex items-center gap-2 w-[200px] h-[40px] overflow-hidden justify-center"
            >
              <AiFillGithub className="text-xl" />
              Github Repository
            </a>
            {data?.links ? (
              <a
                href={data?.links}
                className="border-2 border-gray-400 text-gray-500 rounded-lg flex items-center gap-2 w-[200px] h-[40px] overflow-hidden justify-center"
              >
                <BiLinkExternal className="text-xl" />
                Other Link
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
