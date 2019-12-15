import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import './App.css'
import Blog from './Components/Blog';
import Home from './Components/Home'
import About from './Components/About';
import Skills from './Components/Skills';
import ErrorNotFound from './Components/ErrorNotFound'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/skills">Skills</Link>{" "}
        <Link to="/blog">Blog</Link>{" "}
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/blog" component={Blog} />
        <Route component={ErrorNotFound} />
      </Switch>

    </div>
  );
}

export default App;
