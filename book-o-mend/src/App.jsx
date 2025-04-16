import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage';
import MainHeader from './components/MainHeader';

function App(){

  return(
    <>
    <div class="relative h-screen bg-white overflow-hidden">
  <svg class="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 800 400" fill="none" preserveAspectRatio='none'> 
    <path fill="#ffb74d" d="M0,100 C200,200 600,0 800,100 L800,400 L0,400 Z" />
  </svg>
  <div className='relative z-10'>
  <MainHeader></MainHeader>
  <MainPage></MainPage>
  </div>
  

    </div>


    </>
  );
}

export default App;