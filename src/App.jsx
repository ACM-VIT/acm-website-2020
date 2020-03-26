import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/layout/Navbar/Navbar'
import HamburgerNavbar from './components/HamburgerNavSection/HamburgerNav'
import LandingPage from './pages/LandingPage'
import EventsPageLanding from './pages/EventsPageLanding'
import BlogsPageLanding from './pages/BlogsPageLanding'
import Footer from './components/layout/Footer/Footer';

// Data
import { OFFSET_POS } from './DataStore'

// Stylesheet
import './App.css'

const App = () => {
  const [offsetPos, setOffsetPos] = useState(OFFSET_POS)

  // Sets offset Y of all sections
  const findOffset = (offsetY, index) => {
    const newOffsetPos = offsetPos
    newOffsetPos[index] = offsetY
    setOffsetPos(newOffsetPos)
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar offsetPos={offsetPos} />
      <HamburgerNavbar offsetPos={offsetPos} />
      <Switch>
        <Route
          exact
          path='/'
          component={() => <LandingPage findOffset={findOffset} />}
        />
        <Route exact path='/events' component={EventsPageLanding} />
        <Route exact path='/blogs' component={BlogsPageLanding} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
};

export default App
