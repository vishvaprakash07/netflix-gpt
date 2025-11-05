import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';


const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-max -z-10">
        <img
          className="w-screen h-full"
          src={BG_URL}
          alt="BackgroundImage"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;