import React from 'react'
import { render } from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
//Importing routes
import Home from './pages/Home.js';
import Bio from './pages/Bio.js'
import Work from './pages/Work'
import Project from './pages/Project'
import Art from './pages/Art'
const App = props => {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Route path = "/" basename={process.env.PUBLIC_URL} exact>
            <Home />
          </Route>
          <Route path={process.env.PUBLIC_URL+"/zcy"} exact>
            <Home />
          </Route>
          <Route path="/bio/" basename={process.env.PUBLIC_URL} >
            <Bio />
          </Route>
          <Route path="/arts/" basename={process.env.PUBLIC_URL} >
            <Art />
          </Route>
          <Route path="/work/" basename={process.env.PUBLIC_URL} >
            <Work />
          </Route>
          <Route path="/project/:projectId" component={Project} basename={process.env.PUBLIC_URL}></Route>
      </Router>
  )
}

render(<App />, root) // eslint-disable-line no-undef
