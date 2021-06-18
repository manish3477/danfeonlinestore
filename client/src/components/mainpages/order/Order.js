import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import CheckoutSteps from '../checkoutsteps/CheckoutSteps'
import axios from 'axios'



function Order() {


    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const [checkout, setCheckout] = state.orderAPI.checkout
    const [paymentmethod, setPaymentmethod] = state.orderAPI.paymentmethod




    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }


    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }



    const initaialState = {
        fullname: checkout.fullname,
        mobilenumber: checkout.mobilenumber,
        address: checkout.address,
        paymethod: paymentmethod.paymethod,
        cart: cart.map(product => (product.title)),
        totalprice: " "
    }

    const [placeorder, setPlaceorder] = useState(initaialState)

    const palceanOrder = async () => {
        if (window.confirm("Do you want to place an order?")) {
            try {
                await axios.post('/api/placeorder', { ...placeorder });

                localStorage.removeItem('localcart')
                window.location.href = "/";



            } catch (err) {
                alert(err.response.data.msg)
            }



        }
    }
    return (
        <>

            <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
            <div>User Email.</div>
            <div className="order-summary">


                <div className="column-1">
                    <h2>Shipping Details</h2>
                    <div>	<h4>Name:</h4> {checkout.fullname}</div>
                    <div>	<h4>Contact:</h4> {checkout.mobilenumber}</div>
                    <div><h4>Address:</h4> {checkout.address} </div>
                    <div>	<h4>Payment Method:</h4> {paymentmethod.paymethod}</div>
                    <div>	<h3>Order Items:</h3> </div>
                    {cart.map(product => (
                        <div className="items">
                            <div className="col-1"><img src={product.images.url} alt="image" className="smallimage" ></img></div>
                            <div className="col-2">
                                <h4>{product.title}</h4>
                                <h4>Rs. {product.price * product.quantity}</h4>
                                <div className="count">
                                    <button onClick={() => decrement(product._id)}> - </button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => increment(product._id)}> + </button>
                                </div>

                                <div className="remove"
                                    onClick={() => removeProduct(product._id)}>
                                    Remove
                            </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="column-2">
                    <h2>Order Summary</h2>
                    <div> <h4>Net price</h4> Rs. {total} </div>
                    <div>	<h4>Shipping Cost </h4> Rs. 150*  <p>( For orders inside valley, shipping will be free.)</p> </div>
                    <div>	<h4>Total Cost </h4> Rs. {(total) + 150} /- </div>
                    <button onClick={palceanOrder} disabled={cart.length === 0}>Place an Order</button>
                    <p>(* in shipping cost represent it may vary with your delivery location.)</p>

                </div>
            </div>

        </>

    )
}

export default Order
