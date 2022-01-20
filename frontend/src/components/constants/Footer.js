import React, {Component} from "react"
import { NavLink } from "react-router-dom"

export default function Footer(){
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="main-wrapper">
                    <div className="row">
                        <div className="col-xs-12 col-md-5 first-item">
                            <img src="/static/images/logo.png" className="logo"/>
                            <p className="small-desc">Hadd tegyük az életét könyebbé. Felejtse el a több órányi kutatást egy tökéletes gép érdekében. Mi itt vagyunk, hogy a pénzéért a lehető legtökéletesebb rendszert adjuk.</p>
                            <div className="row">
                                <div className="col-6 support">
                                    <img src="/static/images/svg/phone.svg" className="icon"/>
                                    <p className="sm-p">+36-20-888-8888</p>
                                </div>
                                <div className="col-6 support">
                                    <img src="/static/images/svg/chat.svg" className="icon"/>
                                    <p className="sm-p">support@hardwared.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-6 second-item">
                            <div className="row" id="footer-2row">
                                <div className="footer-links">
                                    <div className="col-6 col-md-5">
                                        <ul className="list-unstyled">
                                            <li>
                                                <NavLink to="/rolunk" className="footer-link">Rólunk</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/szolgaltatasok" className="footer-link">Szolgáltatások</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/termekek" className="footer-link">Termékek</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/" className="footer-link">Technológia</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-5">
                                        <ul className="list-unstyled">
                                            <li>
                                                <NavLink to="/szerzodesek" className="footer-link">Jótállás</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/szerzodesek" className="footer-link">Használati feltételek</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/gyik" className="footer-link">GYIK</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/ugyfelszolgalat" className="footer-link">Ügyfélszolgálat</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-md-2">
                                    <ul className="list-unstyled">
                                        <li>
                                            <NavLink to="/" className="footer-icon-link"><img src="/static/images/svg/facebook.svg" title="Facebook" alt="Facebook" className="fb"/></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" className="footer-icon-link"><img src="/static/images/svg/instagram.svg" title="Instagram" alt="Instagram"/></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" className="footer-icon-link"><img src="/static/images/svg/twitter.svg" title="Twitter" alt="Twitter"/></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" className="footer-icon-link"><img src="/static/images/svg/youtube.svg" title="Youtube" alt="Youtube"/></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <hr/>
            <p className="copyright text-center">2022 Copyright @ Várnai Dávid</p>
        </footer>   
    )
}