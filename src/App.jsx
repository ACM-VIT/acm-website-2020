/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Components
import Navbar from './components/layout/Navbar/Navbar';
import HamburgerNavbar from './components/HamburgerNavSection/HamburgerNav';
import LandingPage from './pages/LandingPage';
import EventsPageLanding from './pages/EventsPageLanding';
import BlogsPageLanding from './pages/BlogsPageLanding';
import Footer from './components/layout/Footer/Footer';

// Data
import { OFFSET_POS } from './DataStore';

// Stylesheet
import './App.css';

const App = () => {
  const [offsetPos, setOffsetPos] = useState(OFFSET_POS);

  // Sets offset Y of all sections
  const findOffset = (offsetY, index) => {
    const newOffsetPos = offsetPos;
    newOffsetPos[index] = offsetY;
    setOffsetPos(newOffsetPos);
  };

  // Alert options
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar offsetPos={offsetPos} />
      <HamburgerNavbar offsetPos={offsetPos} />
      <Switch>
        <AlertProvider template={AlertTemplate} {...options}>
          <Route
            exact
            path="/"
            component={() => <LandingPage findOffset={findOffset} />}
          />
        </AlertProvider>
        <Route exact path="/events" component={EventsPageLanding} />
        <Route exact path="/blogs" component={BlogsPageLanding} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
