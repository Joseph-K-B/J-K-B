import React, { Component } from 'react';
import css from '../styles/header.css';
// import { ThemeProvider } from 'next-themes';
// import Nav from '../services/nav';
// import { NavLink } from 'react-router-dom';


class Header extends Component {
    render(){
        return(
            <header>
                <section className={css.links}>
                <a href='https://github.com/Joseph-K-B' className={css.git}><img src='https://img.icons8.com/material-outlined/24/000000/github.png' /></a>
                <a href='https://www.linkedin.com/in/joseph-k-brown/' className={css.linked}><img src='https://img.icons8.com/ios-glyphs/30/000000/linkedin.png' /></a>
                {/* <Nav /> */}
                {/* <ThemeProvider 
                    defaultTheme='dark'
                    attribute='class'>
                    </ThemeProvider> */}
                {/* <NavLink to='/resume'>Resume</NavLink> */}
                </section>
                <h1>Joseph Brown</h1>
            </header>
        )
    }
}

export default Header