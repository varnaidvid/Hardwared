import React, { Component, useContext, useEffect, useState } from "react"
import axios from "axios"
import { CSRFToken, MainContext } from "../App"
import { NavLink, useHistory } from "react-router-dom"
import toast from "react-hot-toast"

export default function Login(){
    const [user, setUser] = useContext(MainContext)

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [uidFocus, setUidFocus] = useState(false)

    const [password, setPassword] = useState("")
    const [pwdFocus, setPwdFocus] = useState(false)

    const [remember, setRemember] = useState(false)

    const handleSubmit = event => {        
        event.preventDefault()

        axios.post("http://localhost:3000/api/user/login/", {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response)

            if (remember === true) {
                localStorage.setItem("user", JSON.stringify(response.data))
            } else {
                sessionStorage.setItem("user", JSON.stringify(response.data))
            }

            setUser(response.data)
            toast.success("Sikeres bejelentkezés!")
            axios.defaults.headers.common["Authorization"] = `Token ${response.data.token}`
            history.push("/fiok")
        })
        .catch((error) => {
            console.log(remember)
            toast.error("Rossz adatok!")
            console.log(error)
        })
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="row">
                    <div className="d-none d-md-block col-12 col-md-4 l-content">
                        <img className="logo" src='/static/images/white_logo.png' alt="Hardwared" title="Hardwared"/>
                        <hr/>
                        <div className="text">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </div>   
                        <img className="ellipse" src="/static/images/svg/ellipse.svg"/>                 
                    </div>
                    <div className="col-12 col-md-8 r-content">
                        <h1>Bejelentkezés</h1>
                        <hr/>
                        <form method="POST" onSubmit={handleSubmit} action="/fiok">
                            <input type="hidden" name="csrfmiddlewaretoken" value={CSRFToken}/>
                            
                            <div className="input-wrapper">
                                <div className="input-container">
                                    <label id="uidLabel" className={ uidFocus ? "focus" : "" }>{ uidFocus ? "Felhasználónév" : "Felhasználónév..." }</label>
                                    <input name="username" type="text" 
                                        value={username} 
                                        onFocus={() => setUidFocus(true)} 
                                        onBlur={event => {if (event.target.value === "") {setUidFocus(false)} else {setUidFocus(true)} }}  
                                        onChange={event => setUsername(event.target.value)}
                                    />
                                </div>                                
                                
                                <div className="input-container mb-4">
                                    <label id="pwdLabel" className={ pwdFocus ? "focus" : "" }>{ pwdFocus ? "Jelszó" : "Jelszó..." }</label>
                                    <input name="password" type="password" 
                                        value={password} 
                                        onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} 
                                        onBlur={event => { if (event.target.value === "") {setPwdFocus(false)} else {setPwdFocus(true)} }}  
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                </div>

                                <label className="switch">
                                    <input type="checkbox" name="remember" onChange={event => {
                                        if (event.target.checked === true) {
                                            setRemember(true)
                                        } else {
                                            setRemember(false)
                                        }
                                    }} checked={remember} value={remember}/>
                                    <span class="slider round"></span>
                                </label>

                                <label for="remember" id="rememberLabel">Emlékezz rám</label>

                            </div>
                            <input className="main-btn" type="submit" value="Belépés."/>
                        </form>
                        <NavLink to="/regisztracio">Nem regisztrált még? Kattintson ide!</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

}