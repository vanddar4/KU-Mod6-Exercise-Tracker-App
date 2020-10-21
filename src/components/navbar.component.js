// import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom"; 
//Allow us to Link to different routes


//Exporting the Navbar component to App.js and rendering
export default class Navbar extends Component {
  
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          ExcerciseTracker
        </Link>
        <div className='collpase navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>
                View Exercises Log
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>
                Create Exercise Log
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/login' className='nav-link' position='right'>
                Login
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/register' className='nav-link' position='right'>
                Register
              </Link>
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
