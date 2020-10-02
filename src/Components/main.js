import React from 'react'
import LandingPage from './landingPage'
import { Switch, Route } from 'react-router-dom'
import About from './aboutMe'
import Projects from './projects'
import Contact from './contacts'
import { Redirect } from 'react-router-dom'
import signup from './signup'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path='/signup' component={signup} />
        <Redirect to="/" />
    </Switch>
)

export default Main;