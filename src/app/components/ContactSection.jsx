import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { AiOutlineMail } from 'react-icons/Ai'


export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, '-qDI4dvV-5_y28-od')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact' className='content-area'>
      <h3 id='contact-h3'>Contact <AiOutlineMail id='email-icon'/></h3>

      <div id='contact-contents'>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <label className='form-label'>Name</label>
            <input className='form-input' type='text' name='from_name' />

            <label className='form-label'>Email</label>
            <input className='form-input' type='email' name='from_email' />

            <label className='form-label'>Message</label>
            <textarea name='message'/>

            <input className='form-submit' type='submit' value='Send' />
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