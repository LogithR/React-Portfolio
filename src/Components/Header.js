import React from 'react'
import './header.css';
import {FaYoutube} from 'react-icons/fa';
import header from './header.jpg'

const Header = () => {
  return (
    <div id='header'>
    <div className='aboutheader'>
    <header style={{fontSize:50,textAlign:"center"} } img={header}> My Youtube Achievements..<span className='colour'><FaYoutube /></span></header>
    </div>
    </div>
  )
}

export default Header