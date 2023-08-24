import React from 'react'
import back from './home.jpg'
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {FaHandSparkles, FaYoutube} from 'react-icons/fa';
import './home.css'

const Home = () => {

    function handleNameChange(){
        const names=["FRONTEND DEVELOPER","YOUTUBER"];
        const int=Math.floor(Math.random()*3);
        return names[int];
      }

  return (
    <div id='home'>
    <div className='body'>
    <body img src={back} alt='back'>
        
        <h1 className='home'><FaHandSparkles /> This Is <span className='span'>{handleNameChange()}</span> <emp className='emp'>Logith</emp>..<span className='heart'><BsFillSuitHeartFill /></span></h1><br></br> 
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       
     </body>
    </div>
    </div>
  )
}

export default Home