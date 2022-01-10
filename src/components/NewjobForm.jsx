import React from "react";

export default function NewjobForm(props) {
  return (
    <div
      className={`${
        props.showNewJobForm ? "inline-flex" : "hidden"
      } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none cursor-pointer p-10`}
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/* contents */}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
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
          <form className="" onSubmit={props.renderNewJob}>
            <div className="flex items-center py-2 w-full mx-auto ">
              <input
                className="appearance-none bg-transparent mx-auto border-0 pb-4 border-b w-11/12 text-gray-700 
                py-1 px-2 leading-tight focus:outline-none focus:border-b-green-500 "
                required
                onChange={props.handleNewJob}
                type="text"
                placeholder="Company"
                name="company"
                value={props.newJob.company}
              />
            </div>

            <input
              required
              onChange={props.handleNewJob}
              type="text"
              name="position"
              placeholder="Position"
              value={props.newJob.position}
            />
            <input
              required
              type="date"
              name="date"
              onChange={props.handleNewJob}
              value={props.newJob.date}
            />
            <input
              required
              onChange={props.handleNewJob}
              type="text"
              name="location"
              placeholder="Location"
              value={props.newJob.location}
            />
            <textarea
              onChange={props.handleNewJob}
              type="text"
              name="notes"
              placeholder="Notes"
              value={props.newJob.notes}
            />
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
            <button type="submit" className="border-2  inline">
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
