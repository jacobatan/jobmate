import React, { useState } from "react";
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
  React.useEffect(() => {
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
    setNewJobForm((old) => !old);
  }

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <Summary/>
      <NewjobForm
        showNewJobForm={showNewJobForm}
        handleNewJob={handleNewJob}
        newJob={newJob}
        renderNewJob={renderNewJob}
        toggleModal={toggleModal}
      />

      {/* main card */}

      {/*  */}

      <section className="pt-12 grid grid-cols-1 md:max-w-sm md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6">
        {renderAllJobs}
        <button className="border-2 cursor-pointer" onClick={toggleModal}>
          {" "}
          Add New Job{" "}
        </button>
      </section>
    </div>
  );
};

export default App;
