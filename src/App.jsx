/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AOS from 'aos';

// Components
import Navbar from './components/layout/Navbar/Navbar';
import HamburgerNavbar from './components/HamburgerNavSection/HamburgerNav';
import LandingPage from './pages/LandingPage';
import EventsPageLanding from './pages/EventsPageLanding';
import BlogsPageLanding from './pages/BlogsPageLanding';
import Footer from './components/layout/Footer/Footer';

// Utility Components
import ScrollToTop from './components/utils/ScrollToTop';

// Data
import { OFFSET_POS } from './DataStore';

// Stylesheet
import './App.css';

const App = () => {
  const [offsetPos, setOffsetPos] = useState(OFFSET_POS);

  useEffect(() => {
    AOS.init();
  }, []);

  // Sets offset Y of all sections
  const findOffset = (offsetY, index) => {
    const newOffsetPos = offsetPos;
    newOffsetPos[index] = offsetY;
    setOffsetPos(newOffsetPos);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar offsetPos={offsetPos} />
      <HamburgerNavbar offsetPos={offsetPos} />
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <LandingPage findOffset={findOffset} />}
          />
          <Route exact path="/events" component={EventsPageLanding} />
          <Route exact path="/blogs" component={BlogsPageLanding} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
