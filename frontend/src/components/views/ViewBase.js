import React, {Component} from "react"
import { Footer } from "."

export default function ViewBase({ children }){
    return (
        <main id="main" className="container">
            { children }
        </main>
    )
}