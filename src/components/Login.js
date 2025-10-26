import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //Sign Up and Sign In Logic
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User Signed Up: ", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://lh3.googleusercontent.com/a/ACg8ocLZLDsVkXTDVODE-8pD9uz6uUMm7n5BAtfBMP6pgkF_ruPszdefHQ=s288-c-no",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage("Profile update error: " + error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User Signed In: ", user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-max">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/AU-en-20251013-TRIFECTA-perspective_9f2fb586-1f80-444f-a96b-6f3260fcc86e_medium.jpg"
          alt="BackgroundImage"
        />
      </div>
      <form
        className="w-3/12 absolute rounded-md bg-opacity-80 text-white p-12 bg-black my-40 mx-auto right-0 left-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold mb-6">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            className="p-2 my-2 rounded-sm bg-gray-700 w-full"
            placeholder="Name"
          />
        )}
        <input
          type="text"
          ref={email}
          className="p-2 my-2 rounded-sm text-sm bg-gray-700 w-full"
          placeholder="Email"
        />
        <input
          type="password"
          ref={password}
          className="p-2 my-2 rounded-sm text-sm bg-gray-700 w-full"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold p-1 text-sm">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 text-sm">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
          <span
            onClick={toggleSignInForm}
            className="text-white cursor-pointer"
          >
            {isSignInForm ? " Sign Up Now" : " Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
