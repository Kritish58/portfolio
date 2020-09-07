import React from 'react';
import { Redirect } from 'react-router-dom';

function RedirectToHomePage() {
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

export default RedirectToHomePage;
