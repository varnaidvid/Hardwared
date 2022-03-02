import React, { PureComponent, useState, useEffect, createContext } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { 
    HomePage, 
    AboutUs, 
    Products, 
    ContactUs, 
    ViewBase, 
    NavBar, 
    Footer, 
    Login, 
    Register, 
    Account
} from "./views"
import { SkeletonTheme } from "react-loading-skeleton"

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

    // User
    const [user, setUser] = useState()
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user") || sessionStorage.getItem("user")
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser)
            setUser(user)
        }
    }, [user]) 

    return (
        <MainContext.Provider value={[user, setUser]}>
            <SkeletonTheme baseColor="#292a37" highlightColor="#23232e" height={8}>
                <ViewBase>
                    <Toaster toastOptions={{
                        className: "alert",
                        duration: 3000,
                        error: {
                            iconTheme: {
                                primary: "#FF7575"
                            },
                        },
                        success: {
                            iconTheme: {
                                primary: "#78FF9E"
                            },
                        },
    
                    }}/>
                    <Router>
                        <Switch>
                            <Route path="/rolunk">
                                <NavBar/>
                                <AboutUs/>
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
            </SkeletonTheme>
        </MainContext.Provider>
    )
}

render(<App/>, document.getElementById("app"))