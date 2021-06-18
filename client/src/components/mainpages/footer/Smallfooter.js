import React from 'react'
import './footer.css'

function Smallfooter() {
    return (
        <div className="footer">
            <div className="footer_items">
                <div><a href="">About Us.</a></div>
                <div><a href="">Return Policy</a></div>
                <div><a href="">Shipping and Delivery</a></div>
                <div>
                    <a href=""><i className="fas fa-phone-alt"></i> </a> &nbsp;
			<a href=""><i className="fab fa-facebook-messenger"></i> </a> &nbsp;
			<a href=""><i className="fab fa-whatsapp"></i></a>

                </div>

            </div>

        </div>
    )
}

export default Smallfooter
