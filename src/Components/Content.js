import React, { useState } from 'react'
import'./content.css'
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {FaHandSparkles, FaYoutube} from 'react-icons/fa';
import {FaHandPointDown } from 'react-icons/fa';
import { FaHandPointRight } from 'react-icons/fa';
import {RxReload} from 'react-icons/rx';
import content from './content.jpg'
const Content = () => {
    
    function handleNameChange(){
      const names=["Positive","Hardworking","Phoenix","Tallented"];
      const int=Math.floor(Math.random()*3);
      return names[int];
    }
     
    
    const [count, setCount]=useState(1313);
    function incrementCount(){
      setCount(preCount => count+1)
    }
    function reload(){
      setCount(1313)
    }
  return (
    <div id='about'>
    <div className='div'>
    
      <hr></hr>
      <hr></hr>
      <div >
      <h1 className='typewrite'><FaHandSparkles /> This Is <span className='span'>{handleNameChange()}</span> <emp className='emp'>Logith</emp>..<span className='heart'><BsFillSuitHeartFill /></span></h1><br></br>      
      <p className='para'> My Subscribers Count as of Now is ..<span className='bold'>{count}</span></p> <br></br>
      <h1 className='sub'>Please Support Me By Just Hitting this Subscribe Button <span className='hand'><FaHandPointRight />..</span><button onClick={incrementCount}className='space'>Subscribe</button></h1><br></br>
      
      <h2 className='button1'>Click The Below Image To Redirect To My Channel Page <br></br><span className='downcolour'><FaHandPointDown /></span></h2>
      </div>
  </div>
  </div>
  )
}

export default Content