import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Envoyer le formulaire de contact à l'adresse email de l'aventure
    };

    return (
        <div className='first-contact-container' id="contact">
            <div className='contact-container'>
                <div className='border-div'></div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2 className='contact-title'>Contact Me</h2>
                    <div className='letter'>💌</div>
                    <label htmlFor="delivery-select"><h2>1. Choose your delivery method</h2></label>
                        <select name="delivery" id="delivery">
                            <option value="">--Please choose an option--</option>
                            <option value="owl">Owl 🦉</option>
                            <option value="dragon">Dragon 🐉</option>
                            <option value="email">Email 💌</option>
                        </select>
                        <h2>2. Send me an Email</h2>
                        <h3>marilyn.olejniczak@gmail.com</h3>
                {/* <div className='form-section'>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className='form-section'>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className='form-section'>
                    <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Envoyer</button> */}
                </form>
                <div className='img-select'>
                    <img src="./coffee.png" alt="" />
                </div>
                </div>
                <a className='up' href='#home'>
                <button className="up-arrow">Back to Home &rsaquo;</button>
            </a>
                </div>
  );
};


export default Contact;