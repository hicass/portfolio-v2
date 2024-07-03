'use client';

import { useRef, useState, FC } from 'react';

import Image from 'next/image';

import emailjs from '@emailjs/browser';
import validator from 'validator';

import { AiOutlineMail } from 'react-icons/ai';
import { BsSendCheck } from 'react-icons/bs';

import botBoops from '../../../../public/images/bot-boops.png';
import botTendrils1 from '../../../../public/images/bot-wave-tendrils.png';
import botTendrils2 from '../../../../public/images/bot-tendrils.png';
import './Contact.css'


const ContactSection: FC = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            handleSubmit();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    setFormValues({
      name: '',
      email: '',
      message: '',
    });
    setEmailMessage('');
    setTimeout(() => setFormSubmitted(false), 7000);
  };

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailMessage('Wooo!');
    } else {
      setEmailMessage('Please enter a valid email...');
    }
  };

  const handleEmail = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    validateEmail(e);
  };

  return (
    <section id="contact" className="content-area">
      <h3 id="contact-h3">
        Contact <AiOutlineMail id="email-icon" />
      </h3>

      <div className="submit-confirmation">
        {formSubmitted ? (
          <div className="confirmation-msg">
            <BsSendCheck className="submit-icon" />
            <p className="confirmation-txt">
              Thank you for reaching out, talk to you soon!
            </p>
          </div>
        ) : (
          <div className="confirmation-msg">
            <span className="place-holder">p</span>
            <span className="place-holder">p</span>
          </div>
        )}
      </div>

      <div id="contact-contents">
        <form
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
          noValidate
        >
          <div className="form-div">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="from_name"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
          </div>

          <div className="form-div">
            <label className="form-label">Email</label>
            <input
              className="form-input email-input"
              type="email"
              name="from_email"
              value={formValues.email}
              onChange={(e) => handleEmail(e)}
            />
            <p id="email-message">
              <span className="place-holder">p</span>
              {emailMessage}
            </p>

            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />
          </div>

          <input className="form-submit" type="submit" value="Send" />
        </form>

        <p>
          Thank you for taking the time to explore my corner of the internet. I
          genuinely appreciate your interest in my work. If you have any
          questions, or just want to connect, feel free to reach out :)
        </p>

        <div id="contact-links-container">
          <a href="mailto:hicass.dev@gmail.com">hicass.dev@gmail.com</a>
        </div>
      </div>

      <Image
        src={botBoops}
        priority={true}
        className="parallax-bot-boops"
        id="parallax-bot-boops"
        alt="Little dots floating whimsicaly whimsically"
      />
      <Image
        src={botTendrils1}
        priority={true}
        className="parallax-bot-boops"
        id="parallax-bot-tendrils1"
        alt="Smoke like lines appear behind the floating dots in a wavy pattern"
      />
      <Image
        src={botTendrils2}
        priority={true}
        className="parallax-bot-boops"
        id="parallax-bot-tendrils2"
        alt="Smoke like lines appear behind the wavy lines in a more steady fashion"
      />

      <p id="credit-text">
        Built and designed by yours truly, using Next.js and a handful of other
        technologies. Check out the{' '}
        <a href="https://github.com/hicass/portfolio-v2" target="_blank">
          source code
        </a>{' '}
        to learn more.
      </p>
    </section>
  );
}

export default ContactSection;