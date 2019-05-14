import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './subcomponents/Navbar.js';
import Footer from './subcomponents/Footer.js';
import Home from './Home';
import Team from './Team';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team/" component={Team} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
