import React, { useState } from "react";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import NewjobForm from "./components/NewjobForm";

const App = () => {
  let foo = new Array(30).fill("bar"); // Testing...
  console.log(foo);
  //state for adding new job
  const [newJob, setNewJob] = useState({
    company: "",
    position: "",
    notes: "",
    status: "",
  });

  //recieves new job data and stores it in state
  function handleNewJob(event) {
    event.preventDefault();
    const { company, position, notes, status } = event.target;
    setNewJob({
      company: company.value,
      position: position.value,
      notes: notes.value,
      status: status.value,
    });
    console.log(newJob);
  }

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <NewjobForm handleNewJob={handleNewJob} />

      {/* main card */}

      <section className="pt-12 grid grid-cols-1 md:max-w-sm md:grid-cols-2 lg:max-w-7xl  xl:grid-cols-3  mx-auto gap-x-6 gap-y-6">
        {foo.map((foobar, i) => (
          <Jobcard key={i} />
        ))}
        {/* ^^^^ temporary soln for testing purposes :) */}
      </section>
    </div>
  );
};

export default App;
