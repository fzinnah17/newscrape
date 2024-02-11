import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
      <div>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
};

export default App;