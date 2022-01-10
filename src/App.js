import React, { useState } from "react";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import NewjobForm from "./components/NewjobForm";

const App = () => {
  //state for adding new job
  const [newJob, setNewJob] = useState({
    company: "",
    position: "",
    location: "",
    notes: "",
    status: "",
  });

  //listens for on submit on the newjob form 
  const [addNewJob, setAddNewJob] = useState(false)

  //stores all current jobs
  const [allJobs, setAllJobs] = useState([])


  //recieves new job data and stores it in state, newJob
  function handleNewJob(event) {
    setNewJob(prevJobData => {
      return {
          ...prevJobData,
          [event.target.name]: event.target.value
      } 
    });

  }

  //uses the upadated new job state to create a new Jobcard Component
  function renderNewJob() {
    const latestJob = newJob
    //  update all jobs
    setAllJobs(allPrevJobs => {return [...allPrevJobs, latestJob]})
  }

  //maps over all jobs and renders the jsx
  const renderAllJobs = allJobs.map((job,i)=> {
    return (
      <Jobcard key={i} newJob={job}/>
    )
  })

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <NewjobForm handleNewJob={handleNewJob} newJob={newJob} renderNewJob={renderNewJob}/>

      {/* main card */}

      <section className="pt-12 grid grid-cols-1 md:max-w-sm md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6">
        {/* {foo.map((foobar, i) => (
          <Jobcard key={i} />
        ))} */}
        {/* ^^^^ temporary soln for testing purposes :) */}

        {renderAllJobs}
      </section>
    </div>
  );
};

export default App;
