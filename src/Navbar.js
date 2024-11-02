import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Dostris</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link px-4" to="/">Home</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link px-4" to="/doctor-schedule">Doctor Schedule</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4" to="/Patient">Patient</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <Link  to="/Login"><button className='btn btn-primary mx-3' >Login</button></Link>
      <Link  to="/Regiester"><button className='btn btn-primary mx-3' >Regiester</button></Link>

    </nav>
  );
};

export default Navbar;