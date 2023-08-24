import React from 'react'
import './navbar.css'
import profile from './profile.JPG'
import './YoutubeEmbed.css'
import { FaHandPointUp } from 'react-icons/fa'

const YoutubeEmbed = () => {
  return (
    <div className='flex'>
      
      <iframe align='right' width="500" height="315" src="https://www.youtube.com/embed/j1dTQvXfcxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <a href='https://www.youtube.com/@logInfo' target='_blank'><img className='link' src={profile} alt='porfile' width="500" height="315" /></a>
      <iframe align='left' width="500" height="315" src="https://www.youtube.com/embed/ZuHh8HKLvpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h1 className='lk'><h1>logInfo</h1></h1>
      <h1 className='videos'>Total Videos Uploaded - 150</h1><h1 className='up'>Go To Top..<a href='#nav' className='uparrow'><FaHandPointUp /></a></h1>
    </div>
  )
}

export default YoutubeEmbed