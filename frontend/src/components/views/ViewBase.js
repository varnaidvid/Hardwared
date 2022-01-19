import React, {Component} from "react"
import Footer from "./Footer"

export default function ViewBase({ children }){
    return (
        <main id="main" className="container main-container">
            { children }
        </main>
    )
}