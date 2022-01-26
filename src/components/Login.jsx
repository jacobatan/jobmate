import React from "react";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

// export default function Login(props) {
//   let navigate = useNavigate();
//   const provider = new GoogleAuthProvider();
//   const signInWithGoogle = () => {
//     signInWithRedirect(auth, provider)
//       .then((res) => {
//         console.log("res");
//         getRedirectResult(auth)
//           .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             console.log("res");

//             const user = result.user;
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             console.log("res");
//           });
//         console.log("res");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <div className="flex flex-col text-center justify-center min-h-screen w-full bg-gray-50">
//         <div
//           className=" hover:shadow-lg focus:shadow-lg transition-all ease-out bg-white mx-auto max-w-max rounded-lg shadow p-2 cursor-pointer"
//           onClick={signInWithGoogle}
//         >
//           signin with google
//         </div>
//       </div>
//     </div>
//   );
// }
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Login;
