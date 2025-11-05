import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';


const GptSearch = () => {
  return (
    <>
      <div className="fixed w-max -z-10">
        <img className="w-screen h-screen object-cover" src={BG_URL} alt="BackgroundImage" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;