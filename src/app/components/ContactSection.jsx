import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AiOutlineMail } from 'react-icons/Ai'
import { BsSendCheck } from 'react-icons/Bs'


export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('contact_service', 'contact_form', form.current, '-qDI4dvV-5_y28-od')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }

  const handleSubmit = () => {
    setFormSubmitted(true)
    setFormValues({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id='contact' className='content-area'>
      <h3 id='contact-h3'>Contact <AiOutlineMail id='email-icon'/></h3>

      <div id='contact-contents'>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>

            {formSubmitted && 
              <div className='submit-confirmation'>
                <BsSendCheck className='submit-icon' />
                <p>
                  Thank you for reaching out, talk to you soon!
                </p>
              </div>
            }

            <label className='form-label'>Name</label>
            <input 
              className='form-input' 
              type='text' 
              name='from_name' 
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />

            <label className='form-label'>Email</label>
            <input 
              className='form-input' 
              type='email' 
              name='from_email' 
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />

            <label className='form-label'>Message</label>
            <textarea 
              name='message'
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />

            <input 
              className='form-submit' 
              type='submit' 
              value='Send' 
              onClick={handleSubmit}
            />
          </form>

        <p>
            Thank you for taking the time to explore my corner of the internet. I genuinely 
            appreciate your interest in my work. If you have any questions, or just want to 
            connect, feel free to reach out :)
        </p>

        <div id='contact-links-container'>
            <a href='mailto:hicass.dev@gmail.com'>hicass.dev@gmail.com</a>
        </div>

      </div>
    </section>
    )
}