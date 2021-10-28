import React from 'react'
import { render } from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
//Importing routes
import Home from './pages/Home.js';
import Bio from './pages/Bio.js'
const App = props => {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Route path = "/" basename={process.env.PUBLIC_URL} exact>
              <Home />
          </Route>
          <Route path={process.env.PUBLIC_URL+"/zcy"} exact>
              <Home />
          </Route>
          <Route path="/bio/">
              <Bio />
          </Route>
      </Router>
  )
}

render(<App />, root) // eslint-disable-line no-undef
