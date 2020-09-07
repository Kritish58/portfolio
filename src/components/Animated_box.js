import React from 'react';

import '../css/3d_box.css';

function Animated_box() {
  return (
    <div>
      <div className="wrapper">
        <div className="box-area">
          <div className="box-1"></div>
          <div className="box-2"></div>
          <div className="box-3"></div>
          <div className="box-4"></div>
          <div className="box-5"></div>
          <div className="box-6"></div>
        </div>
      </div>
      <div className="shadow-container">
        <div
          className="mx-auto"
          style={{
            color: 'transparent',
            width: '100px',
            boxShadow: '-1px -33px 21px -8px rgba(10,10,10,0.75)',
          }}
        >
          blah
        </div>
      </div>
    </div>
  );
}

export default Animated_box;
