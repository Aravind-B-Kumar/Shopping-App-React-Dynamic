import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

    const [data, changeData] = useState(
        [
            {"name":"Fjallraven - Foldsack No. 1 Backpack", "link": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
            {"name":"Mens Casual Premium Slim Fit T-Shirts ", "link": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
            {"name":"Mens Cotton Jacket", "link": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
            {"name":"Solid Gold Petite Micropave", "link": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" },
            {"name":"White Gold Plated Princess", "link": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" },
            {"name":"Pierced Owl Rose Gold Plated Stainless Steel Double", "link": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
            {"name":"WD 2TB Elements Portable External Hard Drive - USB 3.0", "link": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },

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
                                        return <div class="card" style="width: 18rem;">
                                            <img src={value.link} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <p class="card-text">{value.name}</p>
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