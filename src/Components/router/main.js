import React from 'react'
import LandingPage from '../landingPage'
import { Switch, Route } from 'react-router-dom'
import About from '../aboutMe'
import Account from '../Account'
import Contact from '../contacts'
import cart from '../cart'
import { Redirect } from 'react-router-dom'
import signup from '../signup'
import Sell from '../sell'
import Clothing from '../shoppingCategory/Clothing'
import Grocery from '../shoppingCategory/Grocery'
import Cosmetics from '../shoppingCategory/Cosmetics'
import Hardware from '../shoppingCategory/Hardware'
import page1 from '../page1'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/Account" component={Account} />
        <Route path="/contact" component={Contact} />
        <Route path='/Sell' component={Sell} />
        <Route path="/cart" component={cart} />
        <Route path='/signup' component={signup} />
        <Route path='/clothing' component={Clothing} />
        <Route path='/grocery' component={Grocery} />
        <Route path='/cosmetics' component={Cosmetics} />
        <Route path='/hardware' component={Hardware} />
        <Route path='/page1' component={page1} />
        <Redirect to="/" />
    </Switch>
)

export default Main;