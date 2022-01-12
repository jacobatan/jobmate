import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const Jobcard = ({ newJob, handleJobDelete, date }) => {
  const colour =
    newJob.status === "rejected"
      ? "red"
      : newJob.status === "offer"
      ? "green"
      : "orange";

  return (
    // bg-red-100 for rej, bg-green-100 for acc, bg-white for pending
    <div className=" p-6 shadow-md rounded-xl bg-white cursor-pointer hover:shadow-2xl transform transition mx-2 ease-out">
      {/* Card Header*/}
      <div className="flex justify-between items-center pb-3">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-black ">
            <img
              className="w-10 scale-50"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </div>
          <p>{newJob.company}</p>
        </div>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      {/* Job title + loc */}
      <div className="pb-5">
        <h1 className="text-xl font-bold">{newJob.position}</h1>
        <p className="text-sm font-semibold">{newJob.location}</p>
      </div>

      {/* Tags */}
      <div className="hidden sm:inline-block space-x-1 pb-7">
        <button
          className={`rounded-xl bg-${colour}-200 py-0.5 px-2 text-sm text-${colour}-600`}
        >
          {newJob.status === "rejected"
            ? "Rejected"
            : newJob.status === "offer"
            ? "Offer"
            : "Awaiting Response"}
        </button>
      </div>

      <p className="hidden sm:block text-sm text-gray-400 ">{newJob.notes}</p>

      {/* call to actoin */}
      <div className="self-end">
        <FontAwesomeIcon icon={faTrashAlt} onClick={handleJobDelete} className="text-red-400  hover:scale-110 focus:scale-110 transition-all ease-out mr-4"/>
        <FontAwesomeIcon icon={faEdit} onClick={handleJobDelete} className="text-gray-400 hover:scale-110 focus:scale-110 transition-all ease-out"/>
      </div>

    </div>
  );
};

export default Jobcard;
