import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

    const [data, changeData] = useState(
        [
            { "name": "Fjallraven - Foldsack No. 1 Backpack", "link": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
            { "name": "Mens Casual Premium Slim Fit T-Shirts ", "link": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
            { "name": "Mens Cotton Jacket", "link": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
            { "name": "Solid Gold Petite Micropave", "link": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" },
            { "name": "White Gold Plated Princess", "link": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" },
            { "name": "Pierced Owl Rose Gold Plated Stainless Steel Double", "link": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
            { "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0", "link": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
            { "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", "link": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" },
            { "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "link": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" },
            { "name": "Opna Women's Short Sleeve Moisture", "link": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" },
            { "name": "DANVOUY Womens T Shirt Casual Cotton Short", "link": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" },
        ]
    )

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <p class="fs-2">All Recipies</p>

                        <div className="row g-3">



                            {
                                data.map(
                                    (value, index) => {
                                        return <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.link} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <p class="card-text">{value.name}</p>
                                                </div>
                                            </div>
                                        </div>

                                    }
                                )
                            }

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll