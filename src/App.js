import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import NewjobForm from "./components/NewjobForm";
import Summary from "./components/Summary";
import Login from "./components/Login";
import { db } from "./firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const App = () => {
  const [newJob, setNewJob] = useState(defaultNewJob);
  const [showNewJobForm, setNewJobForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [edit, setEdit] = useState({
    edit: false,
    id: null,
  });
  //authenticates login page
  function loginAuthentication() {
    setLoginSuccess(true);
  }
  function editJobCard(id) {
    setEdit({ edit: true, id: id }); //state which tracks if its a edit or new job
    setNewJob(allJobs[id]); //sets values of form to old values
    setOpenModal((old) => !old);
  }

  // Get collection data
  const colRef = collection(db, "gamers");
  const [firebaseJobs, setFirebaseJobs] = useState("lmaoo");

  async function getGamers() {
    // grab that snapshot
    const snapshot = await getDocs(colRef);
    // this maps the datas to the list var
    setFirebaseJobs();
    let gamerSnapshot = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setFirebaseJobs(gamerSnapshot);
  }

  //state for adding new job
  const defaultNewJob = {
    company: "",
    position: "",
    location: "",
    notes: "",
    status: "",
    date: "",
  };

  //stores all current jobs
  const [allJobs, setAllJobs] = useState(
    JSON.parse(localStorage.getItem("allJobs")) || []
  );
  function handleJobDelete(id) {
    const updatedJobs = [...allJobs];
    const newJobs = updatedJobs.filter((_, i) => i != id);
    setAllJobs(newJobs);
  }

  function handleJobEdit(id) {
    setAllJobs((prevJobs) =>
      prevJobs.map((job, i) => {
        if (i === id) {
          return {
            ...newJob,
          };
        } else {
          return job;
        }
      })
    );
    setEdit({ edit: false, id: null });
    setNewJob(defaultNewJob); //clear the form and default the state
    setNewJobForm((old) => !old);
    setOpenModal((old) => !old);
  }

  //everytime new job is added, update local storage
  useEffect(() => {
    localStorage.setItem("allJobs", JSON.stringify(allJobs));
  }, [allJobs]);

  //recieves new job data and stores it in state, newJob
  function handleNewJob(event) {
    setNewJob((prevJobData) => {
      return {
        ...prevJobData,
        [event.target.name]: event.target.value,
      };
    });
    const latestJob = newJob;
    // This lets us add shit to the database the id is always randomised.
    addDoc(colRef, {
      company: latestJob.company,
      position: latestJob.position,
      location: latestJob.location,
      notes: latestJob.notes,
      status: latestJob.status,
      date: latestJob.date,
    });
  }

  //uses the upadated new job state to create a new Jobcard Component
  function renderNewJob(event) {
    event.preventDefault();
    //  update all jobs
    if (edit.edit) {
      handleJobEdit(edit.id);
    } else {
      setAllJobs((allPrevJobs) => [...allPrevJobs, latestJob]);
      setNewJob(defaultNewJob); //clear the form and default the state
      setNewJobForm((old) => !old);
    }
  }

  //maps over all jobs and renders the jsx by local storage
  const renderAllJobs = allJobs.map((job, i) => {
    getGamers();
    return (
      <Jobcard
        key={i}
        newJob={job}
        handleJobDelete={() => handleJobDelete(i)}
        editJobCard={() => editJobCard(i)}
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
          <section className="py-12 grid grid-cols-1  md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6 ">
            <button
              className="border-2 border-dashed cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              {" "}
              Add New Job{" "}
            </button>
            {renderAllJobs}
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
