import axios from "axios"
import React, {Component, useState, useEffect} from "react"
import StarHandler from "../constants/StarHandler"
import toast from "react-hot-toast"

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


    // API
    const [products, setProducts] = useState([])
    const [isFectch, setIsFetch] = useState(false)

    const [isStock, setIsStock] = useState(false)
    const [isSale, setIsSale] = useState(false)

    useEffect(() => {
        setIsFetch(true)

        axios.get("http://localhost:3000/api/products/")
        .then(res => {
            setProducts(res.data)
            setTimeout(() => {
                setIsFetch(false)
            }, 1000)
        })
        .catch(err => {
            setTimeout(() => {
                toast.error("Valami hiba történt!")
                setIsFetch(false)
            }, 1000)
        })
    }, [])


    const filterByStock = (data) => {
        if (!isStock) return data
        const filteredData = products.filter(product => product.stock > 0)
        return filteredData
    }
    const filterBySale = (data) => {
        if (!isSale) return data
        const filteredData = products.filter(product => product.sale !== null)
        return filteredData
    }

    useEffect(() => {
        let filteredProducts = filterByStock(products)
        filteredProducts = filterBySale(filteredProducts)
        setProducts(products)
    }, [isStock, isSale])

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
                            <input 
                                type="checkbox" 
                                id="stock" 
                                value={isStock}
                                onChange={event => setIsStock(event.target.value)}
                            />
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
                                <h3>{ products.length == 0 ? !isFectch ?  "Nincs találat" : "" : products.length + " találat" } </h3>                         
                            </div>
                        </div>
                        {
                            products.length == 0 ? 
                                isFectch ? 
                                (<>
                                    <Skeleton count={3}/> 
                                    <br/> 
                                    <Skeleton count={3}/>     
                                    <br/> 
                                    <Skeleton count={3}/>
                                </>) : 
                                    "" : 
                            products.map(product => <ProductItem key={product.id} {...product}/>)
                        }

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}