import React, { PureComponent, useState, useEffect, createContext } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { 
    HomePage, 
    AboutUs, 
    Services, 
    Products, 
    ContactUs, 
    ViewBase, 
    NavBar, 
    Footer, 
    Login, 
    Register, 
    Account 
} from "./views"

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


export const MainContext = createContext()



// Main App
export default function App() {

    // Alert
    class Alert extends PureComponent{
        render(){
            return (
                <div className={`sticky alert alert-${this.props.type} alert-dismissible fade show text-center`} role="alert">
                    <strong>{this.props.message}</strong>
                </div>
            )
        }
    }

    // User
    const [user, setUser] = useState()
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user")
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser)
            setUser(user)
        }
    }, [user]) 

    return (
        <MainContext.Provider value={[user, setUser]}>
            <ViewBase>
                <Toaster toastOptions={{
                    className: "alert",
                    duration: 4000
                }}/>
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
                        <Route path="/fiok">
                            <NavBar/>
                            <Account/>
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
        </MainContext.Provider>
    )
}

render(<App/>, document.getElementById("app"))