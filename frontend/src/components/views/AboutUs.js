import React, {Component} from "react"

export default function AboutUs(){
    return (
        <>
        <div className="about-section-1 main-wrapper">
            <h1 className="bg-text about-bg-text">CONTACT US</h1>
            <h1 className="title about-title">Rólunk</h1>

            <div className="about-featured">
                <div className="about-card">
                    <h2 className="about-card-title">Megbízhatóság szerte a világon</h2>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="about-featured-text">
                                <h2>{">"} 30,000</h2>
                                <span>Ügyfelek</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="about-featured-text not-first">
                                <h2>12+</h2>
                                <span>Fizikai bolt</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="about-featured-text not-first">
                                <h2>100%</h2>
                                <span>Garancia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="about-hr"/>

        <div className="about-people">
            <div className="people-card">
                <div className="d-flex">
                <div className="symbol">
                    <h1>BG</h1>
                </div>
                <div className="main-area">
                    <h1>Bill Gates</h1>
                    <h5 className="sup-title">Társ alapító, Vezérigazgató</h5>
                    <hr className="main-area-hr"/>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    <div className="d-flex brands">
                        <img src="/static/images/svg/facebook.svg" height={16}/>
                        <img src="/static/images/svg/instagram.svg" height={16}/>
                        <img src="/static/images/svg/twitter.svg" height={16}/>
                        <img src="/static/images/svg/youtube.svg" height={16}/>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="about-people mt-5 mb-5">
            <div className="people-card">
                <div className="d-flex">
                <div className="symbol">
                    <h1>MZ</h1>
                </div>
                <div className="main-area">
                    <h1>Mark Zuckerberg</h1>
                    <h5 className="sup-title">Társ alapító, Műszaki vezérigazgató</h5>
                    <hr className="main-area-hr"/>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    <div className="d-flex brands">
                        <img src="/static/images/svg/facebook.svg" height={16}/>
                        <img src="/static/images/svg/instagram.svg" height={16}/>
                        <img src="/static/images/svg/twitter.svg" height={16}/>
                        <img src="/static/images/svg/youtube.svg" height={16}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}