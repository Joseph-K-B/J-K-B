import React, { Component } from 'react';

import Bio from '../components/BioComponent';
import Projects from '../components/ProjectComponent';
import Stack from '../components/StackComponent';

import css from '../styles/portfolio-container.css'
import css2 from '../styles/style.css';




class PortContainer extends  Component {
state = {
    loading: true,
}

componentDidMount() {
    this.setState({loading: false})
}
    render() {
        return (
            <>
                
            <div>
                <Bio />
                     <img src='' alt='Headshot' className={css.headshot}/>
                <Stack />
                <Projects />  
                </div>
            </>
        )
    }
}

export default PortContainer