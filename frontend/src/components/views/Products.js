import axios from "axios"
import React, {Component, useState, useEffect} from "react"
import StarHandler from "../constants/StarHandler"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const ProductItem = (props) => {
    return (
        <div className="pr-item">
            <div className="row">
                <div className="col-3">
                    <img src="/static/images/pcs/pc2.png" className="main-img" height="150"/>
                </div>

                <div className="col-9">
                    <h5 className="sup-title">Akár 2 napon belül</h5>
                    <h1>{props.name}</h1>
                    <div className="d-flex">

                        { 
                            props.rating.ratings__rating__avg > 4.6 ? <StarHandler type={"10"}/> :
                            props.rating.ratings__rating__avg > 4.2 ? <StarHandler type="9"/> :
                            props.rating.ratings__rating__avg > 3.6 ? <StarHandler type="8"/> :
                            props.rating.ratings__rating__avg > 3.2 ? <StarHandler type="7"/> :
                            props.rating.ratings__rating__avg > 2.6 ? <StarHandler type="6"/> :
                            props.rating.ratings__rating__avg > 2.2 ? <StarHandler type="5"/> :
                            props.rating.ratings__rating__avg > 1.8 ? <StarHandler type="4"/> :
                            props.rating.ratings__rating__avg > 1.2 ? <StarHandler type="3"/> :
                            props.rating.ratings__rating__avg > 0.8 ? <StarHandler type="2"/> :
                            props.rating.ratings__rating__avg > 0 ? <StarHandler type="1"/> : "No review"
                        }
                        <span>({props.rating_len.ratings__rating__count})</span>
                    </div>
                    <h5 className="desc">{props.cpu} - {props.gpu} - {props.memory} RAM - {props.storage}</h5>
                    
                    {
                        props.sale ?
                        <div className="discount-wrapper">
                            <div className="off">
                                    {Math.abs(((props.sale / props.price - 1) * 100)).toFixed(1)}% OFF
                                </div>
                            <div className="discount">
                                <h4><img src="/static/images/svg/money.svg" height="12"/> {props.sale} HUF</h4>
                            </div>
                        </div>
                        : <h4><img src="/static/images/svg/money.svg" height="12"/> {props.price} HUF</h4>
                    }
                </div>
            </div>
        </div>
    )
}

export default function Products(){

    const [product, setProduct] = useState([])
    const [isFectch, setIsFetch] = useState(false)

    const getProducts = (req) => {
        setIsFetch(true)

        axios.get("http://localhost:3000/api/products/", req)
        .then((response) => {
            console.log(response.data)
            setProduct(response.data)
            setTimeout(() => {
                setIsFetch(false)                
            }, 750);
        })
        .catch((error) => {
            console.log(error)
            setTimeout(() => {
                setIsFetch(false)                
            }, 750);        
        })
    }

    useEffect(() => {
        getProducts()
    }, [])


    const newQuery = (type, value) => {
        const params = new URLSearchParams()

        params.append(type, value)
        const request = {
            params: params
        }
        
        return getProducts(request)
    }

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
                    <h1>Preferencia</h1>
                    <hr className="sorting-hr"/>
                    <h2>Általános</h2>

                        <label className="checkbox-container">
                            <span className="checkbox-title">Készleten</span>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">Gyors kiszállítás</span>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">Leárazás</span>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>

                    <input type="number" min="100000" max="1000000" name="price" onBlur={event => newQuery(event.target.name, event.target.value)}/>
                </div>
                <div className="col-9 content">
                    <div className="wrapper">
                        <div className="top-content">
                            <div className="d-flex">
                                <h3>{ product.length == 0 ? "Nincs találat" : product.length + " találat" } </h3>                         
                            </div>
                        </div>
                        {
                            product.length == 0 ? 
                                isFectch ? <Skeleton count={3}/> : 
                                    "" : 
                            product.map(item => <ProductItem key={item.id} {...item}/>)
                        }

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}