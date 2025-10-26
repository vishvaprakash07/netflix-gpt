import Login from './Login';
import Browse from './Browse';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const { uid, email, displayName, photoURL } = user;
          console.log("User is signed in: ", { uid, email, displayName, photoURL });
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      });
    }, []);

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};
export default Body;