import React, {useState} from "react";
import Header from './components/Header'
import NewjobForm from "./components/NewjobForm";

const App = () => {

  //state for adding new job 
  const [newJob, setNewJob] = useState({
    company: '', 
    position: '',
    notes: '',
    status: ''
  })
  
  //recieves new job data and stores it in state  
  function handleNewJob(event) {
    event.preventDefault()
    const {company, position, notes, status } = event.target
    setNewJob({ 
        company: company.value, 
        position: position.value, 
        notes: notes.value, 
        status: status.value
      })
    console.log(newJob)
  }

  return (
    <div className="p-5">
      <Header/>
      <NewjobForm handleNewJob={handleNewJob}/>
    </div>
  )
};

export default App;
