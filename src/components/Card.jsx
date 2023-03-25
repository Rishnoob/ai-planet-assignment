import { Link } from "react-router-dom";
import InterviewMe from "../assets/InterviewMe.png";
const Card = ({ project }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 h-[289px] w-[360px] rounded-xl shadow-md my-6">
        {/* Project Image and Title */}
        <div className="flex items-center gap-6 mb-[32px]">
          <img
            className="h-[80px] sm:h-[100px] w-[80px] sm:w-[100px] object-cover rounded-md"
            src={project.image ? project.image : InterviewMe}
            alt=""
          />
          <p className=" font-semibold">{project.title}</p>
        </div>
        {/* Project Description */}
        <p className="text-sm sm:text-base">{project.description}</p>
        {/* Upload time gap */}
        <p className="flex justify-end pt-5 text-xs text-[#666666]">
          {project.hackdate}
        </p>
      </div>
    </div>
  );
};

export default Card;
