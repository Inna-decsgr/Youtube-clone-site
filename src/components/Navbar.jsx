import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from "react-icons/bs";
import {useNavigate, useParams, Link} from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";


export default function Navbar() {
  const [text, setText] = useState('');
  const {keyword} = useParams();
  const navigate = useNavigate();
  const {darkMode, toggleDarkMode} = useDarkMode();
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`)
  }
  useEffect(() => {
    setText(keyword || '') 
  }, [keyword])
  
  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-400 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand'/>
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input 
          className='w-7/12 p-2 outline-none rounded-l-xl pl-7'
          type="text" 
          placeholder='검색'
          value={text}
          onChange={handleChange}
        />
        <button className='button px-4 rounded-r-xl'><BsSearch /></button>
      </form>
      <button className='pr-5' onClick={toggleDarkMode}>
        {!darkMode && <BsMoon className='moon text-3xl' />}
        {darkMode && <BsSun className='sun text-3xl'/>}
      </button>
    </header>
  );
}

