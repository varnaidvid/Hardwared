import React, { Component, useState, useEffect, Fragment } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom"
import { HomePage, AboutUs, Services, Products, ContactUs, ViewBase, NavBar, Footer, Login, Register } from "./views"


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
   

// Main App
export default function App() {

    const [isAlert, setIsAlert] = useState(false)

    const Alert = ({...props}) => {
        return (
            <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
                <strong>{props.text}</strong>
                <button type="button" className="btn-close" onClick={() => {
                        localStorage.removeItem("ALERT_TYPE")
                        localStorage.removeItem("ALERT_TEXT")
                        setIsAlert(false)
                    }
                }></button>
            </div>
        )
    } 

    return (
        <ViewBase>
            { isAlert === true ? (
                <Alert type={localStorage.getItem("ALERT_TYPE")} text={localStorage.getItem("ALERT_TEXT")}/>
            ) : (
                ""
            )}
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
                        <HomePage setIsAlert={setIsAlert}/>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </ViewBase>
    )
}

render(<App/>, document.getElementById("app"))