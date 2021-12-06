import React from 'react';
import '../Stack/StackComponent.css'

const Stack = () => {
    return(
        <>
            <section className='stack'>
                <div className='language'>
                    <h3>Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className='framework'>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Next</li>
                    </ul>
                </div>
                <div className='library'>
                    <h3>Libraries</h3>
                    <ul>
                        <li>Three</li>
                        <li>Cannon</li>
                        <li>Blender</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Stack;