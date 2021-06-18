import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'

import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        if (window.confirm("Do you want to Logo-Out?")) {
            await axios.get('/user/logout')

            localStorage.removeItem('firstLogin')

            window.location.href = "/";
        }
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Create Categories</Link></li>
                <li><Link to="">Orders</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <i class="fas fa-bars"></i>
            </div>

            <div className="logo">

                <Link to="/">{isAdmin ? 'DOS Admin Pannel.' : 'Danfe Online Store'}</Link>

            </div>

            <ul style={styleMenu} onClick={() => setMenu(!menu)}>
                <li><Link to="/products">{isAdmin ? 'Products Edit' : 'Products'}</Link></li>

                <li><Link to="/offers">{isAdmin ? '' : 'Sales/Offer'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login/Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <p className="menu"><i class="fas fa-times"></i></p>
                </li>

            </ul>

            {
                isAdmin ? ''
                    : <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <i class="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
            }

        </header>
    )
}

export default Header