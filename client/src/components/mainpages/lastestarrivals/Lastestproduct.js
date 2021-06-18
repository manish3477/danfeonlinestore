import React, { useContext, useState } from 'react'
import './lastestproduct.css'
import { GlobalState } from '../../../GlobalState'

import Lastestproductitem from './Lastestproductitem'

function Lastestproduct() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin


    const handleCheck = (id) => {
        products.forEach(product => {
            if (product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }



    return (
        <>



            <div>
                {
                    products.map(product => {
                        return <Lastestproductitem key={product._id} product={product}
                            isAdmin={isAdmin} handleCheck={handleCheck} />
                    })
                }
            </div>

        </>
    )
}

export default Lastestproduct
