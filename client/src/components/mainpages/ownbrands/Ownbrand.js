import React from 'react'
import './ownbrand.css'

import bag from './shoes.jpg'
import boomer from './shirt1.jpg'
import shoes from './watch.jpg'

function Ownbrand() {
    return (
        <div className="brands">
            <div className="text">Our own brands: </div>

            <div className="brand_conatiner">
                <div className="brand_row">
                    <div className="brand_conatain"> <img className="brand_image" src={bag} alt=""></img></div>
                    <div className="brand_conatain"> <img className="brand_image" src={boomer} alt=""></img></div>
                    <div className="brand_conatain"> <img className="brand_image" src={shoes} alt=""></img></div>



                </div>

            </div>
            <div className="brand_line"></div>
        </div>
    )
}

export default Ownbrand
