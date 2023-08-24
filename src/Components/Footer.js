import React from 'react'
import './footer.css'
const Footer = () => {
    const year=new Date();
  return (
    <div className='copy'>  
        <footer>Copyright &copy; {year.getFullYear()}<span className='name'><b>Logith R</b></span>
        
  </footer>
  
  </div>
  )
}

export default Footer

