import React, { Component, useContext, useState } from "react"
import axios from "axios"
import { CSRFToken, MainContext } from "../App"
import { NavLink, useHistory } from "react-router-dom"

export default function Login(){
    const [user, setUser, isAlert, setIsAlert] = useContext(MainContext)

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = event => {        
        event.preventDefault()

        axios.post("http://localhost:3000/api/user/login/", {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response)

            setUser(response.data)
            localStorage.setItem("user", JSON.stringify(response.data))

            setIsAlert(true)
            localStorage.setItem("ALERT_TYPE", "success")
            localStorage.setItem("ALERT_TEXT", "Sikeres bejelentkezés!")

            axios.defaults.headers.common["Authorization"] = `Token ${response.data.token}`

            history.push("/fiok", {message: "anyad"})
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    return (
        <div>
            Login
            <form method="POST" onSubmit={handleSubmit} action="/fiok">
                <input type="hidden" name="csrfmiddlewaretoken" value={CSRFToken}/>

                <label>
                    Username:
                    <input name="username" type="text" value={username} onChange={event => setUsername(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}