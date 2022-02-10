import React, {Component} from "react"

export default function ViewBase({ children }){
    return (
        <main id="main" className="container main-container">
            { children }
        </main>
    )
}