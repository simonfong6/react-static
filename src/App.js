import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
