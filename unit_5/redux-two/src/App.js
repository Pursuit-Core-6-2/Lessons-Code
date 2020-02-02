import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Home from './Components/Home';
import Films from './Components/Films';
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/counter">Counter</Link>{" "}
        <Link to="/films">Films</Link>{" "}
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/films" component={Films} />
      </Switch>
    </div>
  );
}

export default App;
