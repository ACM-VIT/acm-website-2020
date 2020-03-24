import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar/Navbar';
import LandingPage from './pages/LandingPage';

import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* Start working from here  */}
          {/* <Route exact path="/events" component={EventsPage} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
