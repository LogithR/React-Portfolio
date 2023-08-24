import React from 'react'
import logo from './logo.png'
import Login from './Login'



const Navbar = () => {
  return (
    <div id='nav'>
    <div class="flex-container">
  <h1 class="logo"><a href="#"><img src={logo} className='Channel-logo' alt='channel'></img></a></h1>
  <p></p>
  <ul class="navigation">
    <li><a href="#">Home</a></li>
    <li><a href="#header">About</a></li>
    <li><a href="#blog">Blog</a></li>
    <li><a href="#contact">Contact</a></li>
    <button id="myButton" class="float-left submit-button" >Login</button>


  </ul>
</div>
</div>
  )
}

export default Navbar;