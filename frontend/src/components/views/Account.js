import React, { Component, useContext } from "react"
import { NavLink, Redirect } from "react-router-dom"
import { MainContext } from "../App"
import toast from "react-hot-toast"
import axios from "axios"

export const signOut = () => {
    toast.success("Sikeres kijelentkezés!")
    axios.defaults.headers.common["Authorization"] = ""
    localStorage.clear()
    sessionStorage.clear()
}

export default function Account(){
    const [user, setUser] = useContext(MainContext)

    if (!user) return <Redirect to="/bejelentkezes"/>

    return (
        <div className="account-container">
            <div className="d-flex p-relative">
                <hr/>
                <img src={user.profile.avatar} className="rounded-circle"/>
                <hr/>
            </div>
            <div className="account-wrapper">
                <div className="account-menu p-relative">
                    <div className="left-menu">
                        <NavLink to="/fiok"><i class="far fa-user-circle"/> Profil.</NavLink>
                        <NavLink to="/fiok/kedvenceim"><i class="fas fa-star"/> Kedvenceim.</NavLink>
                    </div>
                    
                    <div className="right-menu">
                        <NavLink to="/fiok/rendelesek"><i class="fas fa-list"/> Rendelések.</NavLink>
                        <NavLink to="/fiok/beallitasok"><i class="fas fa-cog"/> Beállítások.</NavLink>
                    </div>
                    <hr id="menu-slider"/>
                    <hr id="menu-hr"/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <NavLink to="/" className="nav-link main-btn" activeClassName="active" role="button" onClick={() => {signOut(); setUser()}}>Kijelentkezés.</NavLink> */}
        </div>
    )

}