import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log("User signed out successfully");
          navigate("/");
        }).catch((error) => {
          // An error happened.
          console.error("Error signing out: ", error);
        }); 
    };


    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
                src="https://occ-0-8326-2567.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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