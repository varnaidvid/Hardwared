import React, {Component} from "react"
import { NavLink } from "react-router-dom"

export default function NavBar(){
    return (
        <div className="main-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark">
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
                            <NavLink to="/elerhetoseg" className="nav-link" activeClassName="active">Elérhetőség.</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/bejelentkezes" className="nav-link main-btn" activeClassName="active">Bejelentkezés.</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>    
    )
}