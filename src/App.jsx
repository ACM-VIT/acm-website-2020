import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import EventsPageLanding from './pages/EventsPageLanding';
import BlogsPageLanding from './pages/BlogsPageLanding';

import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* Start working from here  */}
          <Route exact path="/events" component={EventsPageLanding} />
          <Route exact path="/blogs" component={BlogsPageLanding} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
