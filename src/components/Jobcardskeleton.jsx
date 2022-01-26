const JobcardSkeleton = () => {
  return (
    <div className="flex flex-col p-6 shadow-md rounded-xl bg-white cursor-pointer hover:shadow-2xl transform transition mx-2 ease-out ">
      {/* Card Header*/}
      <div className="flex justify-between items-center pb-3">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-gray-300 animate-pulse ">
            <div className="w-10 h-10 scale-5" />
          </div>
          <div className="w-20 rounded-md h-6 bg-gray-300 animate-pulse" />
        </div>
        <div className="w-12 h-6 rounded-md bg-gray-300 animate-pulse" />
      </div>
      {/* Job title + loc */}
      <div className="pb-5 space-y-2">
        <div className="w-36 h-6 rounded-md bg-gray-300 animate-pulse" />
        <div className="w-7/8 h-6 rounded-md bg-gray-300 animate-pulse" />
        <div className="w-2/3 h-6 rounded-md bg-gray-300 animate-pulse" />
      </div>

      {/* Tags */}
      <div className="hidden sm:inline-block space-x-1 pb-7">
        <button className={`rounded-xl  py-0.5 px-2 text-sm `}></button>
      </div>

      <p
        className="hidden sm:block text-sm 
      text-gray-400 "
      ></p>

      {/* call to actoin */}
      <div className="self-end"></div>
    </div>
  );
};

export default JobcardSkeleton;
