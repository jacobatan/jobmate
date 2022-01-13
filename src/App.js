import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import NewjobForm from "./components/NewjobForm";
import Summary from "./components/Summary";
import Login from "./components/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  //state for adding new job
  const defaultNewJob = {
    company: "",
    position: "",
    location: "",
    notes: "",
    status: 'awaitingResponse',
    date: "",
  };
  const [newJob, setNewJob] = useState(defaultNewJob);
  const [showNewJobForm, setNewJobForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [edit, setEdit] = useState(
      {
        edit: false, 
        id: null
      });
  const [summary, setSummary] = useState(
    {
      offers: 0, 
      awaitingResponse: 0
    }
  )

  //stores all current jobs
  const [allJobs, setAllJobs] = useState(
    JSON.parse(localStorage.getItem("allJobs")) || []
  );

  //everytime new job is added, update local storage
  useEffect(() => {
    localStorage.setItem("allJobs", JSON.stringify(allJobs));
    const offers = allJobs.filter(job => job.status === 'offer').length;
    const awaitingResponse = allJobs.filter(job => job.status === 'awaitingResponse').length;

    setSummary({offers: offers, awaitingResponse: awaitingResponse})
  }, [allJobs]);



  //recieves new job data and stores it in state, newJob
  function handleNewJob(event) {
    setNewJob((prevJobData) => {
      return {
        ...prevJobData,
        [event.target.name]: event.target.value,
      };
    });
  }


  //uses the upadated new job state to create a new Jobcard Component
  function renderNewJob(event) {
    event.preventDefault();
    const latestJob = newJob;
    //  update all jobs
    if(edit.edit) {
      handleJobEdit(edit.id)
    } else {
      setAllJobs((allPrevJobs) => [...allPrevJobs, latestJob]);
      setNewJob(defaultNewJob); //clear the form and default the state
      setNewJobForm((old) => !old);
    }

  }

  function handleJobDelete(id) {
    const updatedJobs = [...allJobs]
    const newJobs = updatedJobs.filter((_, i) => i != id);
    setAllJobs(newJobs);
  }

  //authenticates login page
  function loginAuthentication() {
    setLoginSuccess(true);
  }

  function handleJobEdit(id) {
    setAllJobs(prevJobs => prevJobs.map((job, i) => {
      if(i===id) {
        return {
          ...newJob
        }
      } else{
        return job
      }
    }))
    setEdit({edit: false, id: null})
    setNewJob(defaultNewJob); //clear the form and default the state
    setNewJobForm((old) => !old);
    setOpenModal(old=>!old)
  }

  function editJobCard(id) {
    setEdit({edit: true, id: id}); //state which tracks if its a edit or new job
    setNewJob(allJobs[id]) //sets values of form to old values 
    setOpenModal(old=>!old)
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
      {!loginSuccess && <Login loginSuccess={loginAuthentication} />}

      {/* content */}
      {loginSuccess && (
        <div>
          <Header />
          <Summary summary={summary}/>
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
          <section className="py-12 grid grid-cols-1  md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6 ">
            <button
              className="border-2 hover:blur-sm hover:shadow-lg focus:blur-sm focus:shadow-lg  border-dashed cursor-pointer text-xl opacity-60"
              onClick={() => setOpenModal(true)}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="my-2 fa-2x block mx-auto"/>
            </button>
            {renderAllJobs}
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
