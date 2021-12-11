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
            <section className='bioSection'>
                <Bio />
            </section>
            <section className='stackSection'>
                <Stack />   
            </section>
            {/* <section className='projectSection'>
                <Projects />
            </section> */}
            </>
        )
    }
}

export default PortContainer