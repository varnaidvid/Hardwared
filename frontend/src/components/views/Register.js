import React, { Component, useState } from "react"

export default function Register(props) {
    const [state, setState] = useState({
        "username": "",
        "email": "",
        "password": "",
        "password1": ""
    })

    const handleChange = event => {
        const { id, value } = event.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (state.password === state.password1) {
            return 
        } else {
            return ""
        }
    }

    return (
        <div>
            Signup
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={state.username} onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input name="email" type="email" value={state.email} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={state.password} onChange={handleChange}/>
                </label>
                <label>
                    Password confirmation:
                    <input name="password1" type="password" value={state.password1} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}