import React, { Component } from 'react';
import Bio from '../components/Bio/BioComponent';
import Projects from '../components/Project/ProjectComponent';
import Stack from '../components/Stack/StackComponent';
import '../containers/PortContainer.css'
// import css2 from '../styles/style.css';




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
                     <img src='' alt='Headshot' className='headshot'/>
                <Stack />
                <Projects />  
                </div>
            </>
        )
    }
}

export default PortContainer