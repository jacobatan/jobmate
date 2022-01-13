import React from "react"

const Summary = (props) => {

    const totalActiveOffers = props.summary.offers + props.summary.awaitingResponse
    const offersWidth = totalActiveOffers ? (props.summary.offers / totalActiveOffers) * 100 : 50;
    const awaitWidth = 100-offersWidth;
    const offersStyles = {
        width: `${offersWidth}%`
    }
    const awaitStyles = {
        width: `${awaitWidth}%`
    }

    return(
        //main summary div
        <div className='w-full sm:mx-auto shadow-lg rounded-md transform transition-all ease-out bg-white md:max-w-screen-sm lg:max-w-screen-md  py-2 sm:py-6 sm:flex items-center justify-between px-2'>
            
            {/* stats*/}
            <div className=" flex flex-col text-center sm:w-2/5 sm:my-6 sm:ml-8 transform transition-all ease-out ">
                {/* total jobs */}
                <div className="bg-white rounded-lg my-1 w-full shadow py-2"> 
                    <h3 className="text-sm leading-6 font-medium text-gray-400">Active Applications</h3>
                    <p className="text-3xl ">{totalActiveOffers}</p>
                    <div className="flex justify-between italic text-xs "> 
                        <p className=" text-green-300 mx-auto  ">offers</p>
                        <p className="text-orange-300 mx-auto "> awaiting responses</p>
                    </div>

                </div>
 
                {/* offers & awaiting response */}
                <div className="flex text-sm leading-6 text-center font-medium mt-2">
                    <div style={offersStyles} className={`relative bg-green-300 hover:shadow-md rounded-lg mr-1 px-2 py-2 sm:py-4 transition-all ease-out `}>
                        <p >{props.summary.offers} </p>
                    </div>

                    <div style={awaitStyles} className={`relative  bg-orange-300 hover:shadow-md rounded-lg mr-1 px-2  py-2 sm:py-4 transition-all ease-out `}>
                        <p>{props.summary.awaitingResponse}</p>
                    </div>
                    
                </div>
            </div>

            {/* profile picture and name */}
            <div className='hidden sm:inline-block mx-auto'> 
                <img className=" w-28 h-28 object-cover rounded-full" src="https://image.cnbcfm.com/api/v1/image/106926995-1628885360355-elon2.jpg?v=1639579996" alt="photo of chad" />
                <h1 className="text-center font-bold text-xl ">Hello, Elon!</h1>
            </div>

        </div>
    )
}

export default Summary;