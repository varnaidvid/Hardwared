import React, { Component, useState, useEffect, Fragment } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom"
import { HomePage, AboutUs, Services, Products, ContactUs, ViewBase, NavBar, Footer, Login, Register } from "./views"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"


// CSRFToken
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
export const CSRFToken = getCookie('csrftoken');

// Alert
const AlertOptions = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE
}


// Main App
export default function App() {
    return (
        <AlertProvider template={AlertTemplate} {...AlertOptions}>
            <ViewBase>
                <Router>
                    <Switch>
                        <Route path="/rolunk">
                            <NavBar/>
                            <AboutUs/>
                            <Footer/>
                        </Route>
                        <Route path="/szolgaltatasok">
                            <NavBar/>
                            <Services/>
                            <Footer/>
                        </Route>
                        <Route path="/termekek">
                            <NavBar/>
                            <Products/>
                            <Footer/>
                        </Route>
                        <Route path="/elerhetoseg">
                            <NavBar/>
                            <ContactUs/>
                            <Footer/>
                        </Route>
                        <Route path="/regisztracio">
                            <NavBar/>
                            <Register/>
                            <Footer/>
                        </Route>
                        <Route path="/bejelentkezes">
                            <NavBar/>
                            <Login/>
                            <Footer/>
                        </Route>
                        <Route path="/">
                            <NavBar/>
                            <HomePage/>
                            <Footer/>
                        </Route>
                    </Switch>
                </Router>
            </ViewBase>
        </AlertProvider>
    )
}

render(<App/>, document.getElementById("app"))