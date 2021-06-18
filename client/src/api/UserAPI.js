import { useState, useEffect } from 'react'
import axios from 'axios'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('localcart') || '[]');

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState(cartFromLocalStorage)

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: { Authorization: token }
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)



                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()

        }
    }, [token])

    const addCart = async (product) => {


        const check = cart.every(item => {
            return item._id !== product._id
        })

        if (check) {
            setCart([...cart, { ...product, quantity: 1 }])

            await axios.patch('/user/addcart', { cart: [...cart, { ...product, quantity: 1 }] }, {
                headers: { Authorization: token }
            })

        } else {
            alert("This product has been added to cart.")
        }
    }

    useEffect(() => {
        localStorage.setItem("localcart", JSON.stringify(cart));
    })


    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart


    }
}

export default UserAPI