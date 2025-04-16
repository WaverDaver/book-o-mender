import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage';
import MainHeader from './components/MainHeader';

function App(){

  return(
    <>
    <div>
  <MainHeader></MainHeader>
  <MainPage></MainPage>

    </div>


    </>
  );
}

export default App;