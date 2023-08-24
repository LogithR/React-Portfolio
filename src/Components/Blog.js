import React from 'react'
import profile from './Blog.jpg'
import './blog.css'
import {FaArrowRight, FaFacebook, FaGithub, FaHandPointDown, FaHandPointUp, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
import img from './blogbackground.jpg'


const Blog = () => {
    
  return (
    <div id='blog' >
      <div className='top'><h2>To Go to Top..<a href='#nav' className='uparrow'><FaHandPointUp /></a></h2></div>
        
    <div className='blogtext'>
    
        <h1>Hi, I'm <span className='head'>Logith Ramesh</span></h1><br />
        <h3>
        <b className='career'>CAREER OBJECTIVE :-</b><br /><br />
            Hi I'm <span className='channel' >Logith.</span> My main objective is to become a Versatile and Meticulous person in my field.<br />
            And my strength is <span className='career'>Hardworker</span> and mainly a <span className='career'>Good Observer</span>. My Most exceptional talent is<br />
            <span className='channel'>"LEADERSHIP"</span>. I can easily adapt myself to the situation occuring . And I'm the person of <br />
            <span className='channel'>SELF-DETERMINATION</span> , and i will give my full potential for the upliftment of the company's<br />
            growth as well as personal growth.<br /><br />
            <span className='career'>My Technical Skills are</span><br></br><br></br>
            <ol className='list'>
                <li className='bg'>
                 JAVA <span>--------80%</span>
               </li>
               <li className='bg'>
                 HTML <span>-------80%</span>
               </li>
               <li className='bg'>
                 CSS <span>----------80%</span>
               </li>
               <li className='bg'>
                 JS <span >------------50%</span>
               </li>
               <li className='bg'>
                 REACT JS <span >----70%</span>
               </li>
              </ol><br />
            I'm the person with exceptional talent and a <span className='youtuber'>Youtuber..<FaYoutube /></span><br />
            My channel name is <span className='channel'>logInfo</span> and i have got <span className='channel' >1.34k</span> Subscribers.<br></br>
            Just have a look at my channel. To reach my channel press this icon ..<FaArrowRight/> <a className='youtuber' href='https://www.youtube.com/@logInfo' target='_blank' ><FaYoutube /></a><br></br><br />
            <FaHandPointDown/> Click the Below Icons to Follow me..<br /><br />
            <a href='https://www.linkedin.com/in/logith-r-7a1293216' target='_blank'><span className='links'><FaLinkedin /></span></a>..
            <a href='https://instagram.com/_crazy_logi_?igshid=ZDdkNTZiNTM=' target='_blank'><span className='links'><FaInstagram /></span></a>..
            <a href='https://www.facebook.com/logith.logi.1' target='_blank'><span className='links'><FaFacebook/></span></a>.. 
            <a href='https://github.com/LogithR'target='_blank'><span className='links'><FaGithub /></span></a>..

           
            
          </h3>
          
    </div>
    
    <div className='blogpic'>
        <img src={profile} alt='blog' className='pic' />
        
        </div>
        
    
    
    </div>
  )
}

export default Blog