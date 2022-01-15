import React, { Component, useContext } from "react"
import { NavLink } from "react-router-dom"
import { MainContext } from "../App"

export default function Account(){
    const [user, setUser, isAlert, setIsAlert] = useContext(MainContext)

    const logOut = () => {
        localStorage.clear()
    }

    return (
        <div>
            Account
            <h1>Hello!</h1>
            <NavLink to="/" className="nav-link main-btn" activeClassName="active" role="button" onClick={logOut()}>Kijelentkezés.</NavLink>
        </div>
    )

}