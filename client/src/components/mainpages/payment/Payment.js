import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CheckoutSteps from '../checkoutsteps/CheckoutSteps'
import './payment.css'
import { GlobalState } from '../../../GlobalState'



function Payment() {
    const state = useContext(GlobalState)
    const [paymentmethod, setPaymentmethod] = state.orderAPI.paymentmethod

    const InputEvent = (event) => {
        event.preventDefault();
        console.log(event.target.value)

        const value = event.target.value;

        setPaymentmethod((preValue) => {
            return {
                paymethod: value,
            }
        })

    }


    return (
        <>
            <CheckoutSteps step1 step2 ></CheckoutSteps>
            <form>
                <div className="payment-options">


                    <h2>Payment Method</h2>
    ( Currently, we are working on Esewa and Bank payment method, please select default Pay On Deliver Option. )
<div className="option">
                        <div> <input type="radio" id="payondelivery" value="PayOnDelivery" name="paymentmethod" required checked onChange={InputEvent} /></div>
                        <div>     Pay On Delivery </div>
                    </div>
                    <div className="option">
                        <div>  <input type="radio" id="esewa" value="E-Sewa" name="paymentmethod" required onChange={InputEvent} /></div>
                        <div>  Via. E-Sewa </div>
                    </div>
                    <div className="option">
                        <div>  <input type="radio" id="mobilebanking" value="Mobile Banking" name="paymentmethod" required onChange={InputEvent} /></div>
                        <div>  Via. Mobile Banking </div>
                    </div>

                    <Link to="/order"> <button type="submit">Continue</button> </Link>

                </div>


            </form >
        </>
    )
}

export default Payment
