import React, { Component } from 'react';
import '../Header/HeaderComponent.css';

class Header extends Component {
    render(){
        return(
            <header>
                <section className='links'>
                <a href='https://github.com/Joseph-K-B' className='gitIcon'>
                    <img src='https://img.icons8.com/material-outlined/24/000000/github.png' alt='github'/>
                </a>
                <a href='https://www.linkedin.com/in/joseph-k-brown/' className='linkedinIcon'>
                    <img src='https://img.icons8.com/ios-glyphs/30/000000/linkedin.png' alt='linkedin'/>
                </a>
                </section>
                <h1>Joseph Brown</h1>
            </header>
        )
    }
}

export default Header