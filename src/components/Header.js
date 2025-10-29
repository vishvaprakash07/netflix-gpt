import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });

      return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          navigate("/error");
        }); 
    };


    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10">
        <img
          className="w-44"
          src={LOGO}
          alt="Netflix Logo"
        />
        {user && (
          <div className="flex p-2">
            {user.photoURL ? (
              <img
                className="w-12 h-12"
                src={user.photoURL}
                alt="User Avatar"
              />
            ) : (
              <img
                className="w-12 h-12"
                src={USER_AVATAR}
                alt="User Avatar"
              />
            )}
            <button
              onClick={handleSignOut}
              className="text-white bg-red-600 px-2 rounded-md ml-4"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
};

export default Header;