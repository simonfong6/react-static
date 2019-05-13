import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import './assets/css/font-awesome.min.css';

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
