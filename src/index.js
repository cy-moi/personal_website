import React from 'react'
import { render } from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
//Importing routes
import Home from './pages/Home.js';
import Bio from './pages/Bio.js';
import Work from './pages/Work';
import Project from './pages/Project';
import Art from './pages/Art';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';

const App = props => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" basename={process.env.PUBLIC_URL} exact>
      <Home />
    </Route>
    <Route path={process.env.PUBLIC_URL + "/zcy"} exact>
      <Home />
    </Route>
    <Route path="/bio/" basename={process.env.PUBLIC_URL}>
      <Bio />
    </Route>
    <Route path="/arts/" basename={process.env.PUBLIC_URL}>
      <Art />
    </Route>
    <Route path="/work/" basename={process.env.PUBLIC_URL}>
      <Work />
    </Route>
    <Route path="/blog/" basename={process.env.PUBLIC_URL}>
      <Blog />
    </Route>
    <Route path="/project/:projectId" component={Project} basename={process.env.PUBLIC_URL} />
    <Route path="/blogpage/:blogId" component={BlogPage} basename={process.env.PUBLIC_URL} />
  </Router>
)

render(<App />, root) // eslint-disable-line no-undef
