import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import SwipeButton from "./components/SwipeButton";
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
      <div>
        {/* <SwipeButton/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
};

export default App;