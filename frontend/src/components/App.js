import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomePage from "./views/HomePage"
import NavBar from "./views/NavBar"
import AboutUs from "./views/AboutUs"
import Services from "./views/Services"
import Products from "./views/Products"
import ContactUs from "./views/ContactUs"

export default function App() {
    return (
        <>
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path="/rolunk">
                        <AboutUs/>
                    </Route>
                    <Route path="/szolgaltatasok">
                        <Services/>
                    </Route>
                    <Route path="/termekek">
                        <Products/>
                    </Route>
                    <Route path="/elerhetoseg">
                        <ContactUs/>
                    </Route>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

const appDiv = document.getElementById("app")
render(<App/>, appDiv)