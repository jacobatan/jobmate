import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import NewjobForm from "./components/NewjobForm";
import Summary from "./components/Summary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { db, auth } from "./firebase";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import JobcardSkeleton from "./components/JobcardSkeleton";

const App = () => {
  let navigate = useNavigate();
  // AUTH
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
    emailVerified: "",
    uid: "null",
  });

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentLoggedInUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid,
        });
      } else {
        navigate(`/login`);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //state for adding new job
  const defaultNewJob = {
    company: "",
    position: "",
    location: "",
    notes: "",
    status: "awaitingResponse",
    date: "",
  };
  const [newJob, setNewJob] = useState(defaultNewJob);
  const [showNewJobForm, setNewJobForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(true);
  const [edit, setEdit] = useState({
    edit: false,
    id: null,
    fbid: null,
  });
  const [summary, setSummary] = useState({
    offers: 0,
    awaitingResponse: 0,
  });

  //stores all current jobs
  const [allJobs, setAllJobs] = useState(
    JSON.parse(localStorage.getItem("allJobs")) || []
  );

  const [firebaseData, setFirebaseData] = useState();

  const gColRef = collection(db, "gamers");

  useEffect(() => {
    async function getGamers() {
      // grab that snapshot
      const snapshot = await getDocs(gColRef);
      // this maps the datas to the list var
      let gamerSnapshot = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setFirebaseData(gamerSnapshot);
    }
    getGamers();
  }, [showNewJobForm, localJobDelete]);

  // uses the updated new job state to create a new Jobcard Component

  function renderNewJob(event) {
    event.preventDefault();
    const latestJob = newJob; //  update all jobs

    if (edit.edit) {
      handleJobEdit(edit.id, edit.fbid);
    } else {
      setAllJobs((allPrevJobs) => [...allPrevJobs, latestJob]);
      setNewJob(defaultNewJob); //clear the form and default the state
      setNewJobForm((old) => !old);
      addDoc(gColRef, {
        company: latestJob.company,
        position: latestJob.position,
        location: latestJob.location,
        notes: latestJob.notes,
        status: latestJob.status,
        date: latestJob.date,
        userID: currentLoggedInUser.uid,
      });
    }
  }

  //recieves new job data and stores it in state, newJob
  function handleNewJob(event) {
    // This lets us add shit to the database the id is always randomised.
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
    const offers = allJobs.filter((job) => job.status === "offer").length;
    const awaitingResponse = allJobs.filter(
      (job) => job.status === "awaitingResponse"
    ).length;

    setSummary({ offers: offers, awaitingResponse: awaitingResponse });
  }, [allJobs]);

  function localJobDelete(id) {
    const updatedJobs = [...allJobs];
    const newJobs = updatedJobs.filter((_, i) => i != id);
    setAllJobs(newJobs);
  }

  function handleJobEdit(id, fbid) {
    const docRef = doc(db, "gamers", fbid);
    updateDoc(docRef, {
      company: newJob.company,
      position: newJob.position,
      location: newJob.location,
      notes: newJob.notes,
      status: newJob.status,
      date: newJob.date,
    });
    // setAllJobs((prevJobs) =>
    //   prevJobs.map((job, i) => {
    //     if (i === id) {
    //       return {
    //         ...newJob,
    //       };
    //     } else {
    //       return job;
    //     }
    //   })
    // );
    setEdit({ edit: false, id: null });
    setNewJob(defaultNewJob); //clear the form and default the state
    setNewJobForm((old) => !old);
    setOpenModal((old) => !old);
  }

  function editJobCard(id, fbid) {
    setEdit({ edit: true, id: id, fbid: fbid }); //state which tracks if its a edit or new job
    setNewJob(allJobs[id]); //sets values of form to old values
    setOpenModal((old) => !old);
  }

  //maps over all jobs and renders the jsx
  let skeletonArr = new Array(5).fill("");
  const renderAllJobs = firebaseData
    ? firebaseData
        ?.filter((job) => job.userID == currentLoggedInUser.uid)
        ?.map((job, i) => {
          return (
            <Jobcard
              key={i}
              id={i}
              newJob={job}
              localJobDelete={() => localJobDelete(i)}
              editJobCard={editJobCard}
            />
          );
        })
    : skeletonArr.map((job, i) => {
        return <JobcardSkeleton />;
      });

  return (
    <div className=" h-screen ">
      <div>
        <Header photoURL={currentLoggedInUser.photoURL} />
        <Summary
          summary={summary}
          photoURL={currentLoggedInUser.photoURL}
          displayName={currentLoggedInUser.displayName}
        />
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
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="my-2 fa-2x block mx-auto"
            />
          </button>
          {renderAllJobs}
        </section>
      </div>
    </div>
  );
};

export default App;
