import React from "react";

const Jobcard = ({ newJob, handleJobDelete }) => {
  // changes the colour of the text + baackground on the status btn
  const colour =
    newJob.status === "rejected"
      ? "red"
      : newJob.status === "offer"
      ? "green"
      : "orange";

  let dateApplied = new Date(newJob.date);
  let dateAppliedArr = dateApplied.toDateString().split(" ");
  let dateAppliedFormat = dateAppliedArr[2] + " " + dateAppliedArr[1];
  return (
    <div className="p-6 shadow-md rounded-xl bg-white cursor-pointer hover:shadow-2xl transform transition mx-2 ease-out ">
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
        <p className="text-sm text-gray-400">{dateAppliedFormat}</p>
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

      <button
        className="p-2 text-white rounded-md bg-blue-500 hover:bg-blue-600"
        onClick={handleJobDelete}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};

export default Jobcard;
