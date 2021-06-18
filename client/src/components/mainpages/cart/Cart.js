import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'




function Cart(props) {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [token] = state.token
    const [total, setTotal] = useState(0)

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


    const checkoutHandler = () => {
        if (!isLogged) return alert("Please login/register to continue buying")
        props.history.push('/checkout');
    };




    if (cart.length === 0)
        return <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Cart Empty</h2>

    return (
        <>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img class="cart_image" src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>Rs. {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>

                            <div className="delete"
                                onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Total: Rs. {total}</h3>
                <button

                    onClick={checkoutHandler}

                >
                    Proceed to Checkout
              </button>
            </div>
        </>
    )
}

export default Cart