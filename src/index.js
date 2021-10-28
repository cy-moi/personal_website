import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
//Importing routes
import Home from './pages/Home.js';
import Bio from './pages/Bio.js'
const App = props => {
  return (
      <Router>
          <Route path = "/" exact>
              <Home />
          </Route>
          <Route path = "/zcy" exact>
              <Home />
          </Route>
          <Route path = "/bio">
              <Bio />
          </Route>
      </Router>
  )
}

render(<App />, root) // eslint-disable-line no-undef
