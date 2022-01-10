import React from 'react'

export default function NewjobForm(props) {
    return (
        <div className= {`${props.showNewJobForm ? "block" : "hidden"} fixed z-10 left-0 top-0 w-full h-full bg-black opacity-70 flex items-center`}> 
            <div className='mx-auto bg-slate-50 border-2 border-black  flex justify-center	 '> 
                <form className='w-6/12' onSubmit={props.renderNewJob}> 
                    <input required onChange={props.handleNewJob} type='text' placeholder='Company' name='company' value={props.newJob.company}/> 
                    <input required onChange={props.handleNewJob} type='text' name='position' placeholder='Position' value={props.newJob.position}/> 
                    <input required type='date' name='date' onChange={props.handleNewJob} value={props.newJob.date}/>
                <input required onChange={props.handleNewJob} type='text' name='location' placeholder='Location' value={props.newJob.location}/>
                    <textarea onChange={props.handleNewJob} type='text' name='notes' placeholder='Notes' value={props.newJob.notes}/>       
                    <select required onChange={props.handleNewJob} name='status' value={props.newJob.status}>
                        <option value='offer'>Offer</option> 
                        <option defaultValue value='awaitingResponse'>Awaiting Response</option> 
                        <option value='rejected'>Rejected</option> 
                    </select>
                    <button className='block'>Add Job</button> 
                </form> 
            </div>
        </div>

    )
}