import React from 'react';

export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">

            <div className={props.step1 ? 'active' : ''}>Shipping Details</div>
            <div className={props.step2 ? 'active' : ''}>Payment Method</div>
            <div className={props.step3 ? 'active' : ''}>Place an Order</div>
        </div>
    );
}