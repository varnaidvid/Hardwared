import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { CSRFToken, MainContext } from "../App"
import { NavLink, useHistory } from "react-router-dom"
import toast from "react-hot-toast"
import {
    nullInput,
} from "../constants"

export default function Register(props) {
    
    const [username, setUsername] = useState("")
    const [uidFocus, setUidFocus] = useState(false)

    const [email, setEmail] = useState("")
    const [emailFocus, setEmailFocus] = useState(false)

    const [password, setPassword] = useState("")
    const [pwdFocus, setPwdFocus] = useState(false)

    const [password1, setPassword1] = useState("")
    const [pwd1Focus, setPwd1Focus] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()

        axios.post("http://localhost:3000/api/user/register/", {
            username: username,
            email: email,
            password: password
        })
        .then((response) => { 
            console.log(response)
            toast.success("Sikeres regisztrálás!")
            history.push("/bejelentkezes")
        })
        .catch((error) => {
            console.log(error)
            toast.error("Hiba történt regisztrálás közben!")
        })
        
    }

    return (
        <div className="auth-wrapper">
            <div className="register-container">
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
                        <h1>Regisztráció</h1>
                        <hr/>
                        <form method="POST" onSubmit={handleSubmit} action="/bejelentkezes">
                            <input type="hidden" name="csrfmiddlewaretoken" value={CSRFToken}/>

                            <div className="input-wrapper">
                                <div className="input-container">
                                    <label id="uidLabel" className={ uidFocus ? "focus" : "" }>{ uidFocus ? "Felhasználónév:" : "Felhasználónév..." }</label>
                                    <input name="username" type="text" id="username" 
                                        value={username} 
                                        onFocus={() => setUidFocus(true)} 
                                        onBlur={event => {if (event.target.value === "") {setUidFocus(false)} else {setUidFocus(true)} }}  
                                        onChange={event => setUsername(event.target.value)}
                                    />
                                </div>                                
                                
                                <div className="input-container mb-4">
                                    <label id="emailLabel" className={ emailFocus ? "focus" : "" }>{ emailFocus ? "Email cím:" : "Email cím..." }</label>
                                    <input name="email" type="email" id="email"
                                        value={email} 
                                        onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} 
                                        onBlur={event => { if (event.target.value === "") {setEmailFocus(false)} else {setEmailFocus(true)} }}  
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </div>

                                <div className="input-container mb-4">
                                    <label id="pwdLabel" className={ pwdFocus ? "focus" : "" }>{ pwdFocus ? "Jelszó:" : "Jelszó..." }</label>
                                    <input name="password" type="password" id="password"
                                        value={password} 
                                        onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} 
                                        onBlur={event => { if (event.target.value === "") {setPwdFocus(false)} else {setPwdFocus(true)} }}  
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                </div>

                                <div className="input-container mb-4">
                                    <label id="pwd1Label" className={ pwd1Focus ? "focus" : "" }>{ pwd1Focus ? "Jelszó megerősítése:" : "Jelszó megerősítése..." }</label>
                                    <input name="password1" type="password" id="password1"
                                        value={password1} 
                                        onFocus={() => setPwd1Focus(true)} onBlur={() => setPwd1Focus(false)} 
                                        onBlur={event => { if (event.target.value === "") {setPwd1Focus(false)} else {setPwd1Focus(true)} }}  
                                        onChange={event => setPassword1(event.target.value)}
                                    />
                                </div>
                            </div>
                            <input className="main-btn" type="submit" value="Regisztrálás."/>
                        </form>
                        <NavLink to="/bejelentkezes">Regisztrált már? Kattintson ide!</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

}