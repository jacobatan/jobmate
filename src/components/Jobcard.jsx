import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const Jobcard = ({ newJob, localJobDelete, editJobCard, id }) => {
  // changes the colour of the text + baackground on the status btn

  const colour =
    newJob.status === "rejected"
      ? "#F87171"
      : newJob.status === "offer"
      ? "#86EFAC"
      : "#FDBA74";

  const tagStyles = {
    backgroundColor: colour,
  };
  let dateApplied = new Date(newJob.date);
  let dateAppliedArr = dateApplied.toDateString().split(" ");
  let dateAppliedFormat = dateAppliedArr[2] + " " + dateAppliedArr[1];

  function fbDelete() {
    const docRef = doc(db, "gamers", newJob.id);
    deleteDoc(docRef);
    localJobDelete();
  }

  return (
    <div className="flex flex-col p-6 shadow-md rounded-xl bg-white cursor-pointer hover:shadow-2xl transform transition mx-2 ease-out ">
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
          style={tagStyles}
          className={`rounded-xl  py-0.5 px-2 text-sm `}
        >
          {newJob.status === "rejected"
            ? "Rejected"
            : newJob.status === "offer"
            ? "Offer"
            : "Awaiting Response"}
        </button>
      </div>

      <p
        className="hidden sm:block text-sm 
      text-gray-400 "
      >
        {newJob.notes}
      </p>

      {/* call to actoin */}
      <div className="self-end">
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={fbDelete}
          className="text-red-400  hover:scale-110 focus:scale-110 transition-all ease-out mr-4"
        />
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => editJobCard(id, newJob.id)}
          className="text-gray-400 hover:scale-110 focus:scale-110 transition-all ease-out"
        />
      </div>
    </div>
  );
};

export default Jobcard;
