import React from 'react';

const FormContact = () => {
    return (
        <div>
               <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contact Me</h2>
                    <div className='letter'>💌</div>
                    <label htmlFor="delivery-select">Choose your delivery method</label>
                        <select name="delivery" id="delivery">
                            <option value="">--Please choose an option--</option>
                            <option value="owl">Owl 🦉</option>
                            <option value="dragon">Dragon 🐉</option>
                            <option value="email">Email 💌</option>
                        </select>
                <div className='form-section'>
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
                <button type="submit">Envoyer</button>
                </form>
                <div className='img-select'>
                    <img src="./coffee.png" alt="" />
                </div>
            </div>
    );
};

export default FormContact;