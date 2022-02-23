import React, { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Header = ({ photoURL }) => {
  const [displayProfileOptions, setProfileOptions] = useState(false);

  function toggleProfileOptions() {
    setProfileOptions((old) => !old);
  }

  return (
    <div className="w-full border-b py-4 mb-4 flex justify-between">
      <h1 className="text-xl font-medium ml-8">JobMate</h1>
      <div onClick={toggleProfileOptions} className="relative">
        {photoURL ? (
          <img
            className="w-10 h-10 object-cover rounded-full mr-20 cursor-pointer"
            src={photoURL}
          />
        ) : (
          <div className="w-10 h-10 rounded-full mr-20 bg-gray-300 animate-pulse" />
        )}
        {displayProfileOptions && (
          <div className="absolute flex flex-col shadow-sm bg-white z-10 min-w-max">
            <span className="p-4 w-max" onClick={() => signOut(auth)}>
              Logout
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
