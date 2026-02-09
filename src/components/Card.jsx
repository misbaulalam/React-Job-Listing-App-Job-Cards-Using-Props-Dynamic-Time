import React from "react";
import "../index.css";
import { BookmarkPlus } from "lucide-react";


function Card({days,logo,companyName, jobTitle, experienceLevel,jobType,salary,location}) {
  return (

      <div className="card px-4 py-3 h-[400px] w-[320px] bg-white rounded-3xl text-black flex flex-col justify-between ">
        <div className="top flex justify-between ">
          <img
            className="h-8 w-8 rounded-[50%] border-2 border-zinc-600 object-contain"
            src={logo}
            alt="Logo"
          />
          <div>
            <button className="px-2 py-1 rounded-2xl bg-slate-100 text-black text-opacity-70 flex justify-center items-center border-2">
              Save
              <BookmarkPlus size={24} />
            </button>
          </div>
        </div>
        <div className="middle  ">
          <h4 className="text-xl font-medium">
            {companyName}{" "}
            <span className="text-sm text-black text-opacity-70">
              {days}
            </span>
          </h4>
          <h2 className="text-3xl font-semibold mt-1">{jobTitle}</h2>
          <div className="flex mt-4 font-medium text-black text-opacity-80 ">
            <button className="bg-zinc-200 mx-2 px-4 py-1 rounded-lg border-none ">
              {jobType}
            </button>
            <button className="bg-zinc-200 mx-2 px-4 py-1 rounded-lg border-none ">
              {experienceLevel}
            </button>
          </div>
        </div>

        <div className="bottom border-t-2 flex justify-between ">
          <div className="mt-1">
            <h1 className="text-2xl font-medium">{salary}</h1>
            <p>{location}</p>
          </div>
          <button className="bg-black rounded-2xl text-white px-4 py-1 font-medium mt-1">
            Apply Now
          </button>
        </div>
      </div>

  );
}

export default Card