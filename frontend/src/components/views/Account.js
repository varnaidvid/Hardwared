import React, { Component, useContext } from "react"
import { NavLink } from "react-router-dom"
import { MainContext } from "../App"
import toast from "react-hot-toast"
import axios from "axios"

export const signOut = () => {
    toast.success("Sikeres kijelentkezés!")
    axios.defaults.headers.common["Authorization"] = ""
    localStorage.clear()
    sessionStorage.clear()
    setUser()
}

export default function Account(){
    const [user, setUser] = useContext(MainContext)

    return (
        <div>
            Account
            <h1 id="anyad">Hello, {user?.user.username}!</h1>
            <NavLink to="/" className="nav-link main-btn" activeClassName="active" role="button" onClick={signOut}>Kijelentkezés.</NavLink>
        </div>
    )

}