import React from 'react';
import '../Contact/ContactControls.css';

function ContactControls({
    name,
    company,
    email,
    message,
    onNameInput,
    onCompanyInput,
    onEmailInput,
    onMessageInput,
    onSubmit
}) {
    return(
        <form onSubmit={onSubmit} className='contactForm'>
            <div className='info'>
                <input
                    id='name'
                    name='name'
                    placeholder='name'
                    type='text'
                    value={name}
                    onChange={onNameInput}
                    className='nameInput'
                />
                <label htmlFor='name'></label>
                <input
                    id='company'
                    name='company'
                    placeholder='company'
                    type='text'
                    value={company}
                    onChange={onCompanyInput}
                    className='companyInput'
                />
                <label htmlFor='company'></label>
                <input
                    id='email'
                    name='email'
                    placeholder='email'
                    type='text'
                    value={email}
                    onChange={onEmailInput}
                    className='emailInput'
                />
                <label htmlFor='email'></label>
                <button aria-label='contact-me'>Send</button>
                </div>
            <div>
                <textarea
                    id='message'
                    name='message'
                    placeholder='message'
                    type='text'
                    value={message}
                    onChange={onMessageInput}
                    className='messageInput'
                />
                <label htmlFor='message'></label>
            </div>  
        </form>
    )
}

export default ContactControls