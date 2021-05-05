import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import {Project1, Project2} from './pages/Projects';
import Contact from './pages/Contact';
import { Galerie1, Galerie2 } from './pages/Galeries';


const App = () => {

  
  return (
<Switch>
  <Route exact path='/' component={Home} />
  {/*<Route exact path=`proect${id}` component={Contact} />*/}
  <Route exact path='/project1' component={Project1} />
  <Route exact path='/project2' component={Project2} />
  <Route exact path='/contact' component={Contact} />
  <Route exact path='/galerie1' component={Galerie1} />
  {/*<Route exact path='/galerie2' component={Galerie2} />*/}
  <Redirect to='/' />
</Switch>
  )
}

export default App

