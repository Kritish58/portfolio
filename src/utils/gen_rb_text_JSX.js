import React from 'react';

function Gen_rb_text_JSX(str) {
  return (
    <div className="inline">
      {str.split('').map((letter, index) => {
        return (
          <span key={index} className="rb_text">
            {letter}
          </span>
        );
      })}
    </div>
  );
}

export default Gen_rb_text_JSX;
