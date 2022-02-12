import React, {Component} from "react"

export default function Products(){
    return (
        <>
        <div className="pr-section-1 main-wrapper">
            <h1 className="bg-text pr-bg-text">GAMING</h1>
            <h1 className="title pr-title">Játékra alkalmas<br/>rendszerek</h1>

            <div className="row">
                <div className="col-6">
                    <div className="pr-card left">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="sup-title">Nap ajánlata</h5>
                                <h2 className="pr-card-title">Desktop<br/>Slate V1</h2>
                                <div className="d-flex">
                                    <img src="/static/images/svg/money.svg" height="15"/>
                                    <span>289.000 HUF</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="pr-card-img" src="/static/images/pcs/pc2.png" height="115"/>
                                <button type="button" className="main-btn">Részletek ></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="pr-card right">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="sup-title">Nap ajánlata</h5>
                                <h2 className="pr-card-title">Desktop<br/>Xtreme</h2>
                                <div className="d-flex">
                                    <img src="/static/images/svg/money.svg" height="15"/>
                                    <span>289.000 HUF</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="pr-card-img" src="/static/images/pcs/pc2.png" height="115"/>
                                <button type="button" className="main-btn">Részletek ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="pr-hr"/>

        </>
    )
}