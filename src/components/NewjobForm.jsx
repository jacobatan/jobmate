import React from 'react'

export default function NewjobForm(props) {
    return (
        <div className='bg-white border-2 border-black  flex justify-center	 '> 
            <form className='w-6/12' onSubmit={props.handleNewJob}> 
                <label> <input type='text' placeholder='Company' name='company'/> </label>
                <label> <input type='text' name='position' placeholder='Position'/> </label>

                <label> <textarea type='text' name='notes' placeholder='Notes'/> </label>

                <label> 
                    <select name='status'>
                        <option value='offer'>Offer</option> 
                        <option defaultValue value='awaitingResponse'>Awaiting Response</option> 
                        <option value='rejected'>Rejected</option> 
                    </select> 
                </label>

                <button className='block'>Add Job</button> 
            </form> 
        </div>
    )
}