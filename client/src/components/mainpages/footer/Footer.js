import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
		<div className="title"><h1>Danfe Online Store.</h1></div>
				<div className="footer-wrap">
					
				<div className="col-1">
					<a href=""> Gift-Card</a>
					<a href=""> Become Member</a>
					<a href=""> Send us Feedback</a>
				</div>
				<div className="col-2">
					<a href="">About us</a>
					<a href="">Return Policy</a>
					<a href="">Shipping & Delivery</a>
					
				</div>
				<div className="col-3">
					 <a href=""><i className="fas fa-phone-alt"></i></a>
					<a href=""><i className="fab fa-facebook"></i></a>
					<a href=""><i className="fab fa-facebook-messenger"></i></a>
					<a href=""><i className="fab fa-instagram"></i></a>
					<a href=""><i className="fas fa-envelope"></i></a>
					<a href=""><i className="fab fa-tiktok"></i></a>
				</div>

			</div>

			<div className="bar"></div>
			<div className="copyright">
				<p>© 2021 Danfe Online Store. All Rights Reserved</p>
			</div>

	</div>

    )
}

export default Footer
