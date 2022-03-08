import React, { Component, useContext } from "react"
import { NavLink, Redirect, Route } from "react-router-dom"
import { MainContext } from "../App"
import toast from "react-hot-toast"
import axios from "axios"

export const signOut = () => {
    toast.success("Sikeres kijelentkezés!")
    axios.defaults.headers.common["Authorization"] = ""
    localStorage.clear()
    sessionStorage.clear()
}

const Profile = (props) => {
    const [user, setUser] = useContext(MainContext)

    return (
        <>
            <div id="account-slider" className="profile"></div>

            <div className="main-account-wrapper">
                <h1>Üdvözöllek, {user.user.username}!</h1>
                <NavLink to="/" className="signout" activeClassName="active" role="button" onClick={() => {signOut(); setUser()}}><i className="fas fa-sign-out-alt "/></NavLink>
            </div>

            <div className="cart p-relative">
                <div className="title-block">
                    <h2><i className="fas fa-shopping-cart"/> Kosár</h2>
                </div>
                <span className="continue">Tovább {'->'} </span>

            </div>
            
            <div className="cart p-relative">
                <div className="title-block">
                    <h2><i className="fas fa-list"/>Legutóbbi rendelések</h2>
                </div>
                <span className="continue">Több {"->"}</span>
            </div>

            <div className="row trio main-account-wrapper">
                <div className="col-12 col-lg-4">
                    <div className="trio-card p-relative">
                        <div className="trio-icon mail"> <img src="/static/images/svg/mail.png" alt=""/> </div>
                        <h2>Hírlevél</h2>
                        <span>Új termékek, akciók, hírek</span>
                        <div className="switch-container">
                        <label className="switch">
                            <input type="checkbox" name="mail"/>
                            <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="trio-card p-relative">
                        <div className="trio-icon lock"> <img src="/static/images/svg/lock.png" alt=""/> </div>
                        <h2>2FA</h2>
                        <span>Kétlépcsős azonosító</span>
                        <div className="switch-container">
                        <label className="switch">
                            <input type="checkbox" name="2fa"/>
                            <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="trio-card p-relative">
                        <div className="trio-icon notification"> <img src="/static/images/svg/bell.png" alt=""/> </div>
                        <h2>Értesítések</h2>
                        <span>Böngésző értesítés</span>
                        <div className="switch-container">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Settings = (props) => {
    const [user, setUser] = useContext(MainContext)

    return (
        <>
            <div id="account-slider" className="settings"></div>

            <div className="row trio main-account-wrapper">
                <div className="col-12 col-lg-4">
                    <div className="trio-card p-relative">
                        <div className="trio-icon mail"> <img src="/static/images/svg/mail.png" alt=""/> </div>
                        <h2>Hírlevél</h2>
                        <span>Új termékek, akciók, hírek</span>
                        <div className="switch-container">
                        <label className="switch">
                            <input type="checkbox" name="mail"/>
                            <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="trio-card p-relative">
                        <div className="trio-icon lock"> <img src="/static/images/svg/lock.png" alt=""/> </div>
                        <h2>2FA</h2>
                        <span>Kétlépcsős azonosító</span>
                        <div className="switch-container">
                        <label className="switch">
                            <input type="checkbox" name="2fa"/>
                            <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="trio-card p-relative">
                        <div className="trio-icon notification"> <img src="/static/images/svg/bell.png" alt=""/> </div>
                        <h2>Értesítések</h2>
                        <span>Böngésző értesítés</span>
                        <div className="switch-container">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Favorites = (props) => {
    const [user, setUser] = useContext(MainContext)

    return (
        <>
            <div id="account-slider" className="favorites"></div>

            <div className="row main-account-wrapper fav">
                
                <div className="col-12 col-lg-4">
                    <div className="fav-card p-relative">
                        <div className="fav-card-header d-flex">
                            <img src="/static/images/pcs/pc1.png" height="150"/>
                            <div>
                                <h2>Desktop Slate V1</h2>
                                <hr/>
                                <div className="d-flex mt-4 fav-review">
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                                    <span>(49)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               <div className="col-12 col-lg-4">
                    <div className="fav-card p-relative">
                        <div className="fav-card-header d-flex">
                            <img src="/static/images/pcs/pc1.png" height="150"/>
                            <div>
                                <h2>Desktop Slate V1</h2>
                                <hr/>
                                <div className="d-flex mt-4 fav-review">
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                                    <span>(49)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="fav-card p-relative">
                        <div className="fav-card-header d-flex">
                            <img src="/static/images/pcs/pc1.png" height="150"/>
                            <div>
                                <h2>Desktop Slate V1</h2>
                                <hr/>
                                <div className="d-flex mt-4 fav-review">
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                                    <span>(49)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const Orders = (props) => {
    const [user, setUser] = useContext(MainContext)

    return (
        <>
            <div id="account-slider" className="orders"></div>

            <div className="row main-account-wrapper fav">
                
                <div className="col-12 col-lg-4">
                    <div className="fav-card p-relative">
                        <div className="fav-card-header d-flex">
                            <img src="/static/images/pcs/pc1.png" height="150"/>
                            <div>
                                <h2>Desktop Slate V1</h2>
                                <hr/>
                                <div className="d-flex mt-4 fav-review">
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                                    <span>(49)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               <div className="col-12 col-lg-4">
                    <div className="fav-card p-relative">
                        <div className="fav-card-header d-flex">
                            <img src="/static/images/pcs/pc1.png" height="150"/>
                            <div>
                                <h2>Desktop Slate V1</h2>
                                <hr/>
                                <div className="d-flex mt-4 fav-review">
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                                    <span>(49)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="fav-card p-relative">
                        <div className="fav-card-header d-flex">
                            <img src="/static/images/pcs/pc1.png" height="150"/>
                            <div>
                                <h2>Desktop Slate V1</h2>
                                <hr/>
                                <div className="d-flex mt-4 fav-review">
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/filled-star.svg" height="15"/>
                                    <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                                    <span>(49)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default function Account(){
    const [user, setUser] = useContext(MainContext)
    if (!user) return <Redirect to="/bejelentkezes"/>

    return (
        <div className="account-container p-relative">
            <div className="d-flex p-relative">
                <hr/>
                <img src={user.profile.avatar} className="rounded-circle"/>
                <hr/>
            </div>
            <div className="account-wrapper">
                <div className="account-menu p-relative row">
                    <div className="col-6">
                        <div className="left-menu">
                            <NavLink to="/fiok" exact className="text-left" activeClassName="active"><i class="far fa-user-circle"/> Profil.</NavLink>
                            <NavLink to="/fiok/kedvenceim" className="text-right" activeClassName="active"><i class="fas fa-star"/> Kedvenceim.</NavLink>
                        </div>
                    </div>
                
                    <div className="col-6">
                        <div className="right-menu">
                            <NavLink to="/fiok/rendelesek" className="text-left orders" activeClassName="active"><i class="fas fa-list"/> Rendelések.</NavLink>
                            <NavLink to="/fiok/beallitasok" className="text-right" activeClassName="active"><i class="fas fa-cog"/> Beállítások.</NavLink>
                        </div>
                    </div>
                </div>

                <div className="main-account p-relative">

                    <Route path="/fiok" exact><Profile/></Route>
                    <Route path="/fiok/kedvenceim" exact><Favorites/></Route>
                    <Route path="/fiok/rendelesek" exact><Orders/></Route>
                    <Route path="/fiok/beallitasok" exact><Settings/></Route>

                    <img src="/static/images/wave.png" alt="" id="wave"/>
                </div>
            </div>
        </div>
    )

}