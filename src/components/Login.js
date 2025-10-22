import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };


    return <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/AU-en-20251013-TRIFECTA-perspective_9f2fb586-1f80-444f-a96b-6f3260fcc86e_medium.jpg" alt="BackgroundImage"/>
        </div>
        <form className='w-3/12 absolute rounded-md bg-opacity-80 text-white p-12 bg-black my-40 mx-auto right-0 left-0'>
            <h1 className='text-3xl font-bold mb-6'>Sign {isSignInForm ? 'In' : 'Up'}</h1>
            { !isSignInForm && (<input type="text" className='p-2 my-2 rounded-sm bg-gray-700 w-full' placeholder="Name"/>)}
            <input type="text" className='p-2 my-2 rounded-sm bg-gray-700 w-full' placeholder="Email"/>
            <input type="password" className='p-2 my-2 rounded-sm bg-gray-700 w-full' placeholder="Password"/>
            <button className='p-4 my-6 w-full bg-red-700 rounded-lg text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='text-gray-400 text-sm'>{isSignInForm ? 'New to Netflix?' : "Already registered?"} <span onClick={toggleSignInForm} className='text-white cursor-pointer'>{isSignInForm ? 'Sign Up Now' : 'Sign In'}</span></p>
        </form>
    </div>;
};
export default Login;