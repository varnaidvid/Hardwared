import axios from "axios"
import React, {Component, useState, useEffect} from "react"
import StarHandler from "../constants/StarHandler"
import toast, { useToaster } from "react-hot-toast"
import handleDropAnim from "../constants/handleDropAnim"
import { Link, Route, useParams } from "react-router-dom"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const ProductItem = (props) => {
    return (
        <Link to={`/termekek/${props.id}`}>
            <div className="pr-item">
                <div className="row">
                    <div className="col-12 col-xl-3">
                        <img src="/static/images/pcs/pc2.png" className="main-img" height="150"/>
                    </div>

                    <div className="col-12 col-xl-9">
                        <div className="pr-item-content">
                            <h5 className="sup-title">Akár 2 napon belül</h5>
                            <h1>{props.name}</h1>
                            <div className="d-flex review">
                                { 
                                    props.rating == 5 ? <StarHandler type="5"/> :
                                    props.rating == 4 ? <StarHandler type="4"/> :
                                    props.rating == 3 ? <StarHandler type="3"/> :
                                    props.rating == 2 ? <StarHandler type="2"/> :
                                    props.rating == 1 ? <StarHandler type="1"/> : <span style={{color: "#8a8a8f"}}>Nincs értékelés</span>
                                }
                                <span>{ props.rating_len !== 0 ? "(" + props.rating_len + ")" : "" }</span>
                            </div>
                            <h5 className="desc">{props.cpu} - {props.gpu} - {props.memory} RAM - {props.storage}</h5>
                            
                            {
                                props.sale ?
                                <div className="discount-wrapper">
                                    <div className="off">
                                        <span>{Math.abs(((props.sale / props.price - 1) * 100)).toFixed(1)}% OFF </span>
                                    </div>
                                    <div className="discount">
                                        <h4><img src="/static/images/svg/money.svg" height="12"/> {props.sale} HUF</h4>
                                    </div>
                                </div>
                                : <div className="price-wrapper"><h4><img src="/static/images/svg/money.svg" height="12"/> {props.price} HUF</h4></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const arrowAnim = () => {
    document.getElementById("priceArrow").animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(-15deg)'},
        {transform: 'rotate(-30deg)'},
        {transform: 'rotate(0deg)'},
    ], {
        duration: 250,
        iterations: 1,
    })
}

export default function Products(){

    const [sortDrop, setSortDrop] = useState(false)

    // API DATA
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [isFetch, setIsFetch] = useState(true)

    // GENERIC
    const [isGenericDrop, setIsGenericDrop] = useState(false)
    const [isStock, setIsStock] = useState(false)
    const [isSale, setIsSale] = useState(false)
    
    // PRICE
    const [isPriceDrop, setIsPriceDrop] = useState(false)
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    
    // GPU
    const [isGpuDrop, setIsGpuDrop] = useState(false)
    const [isAmd, setIsAmd] = useState(false)
    const [isNvidia, setIsNvidia] = useState(false)

    // CPU
    const [isCpuDrop, setIsCpuDrop] = useState(false)
    const [isAmdCpu, setIsAmdCpu] = useState(false)
    const [isIntel, setIsIntel] = useState(false)

    // RAM
    const [isRamDrop, setIsRamDrop] = useState(false)
    const [isRam8, setIsRam8] = useState("")
    const [isRam16, setIsRam16] = useState("")
    const [isRam32, setIsRam32] = useState("")
    const [isRam64, setIsRam64] = useState("")

    // REVIEW
    const [isStarDrop, setIsStarDrop] = useState(false)
    const [isStar5, setIsStar5] = useState(false)
    const [isStar4, setIsStar4] = useState(false)
    const [isStar3, setIsStar3] = useState(false)
    const [isStar2, setIsStar2] = useState(false)
    const [isStar1, setIsStar1] = useState(false)

    // STORAGE
    const [isStorageDrop, setIsStorageDrop] = useState(false)
    const [isSSD, setIsSSD] = useState(false)
    const [isHDD, setIsHDD] = useState(false)
    const [isBothStorage, setIsBothStorage] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3000/api/products/")
        .then(res => {
            setProducts(res.data)
            setFilteredProducts(res.data)
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


    const filterByStock = data => {
        if (!isStock) return data
        return data.filter(product => product.stock > 0)
    }
    const filterBySale = data => {
        if (!isSale) return data
        return data.filter(product => product.sale !== null)
    }
    const filterByPrice = data => {
        if (!minPrice && !maxPrice) return data
        if (minPrice && !maxPrice) return data.filter(product => product.sale ? product.sale >= minPrice : product.price >= minPrice)
        if (!minPrice && maxPrice) return data.filter(product => product.sale ? product.sale <= maxPrice : product.price <= maxPrice)
        return data.filter(product => product.sale ? product.sale >= minPrice && product.sale <= maxPrice : product.price >= minPrice && product.price <= maxPrice)
    }
    const filterByGpu = data => {
        if ((!isNvidia && !isAmd) || (isNvidia && isAmd)) return data
        if (isNvidia && !isAmd) return data.filter(product => product.gpu_type == "NVIDIA")
        return data.filter(product => product.gpu_type == "AMD")
    }
    const filterByCpu = data => {
        if ((!isIntel && !isAmdCpu) || (isIntel && isAmdCpu)) return data
        if (isIntel && !isAmdCpu) return data.filter(product => product.cpu_type == "INTEL")
        return data.filter(product => product.cpu_type == "AMD")
    }
    const filterByRam = data => {
        if (!isRam8 && !isRam16 && !isRam32 && !isRam64) return data
        return data.filter(product => product.memory == isRam8 || product.memory == isRam16 || product.memory == isRam32 || product.memory == isRam64)
    }
    const filterByStar = data => {
        if (!isStar1 && !isStar2 && !isStar3 && !isStar4 && !isStar5) return data
        return data.filter(product => product.rating == isStar1 || product.rating == isStar2 || product.rating == isStar3 || product.rating == isStar4 || product.rating == isStar5)
    }
    const filterByStorage = data => {
        if (!isHDD && !isSSD && !isBothStorage) return data
        return data.filter(product => product.storage_type == isHDD || product.storage_type == isSSD || product.storage_type == isBothStorage)
    }

    const handleFilter = () => {
        let fProducts = filterByStock(products)
        fProducts = filterBySale(fProducts)
        fProducts = filterByPrice(fProducts)
        fProducts = filterByGpu(fProducts)
        fProducts = filterByCpu(fProducts)
        fProducts = filterByRam(fProducts)
        fProducts = filterByStar(fProducts)
        fProducts = filterByStorage(fProducts)
        setFilteredProducts(fProducts)
    }
    useEffect(() => {
        handleFilter()
    }, [isStock, isSale, isAmd, isNvidia, isAmdCpu, isIntel, isRam8, isRam16, isRam32, isRam64, isStar1, isStar2, isStar3, isStar4, isStar5, isSSD, isHDD, isBothStorage])

    return (
        <>
        <div className="pr-section-1 main-wrapper">
            <h1 className="bg-text pr-bg-text">GAMING</h1>
            <h1 className="title pr-title">Játékra alkalmas<br/>rendszerek</h1>


            {/* Featured Products */}
            <div className="pr-featured main-wrapper">
            <div className="row">
                <div className="col-12 col-xl-6 d-none d-xl-flex">
                    <div className="pr-card">
                        <h5 className="sup-title">Nap ajánlata</h5>
                        <h2 className="pr-card-title">Desktop<br/>Slate V1</h2>
                        <img className="pr-card-img" src="/static/images/pcs/pc2.png" height="145"/>
                        <div className="d-flex">
                            <img src="/static/images/svg/money.svg" height="14"/>
                            <span>289.000 HUF</span>
                            <button type="button" className="main-btn filled-btn-anim">Részletek <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-xl-6">
                    <div className="pr-card">
                        <h5 className="sup-title">Kiemelt termék</h5>
                        <h2 className="pr-card-title">Desktop<br/>Xtreme</h2>
                        <img className="pr-card-img" src="/static/images/pcs/pc3.png" height="145"/>
                        <div className="d-flex">
                            <img src="/static/images/svg/money.svg" height="14"/>
                            <span>289.000 HUF</span>
                            <button type="button" className="main-btn filled-btn-anim">Részletek <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <hr className="pr-hr"/>

        <div className="pr-section-2 main-wrapper mb-5">

            <Route path="/termekek/:id"><SingleProduct/></Route>

            <Route path="/termekek" exact>
            <div className="row">

                {/* Sorting */}
                <div className="col-12 col-xl-3">
                <div className="navbar-expand-xl h-100">
                <div className="sorting collapse navbar-collapse" id="sortingDrop">
                    <h1>Preferencia</h1>
                    <hr className="sorting-hr"/>

                    <h2 href="#genericMenu" data-bs-toggle="collapse" aria-expanded={isGenericDrop} 
                        onClick={event => {!isGenericDrop ? setIsGenericDrop(true) : setIsGenericDrop(false); handleDropAnim(isGenericDrop ? 2 : 1, "dropGeneric")}}>Általános <i className="fas fa-angle-right" id="dropGeneric"/></h2>
                    <div className="collapse" id="genericMenu">
                        <label className="checkbox-container">
                            <span className="checkbox-title">Készleten</span>
                            <input 
                                type="checkbox" 
                                value={isStock}
                                onChange={() => !isStock ? setIsStock(true) : setIsStock(false)}
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
                            <input 
                                type="checkbox"
                                value={isSale}
                                onChange={() => !isSale ? setIsSale(true) : setIsSale(false)}                                
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    
                    <h2 href="#priceMenu" data-bs-toggle="collapse" aria-expanded={isPriceDrop} 
                        onClick={event => {!isPriceDrop ? setIsPriceDrop(true) : setIsPriceDrop(false); handleDropAnim(isPriceDrop ? 2 : 1, "dropPrice")}}>Ár <i className="fas fa-angle-right" id="dropPrice"/></h2>
                    <div className="collapse" id="priceMenu">
                        <div className="p-relative">

                                <input 
                                    type="number" 
                                    placeholder="Minimum..."
                                    onChange={event => event.target.value ? setMinPrice(event.target.value) : setMinPrice("")}
                                />

                                <input 
                                    type="number" 
                                    className="mt-3"
                                    placeholder="Maximum..."
                                    onChange={event => event.target.value ? setMaxPrice(event.target.value) : setMaxPrice("")}
                                />

                            <button type="button" className="price-btn" onClick={() => {handleFilter(); arrowAnim()}}><i id="priceArrow" className="fas fa-arrow-right"/></button>
                        </div>
                    </div>

                    <h2 href="#gpuMenu" data-bs-toggle="collapse" aria-expanded={isGpuDrop} 
                        onClick={event => {!isGpuDrop ? setIsGpuDrop(true) : setIsGpuDrop(false); handleDropAnim(isGpuDrop ? 2 : 1, "dropGpu")}}>Videókártya<br/> márka <i className="fas fa-angle-right" id="dropGpu"/></h2>
                    <div className="collapse" id="gpuMenu">
                        <label className="checkbox-container">
                            <span className="checkbox-title">NVIDIA</span>
                            <input 
                                type="checkbox" 
                                value={isNvidia}
                                onChange={() => !isNvidia ? setIsNvidia(true) : setIsNvidia(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">AMD</span>
                            <input 
                                type="checkbox" 
                                value={isAmd}
                                onChange={() => !isAmd ? setIsAmd(true) : setIsAmd(false)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <h2 href="#cpuMenu" data-bs-toggle="collapse" aria-expanded={isCpuDrop} 
                        onClick={event => {!isCpuDrop ? setIsCpuDrop(true) : setIsCpuDrop(false); handleDropAnim(isCpuDrop ? 2 : 1, "dropCpu")}}>Processzor<br/> márka <i className="fas fa-angle-right" id="dropCpu"/></h2>
                    <div className="collapse" id="cpuMenu">
                        <label className="checkbox-container">
                            <span className="checkbox-title">Intel</span>
                            <input 
                                type="checkbox" 
                                value={isIntel}
                                onChange={() => !isIntel ? setIsIntel(true) : setIsIntel(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">AMD</span>
                            <input 
                                type="checkbox" 
                                value={isAmdCpu}
                                onChange={() => !isAmdCpu ? setIsAmdCpu(true) : setIsAmdCpu(false)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <h2 href="#ramMenu" data-bs-toggle="collapse" aria-expanded={isRamDrop} 
                        onClick={event => {!isRamDrop ? setIsRamDrop(true) : setIsRamDrop(false); handleDropAnim(isRamDrop ? 2 : 1, "dropRam")}}>Memória <i className="fas fa-angle-right" id="dropRam"/></h2>
                    <div className="collapse" id="ramMenu">
                        <label className="checkbox-container">
                            <span className="checkbox-title">8 GB</span>
                            <input 
                                type="checkbox" 
                                value={isRam8}
                                onChange={() => !isRam8 ? setIsRam8("8 GB") : setIsRam8("")}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">16 GB</span>
                            <input 
                                type="checkbox" 
                                value={isRam16}
                                onChange={() => !isRam16 ? setIsRam16("16 GB") : setIsRam16("")}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">32 GB</span>
                            <input 
                                type="checkbox" 
                                value={isRam32}
                                onChange={() => !isRam32 ? setIsRam32("32 GB") : setIsRam32("")}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">64 GB</span>
                            <input 
                                type="checkbox" 
                                value={isRam64}
                                onChange={() => !isRam64 ? setIsRam64("64 GB") : setIsRam64("")}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <h2 href="#starMenu" data-bs-toggle="collapse" aria-expanded={isStarDrop} 
                        onClick={event => {!isStarDrop ? setIsStarDrop(true) : setIsStarDrop(false); handleDropAnim(isStarDrop ? 2 : 1, "dropStar")}}>Értékelés <i className="fas fa-angle-right" id="dropStar"/></h2>
                    <div className="collapse" id="starMenu">
                        <label className="checkbox-container">
                            <span className="checkbox-title">
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                            </span>
                            <input 
                                type="checkbox" 
                                value={isStar5}
                                onChange={() => !isStar5 ? setIsStar5(5) : setIsStar5(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                            </span>
                            <input 
                                type="checkbox" 
                                value={isStar4}
                                onChange={() => !isStar4 ? setIsStar4(4) : setIsStar4(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                            </span>
                            <input 
                                type="checkbox" 
                                value={isStar3}
                                onChange={() => !isStar3 ? setIsStar3(3) : setIsStar3(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                            </span>
                            <input 
                                type="checkbox" 
                                value={isStar2}
                                onChange={() => !isStar2 ? setIsStar2(2) : setIsStar2(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">
                                <img src="/static/images/svg/filled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                                <img src="/static/images/svg/unfilled-star.svg" height="20"/>
                            </span>
                            <input 
                                type="checkbox" 
                                value={isStar1}
                                onChange={() => !isStar1 ? setIsStar1(1) : setIsStar1(false)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <h2 href="#storageMenu" data-bs-toggle="collapse" aria-expanded={isStorageDrop} 
                        onClick={event => {!isStorageDrop ? setIsStorageDrop(true) : setIsStorageDrop(false); handleDropAnim(isStorageDrop ? 2 : 1, "dropStorage")}}>Tárhely <i className="fas fa-angle-right" id="dropStorage"/></h2>
                    <div className="collapse" id="storageMenu">
                        <label className="checkbox-container">
                            <span className="checkbox-title">SSD</span>
                            <input 
                                type="checkbox" 
                                value={isSSD}
                                onChange={() => !isSSD ? setIsSSD("SSD") : setIsSSD(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">SSD és HDD</span>
                            <input 
                                type="checkbox" 
                                value={isBothStorage}
                                onChange={() => !isBothStorage ? setIsBothStorage("SSD & HDD") : setIsBothStorage(false)}
                            />
                            <span className="checkmark"></span>
                        </label>

                        <label className="checkbox-container">
                            <span className="checkbox-title">HDD</span>
                            <input
                                type="checkbox"
                                value={isHDD}
                                onChange={() => !isHDD ? setIsHDD("HDD") : setIsHDD(false)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                </div>
                </div>


                {/* Products */}
                <div className="col-12 col-xl-9 pr-content">
                    <div className="wrapper">
                        <div className="top-content p-relative">
                            <div className="d-flex">
                                <h3>{ filteredProducts.length == 0 ? !isFetch ?  "Nincs találat" : "" : filteredProducts.length + " találat" } </h3>
                                <button className="sortingDropButton d-block d-xl-none" onClick={() => setSortDrop(!sortDrop)} type="button" data-bs-toggle="collapse" data-bs-target="#sortingDrop" aria-expanded="false" aria-controls="sortingDrop"><i className={!sortDrop ? "fas fa-filter" : "fas fa-times fa-lg"}/></button>
                            </div>
                        </div>
                            {
                                filteredProducts == 0 ?
                                products.length == 0 ? (
                                    <div className="mt-5">
                                        <div className="row">
                                            <div className="col-3 col-md-2">
                                                <div className="loading-circle">
                                                    <Skeleton circle width="100%" height="100%"/>
                                                </div>                                            
                                            </div>
                                            <div className="col-9 col-md-10">
                                                <Skeleton count={3}/>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-3 col-md-2">
                                                <div className="loading-circle">
                                                    <Skeleton circle width="100%" height="100%"/>
                                                </div>                                            
                                                </div>
                                            <div className="col-9 col-md-10">
                                                <Skeleton count={3}/>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-3 col-md-2">
                                                <div className="loading-circle">
                                                    <Skeleton circle width="100%" height="100%"/>
                                                </div>
                                            </div>
                                            <div className="col-9 col-md-10">
                                                <Skeleton count={3}/>
                                            </div>
                                        </div>
                                    </div>
                                ) : "" : filteredProducts.map(product => <ProductItem key={product.id} {...product}/>)
                            }
                    </div>
                </div>
            </div>
            </Route>

        </div>                           
        </>
    )
}

const SingleProduct = props => {
    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [isFetch, setIsFetch] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/products/?id=${id}`)
        .then(res => {
            setProduct(res.data)
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
    }, [id])

    return (
        <div className="pr-content">
            <div className="d-flex">
                <Link to="/termekek">Termékek {">"} </Link>
                <Link to={`/termekek/${product.family}`}> {product.family} {">"} </Link>
                <Link to={`/termekek/${product.id}`}> {product.name}</Link>
            </div>
           {
                <ProductItem key={product.id} {...product}/>
            }
        </div>
    )
}