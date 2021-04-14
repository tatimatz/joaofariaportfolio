import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import {Project1, Project2} from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {

  
  return (
<Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/project1' component={Project1} />
  <Route exact path='/project2' component={Project2} />
  <Route exact path='/contact' component={Contact} />
  <Redirect to='/' />
</Switch>
  )
}

export default App

