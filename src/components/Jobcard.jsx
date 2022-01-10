import React from "react";

const Jobcard = () => {
  return (
    // bg-red-100 for rej, bg-green-100 for acc, bg-white for pending
    <div className="p-6 shadow-md rounded-xl bg-white cursor-pointer hover:bg-gray-200 transform transition ease-out ">
      {/* Card Header*/}
      <div className="flex justify-between items-center pb-3">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-black ">
            <img
              className="w-10 scale-50"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </div>
          <p>Google</p>
        </div>
        <p className="text-sm text-gray-400">4 Jan</p>
      </div>
      {/* Job title + loc */}
      <div className="pb-5">
        <h1 className="text-xl font-bold">Frontend Developer</h1>
        <p className="text-sm font-semibold">Auckland, New Zealand</p>
      </div>

      {/* Tags */}
      <div className="space-x-1 pb-7">
        <button className="rounded-xl bg-blue-200 py-0.5 px-2 text-sm text-blue-500">
          Jnr. lvl
        </button>
        <button className="rounded-xl bg-green-200 py-0.5 px-2 text-sm text-green-500">
          Full-time
        </button>
      </div>

      <p className="text-sm text-gray-400 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In harum
        numquam ducimus excepturi aspernatur? Debitis sapiente officia ex eos
        dolorum architecto, id quasi nihil velit ea atque, odit, nisi culpa.
      </p>
    </div>
  );
};

export default Jobcard;
