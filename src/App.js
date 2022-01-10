import React from "react";
import Header from './components/Header'
import NewjobForm from "./components/NewjobForm";

const App = () => {
  return (
    <div className="p-5">
      <Header/>
      <NewjobForm/>
    </div>
  )
};

export default App;
