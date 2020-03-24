import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar/Navbar';
import LandingPage from './pages/LandingPage';

import './App.css';

const App = () => {
  const [offsetPos, setOffsetPos] = useState([0, 0, 0, 0, 0, 0, 0]);

  const findOffset = (offsetY, index) => {
    const newOffsetPos = offsetPos;
    newOffsetPos[index] = offsetY;
    setOffsetPos(newOffsetPos);
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar offsetPos={offsetPos} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <LandingPage findOffset={findOffset} />}
          />
          {/* Start working from here  */}
          {/* <Route exact path="/events" component={EventsPage} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
