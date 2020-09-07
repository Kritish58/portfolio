import React from 'react';
import '../../css/projects.css';

import Project from '../projects/Project';

// images
import imageComp from '../../assets/images/projects/image-comp.jpg';
import inventory from '../../assets/images/projects/inventory.jpg';
import ssImage from '../../assets/images/projects/ss-image.jpg';

function Projects() {
  return (
    <div
      className="p-2"
      style={{
        position: 'relative',
        backgroundColor: '#1D1D1D',
        minHeight: '100vh',
        fontFamily: 'Poppins',
      }}
    >
      <h3 className="p-2 projects-title rb_text" style={{ color: '#888' }}>
        Solo
      </h3>
      <div className="projects-container">
        {/* add new projects in this content manner */}
        <div className=" p-0 col-12 col-sm-6 col-md-4 col-lg-3">
          {/* <div className="image-comp"></div> */}
          <Project
            image={imageComp}
            title={'image compressor'}
            demoLink={'https://image-comp.herokuapp.com/'}
            codeLink={'https://github.com/Kritish58/image_compressor'}
          />
        </div>
        {/* add new projects in this content manner */}
        <div className=" p-0 col-12 col-sm-6 col-md-4 col-lg-3">
          {/* <div className="image-comp"></div> */}
          <Project
            image={inventory}
            title={'inventory'}
            demoLink={'https://inventoryv2.herokuapp.com/'}
            codeLink={'https://github.com/Kritish58/inventory2'}
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
            image={ssImage}
            demoLink={'https://www.scholarsspace.com/'}
            codeLink={''}
            codePrivate={true}
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Projects;
