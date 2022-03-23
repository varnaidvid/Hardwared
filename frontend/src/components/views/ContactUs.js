import React, {Component} from "react"

export default function ContactUs(){
    return (
        <>
        <div className="contact-section-1 main-wrapper">
            <h1 className="bg-text contact-bg-text">SUPPORT</h1>
            <h1 className="title contact-title">Elérhetőség</h1>

            <div className="contact-featured">
                <div className="contact-card">
                    <div className="row pt-10">
                        <div className="col-12 col-md-6">
                            <h1>Értékesítés</h1>
                            <hr/>
                            <div className="d-flex">
                                <img src="/static/images/svg/phone.svg" height={16}/>
                                <span>+36 20 999 9999</span>
                            </div>
                            <div className="d-flex">
                                <img src="/static/images/svg/chat.svg" height={16}/>
                                <span>support@hardwared.com</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1>Szervízelés</h1>
                            <hr/>
                            <div className="d-flex">
                                <img src="/static/images/svg/phone.svg" height={16}/>
                                <span>+36 20 999 9998</span>
                            </div>
                            <div className="d-flex">
                                <img src="/static/images/svg/chat.svg" height={16}/>
                                <span>support@hardwared.com</span>
                            </div>
                        </div>
                    </div>
                    <h2>Bécsi út 277.</h2>
                    <div style={{width: "100%"}}><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Budapest,%20B%C3%A9csi%20%C3%BAt%20277,%201037+(Hardwared)&amp;t=h&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/"></a></iframe></div>

                    <h2>Nyugati tér 4.</h2>
                    <div style={{width: "100%"}}><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Budapest,%20Nyugati%20t%C3%A9r%204,%201132+(Hardwared)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/"></a></iframe></div>
                </div>
            </div>
        </div>

        <hr className="contact-hr"/>

    </>
    )
}