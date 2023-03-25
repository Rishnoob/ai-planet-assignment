import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="w-full h-[64px] py-3 px-6 sm:px-[50px] lg:px-[142px] sticky bg-white">
      <Link to="/">
        <img
          className="absolute w-[105px] h-[41px]"
          src={logo}
          alt="AI Planet Logo"
        />
      </Link>
    </div>
  );
};

export default Header;
