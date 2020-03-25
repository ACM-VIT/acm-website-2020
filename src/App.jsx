import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar/Navbar';
import HamburgerNavbar from './components/HamburgerNavSection/HamburgerNav';
import LandingPage from './pages/LandingPage';
import EventsPageLanding from './pages/EventsPageLanding';
import BlogsPageLanding from './pages/BlogsPageLanding';

import './App.css';

const App = () => {
  const [offsetPos, setOffsetPos] = useState([0, 0, 0, 0, 0, 0, 0]);

  const findOffset = (offsetY, index) => {
    const newOffsetPos = offsetPos;
    newOffsetPos[index] = offsetY;
    setOffsetPos(newOffsetPos);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar offsetPos={offsetPos} />
      <HamburgerNavbar offsetPos={offsetPos} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <LandingPage findOffset={findOffset} />}
        />
        <Route exact path="/events" component={EventsPageLanding} />
        <Route exact path="/blogs" component={BlogsPageLanding} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
