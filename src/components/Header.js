import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const showGptSearch = useSelector(store => store.gpt?.showGptSearch);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const menuRef= useRef();

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

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          navigate("/error");
        }); 
    };

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };

    const handleGPTSearch = () => {
      dispatch(toggleGptSearchView());
    }

    const handleProfileImageError = (e) => {
      e.target.src = USER_AVATAR;
    }



    return (
      <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between flex-wrap gap-2">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix Logo" />
        {user && (
          <div className="flex p-2 justify-between">
            {showGptSearch && (
              <select
                className="p-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-4 mx-4 text-white bg-yellow-500 h-12 flex items-center rounded-md"
              onClick={handleGPTSearch}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <div ref={menuRef} className="relative ">
              <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="cursor-pointer"
            >
              {user.photoURL ? (
                <img
                  className="w-12 h-12  md:block"
                  src={user.photoURL}
                  alt="User Avatar"
                  onError={handleProfileImageError}
                />
              ) : (
                <img
                  className="w-12 h-12 md:block"
                  src={USER_AVATAR}
                  alt="User Avatar"
                />
              )}
            </button>

            <div
              className={`absolute -mt-[6px] top-full right-0 z-[60] rounded-md bg-gray-900 w-40
                    transition-all duration-300 ease-out origin-top
                    ${
                      dropdownOpen
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`}
            >
              <ul className="text-white text-center cursor-pointer text-sm">
                {/* <li className="py-2 hover:bg-gray-600">Profile</li> */}
                <li className="py-2 hover:bg-gray-600" onClick={handleSignOut}>
                  Sign Out
                </li>
              </ul>
            </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Header;