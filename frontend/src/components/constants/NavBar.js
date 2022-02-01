import React, { Component, useEffect, useState, useContext, useRef } from "react"
import { NavLink } from "react-router-dom"
import { MainContext } from "../App"
import { signOut } from "../views/Account"

export default function NavBar(props){
    const [user, setUser] = useContext(MainContext)

    const [expanded, setExpanded] = useState("")

     const toggleNav = () => {
        const toggler = document.getElementById("navbar-toggler")
        if (toggler.ariaExpanded == "true") {

            setTimeout(() => { 
                toggler.classList.add("toggled")
             }, 300)

             setTimeout(() => {
                toggler.animate([
                    {left: '0'},
                    {left: '100px'},
                    {left: '200px'},
                ], {
                    duration: 200,
                    iterations: 1,
                })
            }, 100)

        } else {

            setTimeout(() => {
                toggler.classList.remove("toggled")
            }, 200)
            
            toggler.animate([
                {left: '200px'},
                {left: '100px'},
                {left: '0'},
            ], {
                duration: 200,
                iterations: 1,
            }) 

        }
    }

    return (
        <div className="main-wrapper custom-wrapper">
            <nav className="navbar navbar-expand-xl navbar-dark">
                <button 
                    className={"navbar-toggler collapsed"} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navBar" 
                    aria-controls="navBar" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation" 
                    id="navbar-toggler" 
                    onClick={() => {setExpanded(expanded ? "" : " show"); toggleNav()}}
                >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>

                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav me-auto mt-3">
                        <li className="nav-item">
                            <NavLink exact to="/" className="navbar-brand">
                                <img className="nav-logo" src='/static/images/logo.png' alt="Hardwared" title="Hardwared"/>
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav d-flex mt-3">
                        <li className="nav-item">
                            <i class="fas fa-home d-xl-none d-flex"></i>
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Kezdőlap.</NavLink>
                        </li>
                        <li className="nav-item">
                            <i class="fas fa-laptop d-xl-none d-flex"></i>
                            <NavLink to="/termekek" className="nav-link" activeClassName="active" onClick={() => setExpanded("")}>Termékek.</NavLink>
                        </li>
                        <li className="nav-item">
                            <i class="fas fa-network-wired d-xl-none d-flex"></i>
                            <NavLink to="/szolgaltatasok" className="nav-link" activeClassName="active">Szolgáltatások.</NavLink>
                        </li>
                        <li className="nav-item">
                            <i class="fas fa-globe-europe d-xl-none d-flex"></i>
                            <NavLink to="/elerhetoseg" className="nav-link before-btn" activeClassName="active">Elérhetőség.</NavLink>
                        </li>

                        { user ? (
                            <>
                            <hr className="nav-hr d-none d-xl-block"/>
                            <li className="nav-item nav-icon nav-cart">
                                <NavLink to="/" className="nav-link" activeClassName="active"><i class="fas fa-shopping-cart"></i></NavLink>
                            </li>
                            <li className="nav-item nav-icon">
                                <NavLink to="/" className="nav-link" activeClassName="active"><i class="fas fa-comment-dots"></i></NavLink>
                            </li>
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