import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Link to ="/create-react-app-portfolio"/>
      </BrowserRouter>
      <Switch>
        <Route exact path="/create-react-app-portfolio/">
          <Me user={user} />
        </Route>
        <Route path="/create-react-app-portfolio/projects">
          <Projects user={user} />
        </Route>
        <Route path="/create-react-app-portfolio/work">
          <Work user={user} />
        </Route>
        <Route path="/create-react-app-portfolio/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
