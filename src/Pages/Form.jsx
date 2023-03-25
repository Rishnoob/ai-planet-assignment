import React, { useEffect, useState } from "react";

//getting the values of localStorage to prevent resseting LS on Refreshing page
const getDataFromLS = () => {
  const lsData = localStorage.getItem("projects");
  if (lsData) {
    return JSON.parse(lsData);
  } else {
    return [];
  }
};
let id = 0;
const initialState = {
  title: "",
  summary: "",
  description: "Title is self descriptive!",
  hackname: "",
  hackstart: "",
  hackend: "",
  git: "",
  link: "",
};

const Form = () => {
  const [data, setData] = useState(initialState);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState({});

  const [project, setProject] = useState(getDataFromLS());

  const {
    title,
    summary,
    description,
    hackname,
    hackstart,
    hackend,
    gitlink,
    links,
  } = data;

  //convert image
  const getBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(image);
    });
  };
  // handle image
  const handleImage = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setImage(base64);
    });
  };

  // Error handler
  const validate = () => {
    let errors = {};
    if (!title) {
      errors.title = "Title is required";
    }
    if (!summary) {
      errors.summary = "Summary is required";
    }
    if (!hackname) {
      errors.hackname = "Hackathon Name is required";
    }
    if (!hackstart) {
      errors.hackstart = "Hackathon Start Date is required";
    }
    if (!hackend) {
      errors.hackend = "Hackathon End Date is required";
    }
    if (!gitlink) {
      errors.gitlink = "GitHub link is required";
    }

    return errors;
  };

  // Change Handler
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    id++;
    let inputData = {
      id,
      title,
      summary,
      description,
      hackname,
      hackstart,
      hackend,
      gitlink,
      links,
      image,
    };
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) {
      return setError(errors);
    } else {
      setProject([...project, inputData]);
      setData(initialState);
    }
  };

  // local storage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(project));
  }, [project]);
  return (
    // container
    <div className="flex px-6 sm:px-[80px] lg:px-[142px] mt-[50px]">
      {/* Form */}
      <div className="bg-white flex flex-col items-start px-[30px] h-full w-[900px] py-[48px] rounded-3xl text-sm sm:text-base">
        {/* Form Name */}
        <p className="text-xl md:text-3xl overflow-hidden font-semibold text-[#333333]">
          New Hackathon Submission
        </p>

        <form className="w-full" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="flex flex-col flex-grow-0 items-start mt-[40px] ">
            <p className="text-lg">Title</p>
            <input
              name="title"
              id="title"
              className="mt-2 p-4 border-2 border-[#d2d2d2] w-full rounded-xl outline-none"
              type="text"
              placeholder={"Title of your submission"}
              onChange={handleChange}
              value={title}
            />
            <p className="text-red-600 text-sm font-semibold">{error.title}</p>
          </div>

          {/* Summary */}
          <div className="flex flex-col flex-grow-0 items-start mt-[40px] ">
            <p className="text-lg">Summary</p>
            <input
              name="summary"
              className="mt-2 p-4 border-2 border-[#d2d2d2] w-full rounded-xl outline-none"
              type="text"
              placeholder="A short summary of your submissiion(this will be visible with your submission)"
              onChange={handleChange}
              value={summary}
            />
            <p className="text-red-600 text-sm font-semibold">
              {error.summary}
            </p>
          </div>

          {/* Description */}
          <div className="flex flex-col flex-grow-0 items-start mt-[40px] ">
            <p className="text-lg">Description</p>
            <textarea
              name="description"
              className="mt-2 p-4 border-2 border-[#d2d2d2] w-full h-[153px] rounded-xl outline-none"
              type="text"
              placeholder="Write a long description of your project. You can describe your idea and approach here."
              onChange={handleChange}
              value={description}
            />
            <div className="text-gray-300 w-full px-2 text-right text-xs m-1">
              0/3000 characters
            </div>
          </div>

          {/* Cover Image */}
          <div className="flex flex-col flex-grow-0 items-start mt-[40px] ">
            <p className="text-lg">Cover Image</p>
            <div className="text-gray-400 mt-2">
              Minimum resolution: 360 X 360px
            </div>
            <input
              name="file"
              className="mt-2 p-4 border-2 border-dashed bg-[#f5f5f5] border-[#d2d2d2] w-full rounded-xl outline-none"
              type="file"
              onChange={handleImage}
            />
          </div>

          {/* Hackathon Name */}
          <div className="flex flex-col flex-grow-0 items-start mt-[40px] ">
            <p className="text-lg">Hackathon Name</p>
            <input
              name="hackname"
              className="mt-2 p-4 border-2 border-[#d2d2d2] w-full rounded-xl outline-none"
              type="text"
              placeholder="Enter name of the Hackathon"
              onChange={handleChange}
              value={hackname}
            />
            <p className="text-red-600 text-sm font-semibold">
              {error.hackname}
            </p>
          </div>

          {/* Dates */}
          <div className="flex justify-between  ">
            {/* Start Date */}
            <div className="flex flex-col items-start mt-[40px] w-full mr-4 ">
              <p className="text-lg">Hackathon Start Date</p>
              <input
                name="hackstart"
                className="mt-2 p-4 border-2 bg-[#f5f5f5] border-[#d2d2d2] w-full rounded-xl outline-none texy-gray-300"
                type="date"
                onChange={handleChange}
                value={hackstart}
              />
              <p className="text-red-600 text-sm font-semibold">
                {error.hackstart}
              </p>
            </div>
            {/* End Date */}
            <div className="flex flex-col items-start mt-[40px] w-full ml-4">
              <p className="text-lg">Hackathon End Date</p>
              <input
                name="hackend"
                className="mt-2 p-4 border-2 bg-[#f5f5f5] border-[#d2d2d2] w-full rounded-xl outline-none"
                type="date"
                onChange={handleChange}
                value={hackend}
              />
              <p className="text-red-600 text-sm font-semibold">
                {error.hackend}
              </p>
            </div>
          </div>

          {/* Github Repository */}
          <div className="flex flex-col flex-grow-0 items-start mt-[40px] ">
            <p className="text-lg">GitHub Repository</p>
            <input
              name="gitlink"
              className="mt-2 p-4 border-2 border-[#d2d2d2] w-full rounded-xl outline-none"
              type="url"
              placeholder="Enter your submission's public GitHub repository link"
              onChange={handleChange}
              value={gitlink}
            />
            <p className="text-red-600 text-sm font-semibold">
              {error.gitlink}
            </p>
          </div>

          {/* Other Links */}
          <div className="flex flex-col flex-grow-0 items-start mt-[40px] ">
            <p className="text-lg">Other Links</p>
            <input
              name="links"
              className="mt-2 p-4 border-2 border-[#d2d2d2] w-full rounded-xl outline-none"
              type="text"
              placeholder="You can upload a video demo URL of your demo app here"
              onChange={handleChange}
              value={links}
            />
          </div>
          <hr className="mt-8 mb-4 border" />
          <button
            className="bg-[#44924c] font-semibold text-md p-4 shadow-md rounded-lg text-white"
            onClick={handleSubmit}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
