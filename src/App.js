import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NewsSources from './NewsSources';
import Compare from './Compare';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import logo from './images/logo.png';

const App = () => (
  <div className='app'>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/">
      <img src={logo} height="40" alt="Newsfluence logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/news">News Sources</Nav.Link>
        <Nav.Link href="/compare">Compare</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/news' component={NewsSources}></Route>
    <Route exact path='/compare' component={Compare}></Route>
  </Switch>
);

export default App;