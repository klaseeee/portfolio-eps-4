import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsSubmitted(true);
    })
  }

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:muklasn20@gmail.com" className='p-text'>Email Me</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: 081318631593 " className='p-text'>Chat Me</a>
        </div>
      </div>

    {!isSubmitted ? 
      (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} />
          </div>

          <div>
            <textarea 
              name="message"
              // id="" 
              // cols="30" 
              // rows="10"
              placeholder='Your Message'
              value={message}
              onChange={handleChangeInput}
              className="p-text"
            />
          </div>

          <button type='button' className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
      ) : 
      (
        <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )
    }
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  'app__whitebg'
)