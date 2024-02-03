import { useState } from "react";
import React from 'react';
import WeatherInfo from '../cards/WeatherInfo';
import useFetch from '../../hooks/useFetch';
import WelcomeDiv from "../cards/WelcomeDiv";


const Home = () => {
  const { weather, updateSearchTerm } = useFetch();
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSearchTerm(searchInput);
    setSearchInput('');
  };

  return (
    <div className='bg-gradient-dark-blue min-h-screen p-10 md:p-52'>
      <div className='grid justify-center w-full text-center py-10'>
        <form className='flex justify-center border border-light rounded py-1 px-2 text-white' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Search City'
            name='searchCity_Input'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='bg-transparent text-white focus:outline-none'
          />
          <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" type='submit'>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
      </div>
      <div className='rounded p-0 md:p-5'>
        {weather && Object.keys(weather).length === 0 && <WelcomeDiv/>}
      </div>
      <div className='rounded p-0 md:p-5'>
        {weather && Object.keys(weather).length !== 0 && <WeatherInfo prop={weather} />}
      </div>
    </div>
  );
};

export default Home;
