import React, { Component, useState, useEffect, Fragment } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom"
import { HomePage, AboutUs, Services, Products, ContactUs, ViewBase, NavBar, Footer, Login, Register } from "./views"

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
const csrftoken = getCookie('csrftoken');
export const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};


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
                    <Route path="/regisztracio">
                        <NavBar/>
                        <Register/>
                    </Route>
                    <Route path="/bejelentkezes">
                        <NavBar/>
                        <Login/>
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