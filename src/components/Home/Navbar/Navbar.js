import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Navbar = () => {
  const navStyle = {
    color: 'tomato'
  }
  const home = {
    backgroundColor: '#5d63dc',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
  }
  const [loggedInUser] = useContext(UserContext)
  console.log(loggedInUser)
  

  return (

    <div class="container" id="home">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <Link class="navbar-brand logo" to="/">Retro<span className="logo-title">Blog</span></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav f-right ml-auto nav-item">
            <li class="nav-item">
              <Link class="nav-link" to="/" style={navStyle}>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle} to="/features" tabindex="-1">All Blogs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle} to="/contact" tabindex="-1">Contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={navStyle} to="/dashboard/addPost" tabindex="-1">Dashboard</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " style={navStyle} to="/about" tabindex="-1">About Us</Link>
            </li>
            <li class="nav-item ">
              {
                loggedInUser.email ? 
                <Link class="nav-link" style={home} to="/login" tabindex="-1">{loggedInUser.name}</Link> : 
                <Link class="nav-link" style={home} to="/login" tabindex="-1">login</Link>
              }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;