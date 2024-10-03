import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import TaskPage from './components/TaskPage';
import ThemeToggle from './components/ThemeToggle';
import "./App.css"


const App = () => {
  return (

    <>
      <div className="log">
        <p>Login/Register</p>
      </div>
      <nav>
        <div className="icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Astra_logo.svg" alt="" />
          <p>ASTRA</p>
        </div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/task">Task Page</Link>
          <p>Services</p>
          <p>About</p>
          <p>Reviews</p>
          <p>Why Us</p>
        </div>
        <ThemeToggle />
         

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </>
  );
};

export default App;
