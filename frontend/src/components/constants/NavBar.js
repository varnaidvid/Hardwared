import React, { Component, useEffect, useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import { MainContext } from "../App"

import { signOut } from "../views/Account"

export default function NavBar(props){
    const [user, setUser] = useContext(MainContext)

    return (
        <div className="main-wrapper custom-wrapper">
            <nav className="navbar navbar-expand-xl navbar-dark">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav me-auto mt-3">
                        <li className="nav-item">
                            <NavLink exact to="/" className="navbar-brand">
                                <img className="nav-logo" src='/static/images/logo.png' alt="Hardwared" title="Hardwared"/>
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav d-flex align-items-center mt-3">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Kezdőlap.</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/termekek" className="nav-link" activeClassName="active">Termékek.</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/szolgaltatasok" className="nav-link" activeClassName="active">Szolgáltatások.</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/elerhetoseg" className="nav-link before-btn" activeClassName="active">Elérhetőség.</NavLink>
                        </li>

                        { user ? (
                            <>
                            <hr className="nav-hr"/>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="dropdown-toggle user-dropdown" aria-expanded="false" data-bs-toggle="dropdown" type="button"><img src={user.profile.avatar} className="rounded-circle" height="30" alt="Avatar" title="Avatar"/></button>
                                    <ul className="dropdown-menu dropdown-menu-end user-dropdown-menu" aria-labelledby="dropdown">
                                        <li><NavLink className="dropdown-item" activeClassName="active" to="/fiok">Fiók.</NavLink></li>
                                        <hr className="dropdown-divider"/>
                                        <li><NavLink className="dropdown-item signout" to="/" onClick={() => {signOut(); setUser()}}><img src="/static/images/svg/signout.svg" height="15"/> Kijelentkezés</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <NavLink to="/bejelentkezes" className="nav-link main-btn" activeClassName="active">Bejelentkezés.</NavLink>
                            </li>
                        )}

                    </ul>
                </div>
            </nav>
        </div>    
    )
}