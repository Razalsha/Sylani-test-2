import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import DoctorSchedule from './DoctorSchedule';
import Patient from'./Patient'
import Appoint from './Appoint';
import Book from './Book';
import login from './Login';
import Login from './Login';
import Regiester from './Regiester';
import About from './About';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-schedule" element={<DoctorSchedule />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/Appoint" element={<Appoint />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/Regiester" element={< Regiester />} />
        <Route path="/About" element={< About />} />
      </Routes>
    </Router>
  );
};

export default App;