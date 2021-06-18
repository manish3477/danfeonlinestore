import { useEffect, useState } from 'react'



function OrderAPI() {
    const [checkout, setCheckout] = useState({
        fullname: "",
        mobilenumber: "",
        address: " ",
    });
    const [paymentmethod, setPaymentmethod] = useState({
        paymethod: "pay on delivery ",
    });




    return {
        checkout: [checkout, setCheckout],
        paymentmethod: [paymentmethod, setPaymentmethod],
    }

}

export default OrderAPI