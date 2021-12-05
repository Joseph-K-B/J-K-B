import React from 'react';
import css from '../styles/stack.css'

const Stack = () => {
    return(
        <>
            <section className={css.stack}>
                <div className={css.language}>
                    <h3>Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className={css.framework}>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Next</li>
                    </ul>
                </div>
                <div className={css.library}>
                    <h3>Libraries</h3>
                    <ul>
                        <li>Three</li>
                        <li>Cannon</li>
                        <li>Blender</li>
                        {/* <li>Tailwind</li> */}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Stack;