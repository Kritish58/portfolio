import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import MobileNavMenu from './components/MobileNavMenu';

// @routes
import Home from './components/routes/Home';
import Projects from './components/routes/Projects';
import Skills from './components/routes/Skills';
import Contact from './components/routes/Contact';
import RedirectToHomePage from './components/RedirectToHomePage';

function App() {
  return (
    <div className="App">
      <Nav />
      <MobileNavMenu />
      {/* 80 is the width of the side nav */}
      <div className="components-wrapper-aside-from-nav">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={RedirectToHomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
