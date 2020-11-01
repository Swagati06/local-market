import React from 'react'
import LandingPage from './landingPage'
import { Switch, Route } from 'react-router-dom'
import About from './aboutMe'
import Account from './Account'
import Contact from './contacts'
import cart from './cart'
import {Redirect} from 'react-router-dom'
import signup from './signup'
import Sell from './Sell'


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/Account" component={Account} />
        <Route path="/contact" component={Contact} />
        <Route path='/Sell' component={Sell} />
        <Route path="/cart" component={cart} />
        <Route path='/signup' component={signup} />
     
        <Redirect to="/" />
    </Switch>
)

export default Main;