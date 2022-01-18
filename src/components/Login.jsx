import React from "react";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

export default function Login(props) {
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    navigate(`/`);

    signInWithRedirect(auth, provider)
      .then((res) => {
        console.log(res);
        getRedirectResult(auth)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex flex-col text-center justify-center min-h-screen w-full bg-gray-50">
        <div
          className=" hover:shadow-lg focus:shadow-lg transition-all ease-out bg-white mx-auto max-w-max rounded-lg shadow p-2 cursor-pointer"
          onClick={signInWithGoogle}
        >
          signin with google
        </div>
      </div>
    </div>
  );
}
