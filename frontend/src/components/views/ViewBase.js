import React, {Component} from "react"

export default function ViewBase({ children }){
    return (
        <main id="main" className="container">
            <div className="container">
                { children }
            </div>
        </main>
    )
}