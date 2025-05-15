import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage';
import MainHeader from './components/MainHeader';
import { Route, Routes } from 'react-router-dom';
import MainPageView from './components/MainPage';
import Recommendation from './components/Recommendation';

function App(){

  return(
    <main>
      <Routes>
        <Route path='/' element={<MainPageView></MainPageView>}></Route>
        <Route path='/recommender' element={<Recommendation></Recommendation>}></Route>
      </Routes>
    </main>
  );
}

export default App;