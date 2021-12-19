import React, {Component} from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function NavBar(){
    return (
        <>
            <Router>
                <Link to="/kezdolap">
                    <button className="mainBtn">Kezdőlap.</button>
                </Link>
                <Link to="/termekek">
                    <button className="mainBtn">Termékek.</button>
                </Link>
                <Link to="/szolgaltatasok">
                    <button className="mainBtn">Szolgáltatások.</button>
                </Link>
                <Link to="/elerhetoseg">
                    <button className="mainBtn">Elérhetőség.</button>
                </Link>
            </Router>
        </>
        )
}