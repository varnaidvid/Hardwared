import axios from "axios"
import React, {Component, useState, useEffect} from "react"

function ProductItem({...props}){
    return (
        <div className="pr-item">
            <div className="row">
                <div className="col-3">
                    <img src="/static/images/pcs/pc2.png" className="main-img" height="150"/>
                </div>

                <div className="col-9">
                    <h5 className="sup-title">Akár 2 napon belül</h5>
                    <h1>{props.name}</h1>
                    <h1>{props.price}</h1>
                    <div className="d-flex">

                        {props.rating.ratings__rating__avg}
                        {/* Work in progress */}
                        <img src="/static/images/svg/filled-star.svg" height="15"/>
                        <img src="/static/images/svg/filled-star.svg" height="15"/>
                        <img src="/static/images/svg/filled-star.svg" height="15"/>
                        <img src="/static/images/svg/filled-star.svg" height="15"/>
                        <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                        (45)


                    </div>
                    <span>{props.cpu} - {props.gpu} - {props.memory} RAM - {props.storage}</span>
                    
                    {/* Add Discount Handler */}
                    <h4><img src="/static/images/svg/money.svg" height="12"/> {props.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default function Products(){
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/products/")
        .then((response) => {
            console.log(response.data)
            setProduct(response.data)
        })
    }, [])

    return (
        <>
        <div className="pr-section-1 main-wrapper">
            <h1 className="bg-text pr-bg-text">GAMING</h1>
            <h1 className="title pr-title">Játékra alkalmas<br/>rendszerek</h1>

            <div className="pr-featured main-wrapper">
            <div className="row justify-content-center mx-auto">
                <div className="col-6">
                    <div className="pr-card left">
                        <div className="row justify-content-center mx-auto">
                            <div className="col-12 col-lg-6">
                                <h5 className="sup-title">Nap ajánlata</h5>
                                <h2 className="pr-card-title">Desktop<br/>Slate V1</h2>
                                <div className="d-flex">
                                    <img src="/static/images/svg/money.svg" height="14"/>
                                    <span>289.000 HUF</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img className="pr-card-img" src="/static/images/pcs/pc2.png" height="145"/>
                                <button type="button" className="main-btn">Részletek <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="pr-card right">
                        <div className="row justify-content-center mx-auto">
                            <div className="col-12 col-lg-6">
                                <h5 className="sup-title">Nap ajánlata</h5>
                                <h2 className="pr-card-title">Desktop<br/>Xtreme</h2>
                                <div className="d-flex">
                                    <img src="/static/images/svg/money.svg" height="14"/>
                                    <span>289.000 HUF</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img className="pr-card-img" src="/static/images/pcs/pc3.png" height="145"/>
                                <button type="button" className="main-btn">Részletek <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <hr className="pr-hr"/>

        <div className="pr-section-2 main-wrapper">
            <div className="row justify-content-center w-100">
                <div className="col-3 sorting">
                    <h1>Specify</h1>
                </div>
                <div className="col-9 content">
                    <div className="wrapper">
                        {   product ?  
                                product.map(item => <ProductItem key={item.id} {...item}/>)    
                            : <h1>Nincsenek termékeink!</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}