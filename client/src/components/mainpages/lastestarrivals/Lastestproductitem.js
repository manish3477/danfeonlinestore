import React from 'react'
import './lastestproduct.css'

function Lastestproductitem({ product }) {
    return (

        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={product.images.url} alt="productimage" />
                </div>


            </div>
        </div>



    )
}

export default Lastestproductitem
