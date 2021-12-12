import React from 'react';
import '../Project/ProjectComponent.css';

const Projects = () => {
    return(
        <>
            <section className='projects'>
            <div className='zooLander'>
                <a href='https://zoolander.netlify.app/' className='projectLinks'><h2>zooLander</h2></a>
                <h4>React || Node || Express || PostgreSQL</h4>
                <p>
                    zooLander is an informational application that allows users to build their own personal zoo.
                    Users select animals according to their respective habitats and they are rendered with minor CSS animations.
                    The app is full-stack and utilizes authentication to access the users information and saved data.
                    From front to back the code is comprehensive, clean, and tested. 5 day sprint, 4 developers.
                </p>
            </div>
            <div className='gardenBuddy'>
                <a href='https://joseph-k-b.github.io/garden_app/' className='projectLinks'><h2>gardenBuddy</h2></a>
                <h4>Vanilla JS</h4>
                <p>
                   gardenBuddy is a comprehensive website in which users can choose from a variety of edible plants to build their own garden.
                   After selecting their plants the user is provided with recomendations for companion plants based on their selection.
                   The user is rendered a small raised bed with icons placed accordingly.
                   This also incorporates information about each plant.
                   5 day sprint, 3 developers.
                </p>
            </div>
            <div className='faceSpace'>
                <a href='https://github.com/alchemy-june2021-faceSpace' className='projectLinks'><h2>faceSpace</h2></a>
                <h4>Node || Express || PostgreSQL</h4>
                <p>
                    faceSpace is a social media/e-commerce back end build.                 Incorporating users saved information, they are able to make posts, comments and likes. While on the ecommerce side there is an option to
                    post items for sale, save them to a wish list, and track purchased items. This is purely back-end, however, the addition of a front-end would be streamlined
                    and make this a viable web app. 6 day sprint, 4 developers.
                </p>
            </div>
            <div className='postmaClone'>
                <a href='https://postmaclone.netlify.app' className='projectLinks'><h2>postmaClone</h2></a>
                <h4>React</h4>
                <p>
                    postmaClone functions almost identically to Postman. In essence it is a Postman clone ran through the browser.
                    This allows users to interact with different API's providing all the major CRUD requests. It also utilizes tokens
                    to provide access to API's that require authorization. While it's not revolutionary it showcases the ability to
                    interact with back-end databases on the front-end. 3 day sprint, 1 developer.
                </p>
            </div>
            </section>
        </>
    )
}

export default Projects;