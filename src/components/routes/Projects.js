import React from 'react';
import '../../css/projects.css';

import Project from '../projects/Project';

function Projects() {
    return (
        <div
            className="p-2"
            style={{
                backgroundColor: '#1D1D1D',
                minHeight: '100vh',
                fontFamily: 'Poppins',
            }}
        >
            {/*  */}
            <h3 className="p-2 projects-title rb_text" style={{ color: '#888' }}>
                Solo
            </h3>
            <div className="projects-container">
                {/* add new projects in this content manner */}
                <div className=" p-0 col-12 col-sm-6 col-md-4 col-lg-3">
                    {/* <div className="image-comp"></div> */}
                    <Project
                        image={'/image-comp.jpg'}
                        title={'image compressor'}
                        demoLink={'https://image-comp.herokuapp.com/'}
                        codeLink={'https://github.com/Kritish58/image_compressor'}
                    />
                </div>
                {/*  */}
                {/* add new projects in this content manner */}
                <div className=" p-0 col-12 col-sm-6 col-md-4 col-lg-3">
                    {/* <div className="image-comp"></div> */}
                    <Project
                        image={'/inventory.jpg'}
                        title={'inventory'}
                        demoLink={'https://inventoryv2.herokuapp.com/'}
                        codeLink={'https://github.com/Kritish58/inventory2'}
                    />
                </div>
                {/*  */}
                {/* add new projects in this content manner */}
                <div className=" p-0 col-12 col-sm-6 col-md-4 col-lg-3">
                    {/* <div className="image-comp"></div> */}
                    <Project
                        image={'/hotel-booking.jpg'}
                        title={'Hotel Booking'}
                        demoLink={'https://pubg-demon.herokuapp.com/'}
                        codeLink={'https://github.com/orgs/aashik-collab/dashboard'}
                    />
                </div>
                {/*  */}
            </div>
            <h3 className="p-2 mt-4 projects-title rb_text" style={{ color: '#888' }}>
                Team
            </h3>
            <div className="projects-container">
                {/* add new projects in this content manner */}
                <div className=" p-0 col-12 col-sm-6 col-md-4 col-lg-3">
                    {/* <div className="image-comp"></div> */}
                    <Project
                        title={'scholarsspace.com'}
                        image={'/ss-image.jpg'}
                        demoLink={'https://www.scholarsspace.com/'}
                        codeLink={''}
                        codePrivate={true}
                    />
                </div>
                {/*  */}
            </div>
            {/* <h3 className="p-2 mt-4 projects-title rb_text" style={{ color: '#888' }}>
                front end - incomplete
            </h3>
            <div className="projects-container"> */}
            {/* add new projects in this content manner */}
            {/* <div className=" p-0 col-12 col-sm-6 col-md-4 col-lg-3"> */}
            {/* <div className="image-comp"></div> */}
            {/* <Project
                        title={'Inventory -v1'}
                        image={'/inv-v1.jpg'}
                        demoLink={'https://esolutn.netlify.app'}
                        codeLink={'https://github.com/Kritish58/inventory'}
                        codePrivate={false}
                    /> */}
            {/* </div> */}
            {/*  */}
            {/* </div> */}
        </div>
    );
}

export default Projects;
