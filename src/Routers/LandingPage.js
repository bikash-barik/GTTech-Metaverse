import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const LandingPage = () => {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home}/>
        
      </Switch>
    </Router>
  )
}

export default LandingPage