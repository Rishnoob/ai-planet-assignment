import HeroSection from "../components/HeroSection";
import { AiFillStar, AiFillWallet, AiOutlineSearch } from "react-icons/ai";
import { RxTriangleDown } from "react-icons/rx";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

let initialState = "";
const Home = () => {
  const lsData = localStorage.getItem("projects");
  const projects = JSON.parse(lsData);
  const [search, setSearch] = useState(initialState);
  const [searchedProject, setSearchedProject] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleSearch = () => {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].title === search) {
        setSearchedProject(projects[i]);
      }
    }
  };
  console.log(searchedProject);
  return (
    <div className="">
      <HeroSection />
      {/* Main Section */}
      <div className="py-[50px] px-6 sm:px-[50px] lg:px-[142px]">
        {/* Menu Items */}
        <div className="flex justify-between text-[#6e6e6f]">
          {/* Left Menu Items */}
          <div className="flex sm:gap-3 md:gap-4 text-xs sm:text-base md:text-[18px] lg:text-xl font-semibold items-center">
            {/* All Submissions Menu Item*/}
            <button className="focus:text-yellow-400 md:hidden text-4xl">
              <AiFillWallet />
            </button>
            <button className="focus:border-b-4 focus:text-black border-[#45934c] py-2 whitespace-nowrap hidden md:block tracking-tighter">
              All Submissions
            </button>

            {/* Favourite Submittions Menu Item*/}
            <button className="focus:text-yellow-400 md:hidden text-4xl">
              <AiFillStar />
            </button>
            <button className="focus:border-b-4 focus:text-black border-[#45934c] py-2 whitespace-nowrap hidden md:block tracking-tighter">
              Favourite Submissions
            </button>
          </div>

          {/* Right Search and Filter */}
          <div className="flex flex-shrink gap-4 justify-between">
            {/* Search */}
            <div className="flex flex-shrink items-center justify-between border-[2px] rounded-full border-gray-500  px-2">
              <button onClick={handleSearch}>
                <AiOutlineSearch className="text-xl" />
              </button>

              <input
                className="px-2 py-1 bg-transparent text-xs sm:text-sm md:text-base outline-none placeholder:text-gray-500"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* Drop Down Filter */}
            <div className="flex items-center justify-between border-[2px] rounded-full border-gray-500 text-xs sm:text-sm md:text-base  px-2">
              <p>Newest</p>
              <RxTriangleDown />
            </div>
            {/* Drop menu options */}
            {/* <div className="bg-white rounded-lg w-[140px] absolute right-0">
          <div className="bg-[#E3F2E5]">
            <p className="p-2 ">Newest</p>
          </div>
          <div>
            <p className="p-2 ">Oldest</p>
          </div>
        </div> */}
          </div>
        </div>
        {/* Cards */}
        {!search.length ? (
          <div className="grid grid-auto-fit-[24rem]">
            {projects.map((item) => (
              <Link to="/details" state={{ data: item }}>
                <Card project={item} />
              </Link>
            ))}
          </div>
        ) : searchedProject ? (
          <div className="grid grid-auto-fit-[24rem]">
            <Link to="/details" state={{ data: searchedProject }}>
              <Card project={searchedProject} />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
