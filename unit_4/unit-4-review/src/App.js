import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gif from './components/Gif';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gif/:id" component={Gif} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
