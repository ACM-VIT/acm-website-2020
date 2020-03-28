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

// Utility components/functions
import ScrollToTop from './components/utils/ScrollToTop';
import loader from './utils/loader';

// Data
import { OFFSET_POS } from './DataStore';

// Stylesheet
import './App.css';

const App = () => {
  const [offsetPos, setOffsetPos] = useState(OFFSET_POS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loader().then(() => setLoading(false));
    AOS.init();
  }, []);

  // Sets offset Y of all sections
  const findOffset = (offsetY, index) => {
    const newOffsetPos = offsetPos;
    newOffsetPos[index] = offsetY;
    setOffsetPos(newOffsetPos);
  };

  return loading ? (
    <div
      className="w-screen h-screen flex justify-center items-center fixed inset-0"
      style={{ backgroundColor: '#030303' }}
    >
      <img
        src="./assets/images/Preloader.gif"
        alt="Preloader"
        className="w-40 h-40"
      />
    </div>
  ) : (
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
