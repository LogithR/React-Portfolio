import React from 'react'
import './contact.css'



const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
      <div id='contact'>
      <div className='position'>
       
      <form onSubmit={onSubmit} action='mailto:logithramesh4444@gmail.com'>
        <div className="mb-3"><br></br><br></br><br></br><br></br><br></br>
        <h1 className='conhead'>CONTACT ME</h1><br></br><br />
          <label className="form-label" htmlFor="name">
            Name :- 
          </label> 
          <input className="form-control" type="text" id="name" required />
        </div><br></br>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email :-
          </label>
          <input className="form-control" type="email" id="email" required />
        </div><br></br>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message :-
          </label>
          <textarea className="form-control" id="message" required />
        </div><br></br>
        <button><a href='mailto:logithramesh4444@gmail.com'> Send Mail</a></button>
      </form>
      </div>
      </div>
    
  )
}
export default Contact