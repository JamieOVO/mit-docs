import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Ebss from './screens/ebss/Ebss';
import Home from './screens/home/Home';
import Smhc from './screens/smhc/Smhc';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smart-meter-troubleshooting-tool" element={<Smhc />} />
          <Route path="/winter-support-tool" element={<Ebss />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
