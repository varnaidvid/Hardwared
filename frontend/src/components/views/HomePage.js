import React, {Component} from "react"

export const SlideShow = () => {
    return (
        <div id="mainCarousel" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/static/images/pcs/pc1.png" className="d-block w-100" alt="Gép 1" title="Gép 1"/>
                </div>
                <div className="carousel-item">
                    <img src="/static/images/pcs/pc2.png" className="d-block w-100" alt="Gép 2" title="Gép 2"/>
                </div>
                <div className="carousel-item">
                    <img src="/static/images/pcs/pc3.png" className="d-block w-100" alt="Gép 3" title="Gép 3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export const SecondSectionItem = ({...props}, {children}) => {
    return (
        <div className="col-12 col-lg-4 text-center" data-value={`${props.icon}`}>
            <img src={`/static/images/svg/${props.icon}.svg`} className={`icon d-block mx-auto ${props.class}`} alt="Ikon" title="Ikon"/>
            <h2 className="second-title title">{props.title}</h2>
            <hr/>
            <p className="mt-4">{props.desc}</p>
        </div>
    )
}

export const ThirdSectionItem = ({...props}, {children}) => {
    return (
        <div className="col-6 col-md-4 col-lg-2" data-value={`${props.main}`}>
            <p className="sm-text fr-sm-text">Akár</p>
            <h2>{props.main}</h2>
            <p className="sm-text">{props.under}</p>
        </div>
    )
}

export default function HomePage({...props}){
    return (
        <>
        <div className="container custom-container">
            <div className="main-wrapper">
                <div className="first-section">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <h1 className="bg-text d-none d-md-block">Hardver</h1>
                            <h5 className="sup-title">Várnai Dávid</h5>
                            <h1 className="main-title title">Számítástechnikai<br/>Szaküzlet</h1>
                            <a className="main-btn main-btn-anim" role="button">Rólunk.</a>
                        </div>
                        <div className="col-12 col-lg-5">
                            <SlideShow/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="main-hr first-hr"/>
        
        <div className="container custom-container">
            <div className="main-wrapper">
                <div className="second-section">
                    <h1 className="bg-text d-none d-md-block">Technológia</h1>
                    <div className="row">
                        <SecondSectionItem icon={"chip"} class={"chip"} title={"INTEL & AMD"} desc={"Csakis a villámgyors sebességgel és a csúcsteljesítménnyel rendelkező processzorokat használunk fel. Legyen az AMD vagy Intel."}/>
                        <SecondSectionItem icon={"eye"} title={"GEFORCE GRAFIKA"} desc={"Fedezze fel a példátlan grafikai teljesítményt, energiahatékonyságot és élményt biztosító új NVIDIA architektúrák vezérlésével."}/>
                        <SecondSectionItem icon={"vr"} title={"VR KOMPATIBILIS"} desc={"Az NVIDIA RTX 2060 és újabb grafikus kártyákkal ezeket a PC-ket úgy terveztük és teszteltük, hogy életre hozzák az Oculus Rift-et."}/>
                    </div>
                </div>
            </div>
        </div>

        <hr className="main-hr mt-4"/>

        <div className="container custom-container">
            <div className="main-wrapper">
                <div className="third-section">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <img src="/static/images/pcs/pc6.png" className="d-block w-100" alt="Alaplap" title="Alaplap"/>
                        </div>
                        <div className="col-12 col-lg-7">
                            <h1 className="bg-text d-none d-md-block">Termékek</h1>
                            <h5 className="sup-title">Vásárolj most</h5>
                            <h1 className="title">Rendkívüli<br/>Teljesítmény</h1>
                            <p className="mt-2 mb-3">Több mint 20 éves szakértelmünket adjuk bele a nagy teljesítményű PC-k gyártásában, különös tekintettel a hőtechnikai tervezésre, légáramlatra. Minden alkatrészt optimalizálunk és összehasonlítunk, hogy a teljesítmény új szintjét hozzuk létre, amely több, mint a részek összege.</p>
                            <a className="main-btn main-btn-anim" role="button">Termékek</a>                        
                        </div>
                    </div>
                    <div className="row specs">
                        <ThirdSectionItem main={"12-mag"} under={"Processzor"}/>
                        <ThirdSectionItem main={"5.0-Ghz"} under={"Turbó órajel"}/>
                        <ThirdSectionItem main={"128-GB"} under={"Memória"}/>
                        <hr className="specs-hr d-none"/>
                        <ThirdSectionItem main={"3.5-GB/s"} under={"SSD olvasási sebesség"}/>
                        <ThirdSectionItem main={"15-TB"} under={"Tárhely"}/>
                        <ThirdSectionItem main={"50-TFlops"} under={"Számolási képesség"}/>
                    </div>
                </div>
            </div>
        </div>

        <hr className="main-hr mt-4 third-fourth"/>

        <div className="container custom-container">
            <div className="main-wrapper fourth">
                <div className="fourth-section">
                    <div className="row">
                        <div className="col-12 col-lg-5 first-item">
                            <h1 className="bg-text d-none d-sm-block">Teszt</h1>
                            <h5 className="sup-title">Megfelel a költségvetéshez és a teljesítményhez.</h5>
                            <h1 className="title">Egyedi gaming <br/>rendszer</h1>
                            <a className="main-btn main-btn-anim">Összeállítás.</a>
                        </div>

                        <div className="col-lg-2">
                            <hr className="divider"/>
                        </div>

                        <div className="d-block d-lg-none">
                            <hr className="md-divider"/>
                        </div>

                        <div className="col-12 col-lg-5 second-item">
                            <h1 className="bg-text d-none d-sm-block">Segíts</h1>
                            <h5 className="sup-title">Kérdése van? Keresse az ügyfélszolgálatot.</h5>
                            <h1 className="title">ügyfélszolgálat</h1>
                            <a className="main-btn main-btn-anim">Segítség.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}