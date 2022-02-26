import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import logo from "../img/jobmate.png";

// Configure Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBFo5NtfjwLsT709eSRXsWxgQc2d87avmw",
  authDomain: "jobmate-22542.firebaseapp.com",
  projectId: "jobmate-22542",
  storageBucket: "jobmate-22542.appspot.com",
  messagingSenderId: "410639253066",
  appId: "1:410639253066:web:faab68ad55df61938cb0b3",
  measurementId: "G-9K362S8F2K",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Login() {
  return (
    <div className=" notica-font flex text-[#1f2d3d] bg-white">
      <div className="lg:w-2/3 xs:w-full">
        <div className=" space-y-5">
          <img src={logo} alt="" className="w-1/5" />
          <div className=" space-y-5 mx-auto lg:w-1/2 xs:w-full px-4">
            <div className="text-5xl font-bold pt-32">
              Create your account! Completely free, forever.
            </div>
            <div className="">
              Start recording your first few job offers within minutes!
            </div>
            <form className="flex flex-col ">
              <label for="email" className="font-bold ">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value=""
                className="hover:cursor-not-allowed mb-10"
                data-tooltip-target="tooltip-default"
              />

              <label for="lname" className="font-bold">
                Last name:
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                value=""
                className="hover:cursor-not-allowed mb-20"
                data-tooltip-target="tooltip-default"
              />
              <div
                id="tooltip-default"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Not yet implemented :(
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                data-tooltip-target="tooltip-default"
                type="button"
                className="hover:cursor-not-allowed text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium  text-lg px-5 py-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
            </form>
            <p className="text-center">OR</p>
            <div className="w-full">
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/3 h-screen lg:block sm:hidden">
        <figure className="h-full w-full object-cover lg:block xs:hidden">
          <img
            src="https://images.unsplash.com/photo-1611945440540-98c417ddabd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="h-full w-full object-cover lg:block xs:hidden"
          />
        </figure>
      </div>
    </div>
  );
}

export default Login;
