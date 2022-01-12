import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import NewjobForm from "./components/NewjobForm";
import Summary from "./components/Summary";
import Login from "./components/Login";

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
  const [loginSuccess, setLoginSuccess] = useState(false);

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
    setAllJobs((allPrevJobs) => [...allPrevJobs, latestJob]);
    setNewJob(defaultNewJob); //clear the form and default the state
    setNewJobForm((old) => !old);
  }

  function handleJobDelete(id) {
    const newJobs = allJobs.filter((_, i) => i != id);
    setAllJobs(newJobs);
  }

  //authenticates login page
  function loginAuthentication() {
    setLoginSuccess(true)
  }

  function editJobCard(i) {
    setOpenModal(true)
    console.log(`edit ${i}`)
  }

  //maps over all jobs and renders the jsx
  const renderAllJobs = allJobs.map((job, i) => {
    return (
      <Jobcard
        key={i}
        newJob={job}
        handleJobDelete={() => handleJobDelete(i)}
        editJobCard = {() => editJobCard(i)}
      />
    );
  });

  return (
    <div className=" h-screen ">

      {!loginSuccess && <Login loginSuccess={loginAuthentication}/> } 

      {/* content */}
      { loginSuccess && 
        <div  > 
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
          <section className="py-12 grid grid-cols-1 md:max-w-sm md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6 ">
            <button
              className="border-2 border-dashed cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              {" "}
              Add New Job{" "}
            </button>
            {renderAllJobs}
          </section>

        </div> }
    </div>
  );
};

export default App;
