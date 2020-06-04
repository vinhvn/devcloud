import React from 'react';

const ProjectDetails = (props) => {
    const { id } = props.match.params;
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Alias architecto aut beatae consequatur deserunt
                        dolor dolore doloremque eius eos fugit ipsam, labore
                        necessitatibus nihil odit recusandae rem similique velit
                        veritatis.
                    </p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Vinh</div>
                    <div>May 6 at 2am</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
