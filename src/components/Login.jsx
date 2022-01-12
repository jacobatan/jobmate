import React from 'react';

export default function Login(props) {
    return (
        <div> 
            <div className='flex flex-col text-center justify-center min-h-screen w-full bg-gray-50'> 
                <div className=' hover:shadow-lg focus:shadow-lg transition-all ease-out bg-white mx-auto max-w-max rounded-lg shadow p-2 cursor-pointer' onClick={props.loginSuccess}> 
                    <p className='tracking-wide text-xs'>LOGIN WITH GOOGLE  </p> 
                </div>
            </div>
        </div>
    )
}