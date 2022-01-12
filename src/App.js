import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import NewjobForm from "./components/NewjobForm";
import Summary from "./components/Summary";

const App = () => {
  //state for adding new job
  const defaultNewJob = {
    company: "",
    position: "",
    location: "",
    notes: "",
    status: "",
    date: "",
  };
  const [newJob, setNewJob] = useState(defaultNewJob);
  const [showNewJobForm, setNewJobForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //stores all current jobs
  const [allJobs, setAllJobs] = useState(
    JSON.parse(localStorage.getItem("allJobs")) || []
  );

  //recieves new job data and stores it in state, newJob
  function handleNewJob(event) {
    setNewJob((prevJobData) => {
      return {
        ...prevJobData,
        [event.target.name]: event.target.value,
      };
    });
  }

  //everytime new job is added, update local storage
  useEffect(() => {
    localStorage.setItem("allJobs", JSON.stringify(allJobs));
  }, [allJobs]);

  //uses the upadated new job state to create a new Jobcard Component
  function renderNewJob(event) {
    event.preventDefault();
    const latestJob = newJob;
    //  update all jobs
    setAllJobs((allPrevJobs) => {
      return [...allPrevJobs, latestJob];
    });
    // !!!!!!!!!!!!!!!FOR SOME REASON DATE DOESNT get displayed !!!!!!!//
    setNewJob(defaultNewJob); //clear the form and default the state
    setNewJobForm((old) => !old);
  }

  // need to implement the delete job button
  function handleJobDelete(id) {
    console.log(`delete ${id}`);
    const updatedJobs = [...allJobs];
    console.log(updatedJobs);
    setAllJobs(updatedJobs.splice(id, 1));
  }

  //maps over all jobs and renders the jsx
  const renderAllJobs = allJobs.map((job, i) => {
    return (
      <Jobcard
        key={i}
        newJob={job}
        handleJobDelete={() => handleJobDelete(i)}
      />
    );
  });

  function toggleModal() {
    setNewJobForm((old) => console.log(old));
  }
  return (
    <div className="bg-gray-50 h-screen ">
      <Header />
      <Summary />
      {openModal && (
        <NewjobForm
          showNewJobForm={showNewJobForm}
          handleNewJob={handleNewJob}
          newJob={newJob}
          renderNewJob={renderNewJob}
          toggleModal={() => setOpenModal(false)}
        />
      )}

      {/* main card */}

      {/* py-12 grid grid-cols-1 md:max-w-sm md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6 */}

      {/* py-12 grid md:grid-cols-3 grid-flow-row md:max-w-sm lg:max-w-7xl  mx-auto gap-x-6 gap-y-6 justify-items-center md:justify-items-start */}

      <section className="py-12 grid grid-cols-1 md:max-w-sm md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6 ">
        <button
          className="border-2 border-dashed cursor-pointer w-3/5"
          onClick={() => setOpenModal(true)}
        >
          {" "}
          Add New Job{" "}
        </button>
        {renderAllJobs}
      </section>
    </div>
  );
};

export default App;
