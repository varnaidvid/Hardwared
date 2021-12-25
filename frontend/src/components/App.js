import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom"
import { HomePage, AboutUs, Services, Products, ContactUs, ViewBase, NavBar, Footer } from "./views"

export default function App() {
    return (
        <ViewBase>
            <Router>
                <Switch>
                    <Route path="/rolunk">
                        <NavBar/>
                        <AboutUs/>
                    </Route>
                    <Route path="/szolgaltatasok">
                        <NavBar/>
                        <Services/>
                    </Route>
                    <Route path="/termekek">
                        <NavBar/>
                        <Products/>
                    </Route>
                    <Route path="/elerhetoseg">
                        <NavBar/>
                        <ContactUs/>
                    </Route>
                    <Route path="/">
                        <NavBar/>
                        <HomePage/>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </ViewBase>
    )
}

render(<App/>, document.getElementById("app"))