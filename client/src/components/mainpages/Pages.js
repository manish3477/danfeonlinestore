import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Products from './products/Products'
import { GlobalState } from '../../GlobalState'
import Cart from './cart/Cart'
import Login from './auth/Login'
import Register from './auth/Register'
import Not_found from './utils/Not_found'
import CreateProduct from './createProduct/CreateProduct'
import Categories from './categories/Categories'
import DetailProduct from './detailProduct/DetailProduct'
import Checkout from './checkout/Checkout'
import Payment from './payment/Payment'
import Order from './order/Order'
import Homepage from './homepage/Homepage'
import History from './history/History'

function Pages() {
    return (
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/create_product" exact component={CreateProduct} />
            <Route path="/category" exact component={Categories} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/payment" exact component={Payment} />
            <Route path="/order" exact component={Order} />
            <Route path="/history" exact component={History} />

            <Route path="*" exact component={Not_found} />
        </Switch>
    )
}

export default Pages