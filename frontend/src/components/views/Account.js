import React, { Component, useContext } from "react"
import { NavLink } from "react-router-dom"
import { MainContext } from "../App"

export default function Account(){
    const [user, setUser, isAlert, setIsAlert] = useContext(MainContext)

    const _user = JSON.parse(localStorage.getItem("user"))


    const logOut = () => {
        localStorage.clear()
        setUser()
    }

    return (
        <div>
            Account
            <h1 id="anyad">Hello, {user.name}!</h1>
            <NavLink to="/" className="nav-link main-btn" activeClassName="active" role="button" onClick={logOut}>Kijelentkezés.</NavLink>
        </div>
    )

}