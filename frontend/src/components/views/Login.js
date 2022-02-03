import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { CSRFToken, MainContext } from "../App"
import { NavLink, useHistory } from "react-router-dom"
import toast from "react-hot-toast"
import {
    nullInput,
} from "../constants"
import $ from "jquery"

export default function Login(){
    const [user, setUser] = useContext(MainContext)

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [uidFocus, setUidFocus] = useState(false)

    const [password, setPassword] = useState("")
    const [pwdFocus, setPwdFocus] = useState(false)

    const [remember, setRemember] = useState(false)
    const [showPwd, setShowPwd] = useState(false)

    const [submitState, setSubmitState] = useState("normal")

    const handleSubmit = event => {        
        event.preventDefault()        

        setSubmitState("loading")        

        axios.post("http://localhost:3000/api/user/login/", {
            username: username,
            password: password
        })
        .then((response) => {
            if (remember === true) {
                localStorage.setItem("user", JSON.stringify(response.data))
            } else {
                sessionStorage.setItem("user", JSON.stringify(response.data))
            }

            axios.defaults.headers.common["Authorization"] = `Token ${response.data.token}`
            
            setSubmitState("success")

            setTimeout(() => {
                setUser(response.data)
                toast.success("Sikeres bejelentkezés!")
                history.push("/fiok")                
            }, 1000)
        })
        .catch((error) => {
            const pwdInput = document.getElementById("password")
            const uidInput = document.getElementById("username")
            setTimeout(() => {            
            if (username === "" && password == ""){
                nullInput(pwdInput)
                nullInput(uidInput)
                toast.error("Hiányos adatok!")
            } else if (username === "") {
                nullInput(uidInput)
                toast.error("Hiányos felhasználónév!")
            } else if (password === "") {
                nullInput(pwdInput)
                toast.error("Hiányos jelszó!")
            } else {
                nullInput(pwdInput)
                nullInput(uidInput)
                toast.error("Rossz adatok!")
                console.log(error)                
            };
            setSubmitState("error")
        }, 1500);
        })
    }

    return (
        <>
        <h1 className="bg-text auth-bg-text">Felhasználó</h1>
        <div className="auth-wrapper">
            <div className="login-container">
                <h1>Bejelentkezés</h1>
                <hr className="title-hr"/>
                <form method="POST" onSubmit={handleSubmit} action="/fiok">
                    <input type="hidden" name="csrfmiddlewaretoken" value={CSRFToken}/>

                    <div className="input-wrapper">
                    <div className="input-container">
                        <label id="uidLabel" className={ uidFocus ? "focus" : "" }><img className="long" src="/static/images/svg/user.svg"/>{ uidFocus ? "Felhasználónév:" : "Felhasználónév..."}</label>
                        <input name="username" type="text" id="username"
                            value={username}
                            onFocus={() => setUidFocus(true)}
                            onBlur={event => {if (event.target.value === ""){setUidFocus(false)} else {setUidFocus(true)}}}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    </div>

                    <div className="input-wrapper">
                    <div className="input-container">
                        <label id="pwdLabel" className={ pwdFocus ? "focus" : "" }><img src="/static/images/svg/key.svg"/>{ pwdFocus ? "Jelszó:" : "Jelszó..."}</label>
                        <input name="password" type={ showPwd ? "text" : "password" } id="password"
                            value={password}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={event => {if (event.target.value === ""){setPwdFocus(false)} else {setPwdFocus(true)}}}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    </div>

                    <div className="row sliders">
                        <div className="col-6">
                            <div className="switch-container">
                            <label className="switch">
                                <input type="checkbox" name="remember" onChange={event => {
                                    if (event.target.checked === true) {
                                        setRemember(true)
                                    } else {
                                    setRemember(false)
                                }
                                }} checked={remember} value={remember}/>
                                <span class="slider round"></span>
                                <label for="remember" id="rememberLabel">Emlékezz rám</label>
                            </label>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="switch-container">
                            <label className="switch">
                                <input type="checkbox" name="pwdShow" onChange={event => {
                                    if (event.target.checked === true) {
                                        setShowPwd(true)
                                    } else {
                                    setShowPwd(false)
                                }
                                }} checked={showPwd} value={showPwd}/>
                                <span class="slider round"></span>
                                <label for="pwdShow" id="showPwdLabel">Jelszó mutatása</label>
                            </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="submit-wrapper">
                        <button className={ submitState === "loading" ? "main-btn submit-btn loading" : submitState === "success" ? "main-btn submit-btn success" : submitState === "error" ? "main-btn submit-btn error" : "main-btn submit-btn"} type="submit" id="submit">
                            <span>Belépés.</span>
                            <div className={ submitState === "success" ? "submit-success active" : "submit-success" }>
                                <i className="fas fa-check"></i>
                            </div>
                            <div className={ submitState === "error" ? "submit-error active" : "submit-error" }>
                                <i class="fas fa-times"></i>
                            </div>
                        </button>
                    </div>
    
                    <h5>Vagy lépjen be...</h5>
                    <hr className="or-login-hr"/>

                    <div className="or-login">
                        <img className="symbol" src="/static/images/svg/login.svg"/>
                        <div className="or-login-wrapper">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <button className="login-with-google" type="button"><img src="/static/images/google.png"/></button>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <button className="login-with-facebook pb-2" type="button"><img src="/static/images/facebook.png"/></button>
                                </div>
                                <div className="col-12 col-md-12 col-lg-4">
                                    <button className="login-with-apple" type="button"><img src="/static/images/apple.png"/></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
                <NavLink to="/regisztracio">Nem regisztrált még? Kattintson ide!</NavLink>
            </div>
        </div>
        </>
    )
}