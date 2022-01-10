import React from 'react'

export default function NewjobForm(props) {
    return (
        <div className='bg-white border-2 border-black  flex justify-center	 '> 
            <form className='w-6/12' onSubmit={(e) => e.preventDefault()}> 
                <input onChange={props.handleNewJob} type='text' placeholder='Company' name='company' value={props.newJob.company}/> 
                <input  onChange={props.handleNewJob} type='text' name='position' placeholder='Position' value={props.newJob.position}/> 
                <input onChange={props.handleNewJob} type='text' name='location' placeholder='Location' value={props.newJob.location}/>
                <textarea onChange={props.handleNewJob} type='text' name='notes' placeholder='Notes' value={props.newJob.notes}/>       
                <select onChange={props.handleNewJob} name='status' value={props.newJob.status}>
                    <option value='offer'>Offer</option> 
                    <option defaultValue value='awaitingResponse'>Awaiting Response</option> 
                    <option value='rejected'>Rejected</option> 
                </select>
                <button className='block' onClick={props.renderNewJob}>Add Job</button> 
            </form> 

        </div>
    )
}