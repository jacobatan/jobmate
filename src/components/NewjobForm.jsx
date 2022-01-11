import React, { useEffect, useRef } from "react";

export default function NewjobForm({
  showNewJobForm,
  handleNewJob,
  newJob,
  renderNewJob,
  toggleModal,
}) {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        toggleModal();
      }
    };
    document.addEventListener("click", checkIfClickOutside);
    return () => {
      document.removeEventListener("click", checkIfClickOutside);
    };
  }, [toggleModal]);

  return (
    <div
      className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none 
      focus:outline-none cursor-pointer h-screen p-2 bg-slate-600/50 `}
    >
      {/* contents */}
      <div
        className="border-0 rounded-2xl shadow-2xl relative flex flex-col w-full sm:max-w-screen-sm h-full min-h-min md:h-auto xl:w-3/5 xl:h-auto 2xl:w-1/2 bg-white outline-none cursor-default p-2 md:w-1/2 "
        ref={ref}
      >
        <div className="flex items-start justify-between p-5 rounded-t">
          <h3 className="text-xl font-bold">Add a new job</h3>
          <button
            type="button"
            className="font-semibold w-6"
            onClick={toggleModal}
          >
            X
          </button>
        </div>
        <form
          className="flex flex-col "
          onSubmit={renderNewJob}
          autoComplete="off"
        >
          {/* company + position */}
          <div className="grid grid-cols-1 lg:grid-cols-2  w-11/12 mx-auto gap-x-4">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Company</div>
              <input
                className="form__input"
                required
                onChange={handleNewJob}
                type="text"
                name="company"
                value={newJob.company}
              />
            </div>

            <div className="flex flex-col py-2 w-full mx-auto">
              <div className="form__text">Position</div>
              <input
                className="form__input"
                required
                onChange={handleNewJob}
                type="text"
                name="position"
                value={newJob.position}
              />
            </div>
          </div>

          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Location</div>
              <input
                className="form__input "
                required
                onChange={handleNewJob}
                type="text"
                name="location"
                value={newJob.location}
              />
            </div>
          </div>

          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Date Applied</div>
              <input
                required
                className="form__input"
                type="date"
                name="date"
                onChange={handleNewJob}
                value={newJob.date}
              />
            </div>
          </div>

          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col py-2 w-full">
              <div className="form__text">Notes</div>
              <textarea
                className="form__input h-[150px]"
                onChange={handleNewJob}
                type="text"
                name="notes"
                value={newJob.notes}
              />
            </div>
          </div>
          <div className="flex flex-col py-2 w-full mx-auto">
            <div className="w-11/12 mx-auto ">
              <div className="flex flex-col py-2 w-full">
                <div className="form__text">Job Status</div>
                <select
                  className="form__input  "
                  required
                  onChange={handleNewJob}
                  name="status"
                  value={newJob.status}
                >
                  <option value="awaitingResponse">Awaiting Response</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-1/2 text-lg xl:text-2xl font-semibold mx-auto bg-green-500 text-white p-4 rounded-md mt-2 
            hover:bg-green-600 transform transition ease-out"
          >
            Add Job <span className="font-normal">➜</span>
          </button>
        </form>
      </div>
    </div>
  );
}
