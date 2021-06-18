import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CheckoutSteps from '../checkoutsteps/CheckoutSteps'
import { GlobalState } from '../../../GlobalState'





function Checkout() {
    const state = useContext(GlobalState)
    const [checkout, setCheckout] = state.orderAPI.checkout

    const InputEvent = (event) => {

        const value = event.target.value;
        const name = event.target.name;

        setCheckout((preValue) => {
            if (name === "fullname") {
                return {
                    fullname: value,
                    mobilenumber: preValue.mobilenumber,
                    address: preValue.address,
                }
            } else if (name === "mobilenumber") {
                return {
                    fullname: preValue.fullname,
                    mobilenumber: value,
                    address: preValue.address,
                }
            } else if (name === "address") {
                return {
                    fullname: preValue.fullname,
                    mobilenumber: preValue.mobilenumber,
                    address: value,
                }
            }
        })


    }

    const history = useHistory();

    const submithandler = () => {
        history.push("/payment");
    }





    return (
        <div>
            <CheckoutSteps step1  ></CheckoutSteps>


            <div className="checkout-page">

                <form onSubmit={submithandler}>
                    <h2>Checkout</h2>
                    <input className="input1" type="text" name="fullname" required="required"
                        placeholder="Full Name" onChange={InputEvent} />

                    <input className="input1" type="number" name="mobilenumber" required
                        placeholder="Mobile Number" onChange={InputEvent} />

                    <input className="input1" type="text" name="address" required
                        placeholder="Address (Pattern: localAddress-District)" onChange={InputEvent} />




                    <div>
                        <p>Select your exact delivery location:</p>
                        <h2>Google Map link</h2>
                    </div>

                    <div className="row">
                        <button type="submit" >Continue</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout
