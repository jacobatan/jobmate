import React from "react";

export default function NewjobForm(props) {
  return (
    <div
      className={`${
        props.showNewJobForm ? "inline-flex" : "hidden"
      } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none 
      focus:outline-none cursor-pointer p-10 h-screen bg-slate-600/50 `}
    >
      {/* contents */}
      <div className="border-0 rounded-2xl shadow-2xl relative flex flex-col w-2/5 bg-white outline-none cursor-default p-8">
        <div className="flex items-start justify-between p-5 rounded-t">
          <h3 className="text-xl font-bold">Add a new job</h3>
          <button
            type="button"
            className="font-semibold w-6"
            onClick={props.toggleModal}
          >
            X
          </button>
        </div>
        <form
          className="flex flex-col "
          onSubmit={props.renderNewJob}
          autoComplete="off"
        >
          {/* company + position */}
          <div className="grid grid-cols-2 w-11/12 mx-auto gap-x-4">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Company</div>
              <input
                className="form__input"
                required
                onChange={props.handleNewJob}
                type="text"
                name="company"
                value={props.newJob.company}
              />
            </div>

            <div className="flex flex-col py-2 w-full mx-auto">
              <div className="form__text">Position</div>
              <input
                className="form__input"
                required
                onChange={props.handleNewJob}
                type="text"
                name="position"
                value={props.newJob.position}
              />
            </div>
          </div>

          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Location</div>
              <input
                className="form__input "
                required
                onChange={props.handleNewJob}
                type="text"
                name="location"
                value={props.newJob.location}
              />
            </div>
          </div>

          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Date started</div>
              <input
                required
                className="form__input"
                type="date"
                name="date"
                onChange={props.handleNewJob}
                value={props.newJob.date}
              />
            </div>
          </div>

          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Notes</div>
              <textarea
                className="form__input h-[150px]"
                required
                onChange={props.handleNewJob}
                type="text"
                name="notes"
                value={props.newJob.notes}
              />
            </div>
          </div>

          <select
            className="block"
            required
            onChange={props.handleNewJob}
            name="status"
            value={props.newJob.status}
          >
            <option value="offer">Offer</option>
            <option defaultValue value="awaitingResponse">
              Awaiting Response
            </option>
            <option value="rejected">Rejected</option>
          </select>

          <button
            type="submit"
            className="w-11/12 text-3xl font-semibold mx-auto bg-green-500 text-white px-4 py-6 rounded-md mt-4 
            hover:bg-green-600 transform transition ease-out"
          >
            Add Job <span className="font-normal">➜</span>
          </button>
        </form>
      </div>
    </div>
  );
}
