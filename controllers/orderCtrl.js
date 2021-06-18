const Orders = require('../models/orderModel')


const orderCtrl = {
    placeorder: async (req, res) => {
        try {
            const { fullname, mobilenumber, address, paymethod, cart, totalprice } = req.body;

            if (mobilenumber.length < 10)
                return res.status(400).json({ msg: "Mobile number not validated." })

            const newOrder = new Orders(
                {
                    fullname, mobilenumber, address, paymethod, cart, totalprice
                }
            )

            await newOrder.save()
            res.json({ msg: "Created a order" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getOrder: async (req, res) => {
        try {
            const orders = await Orders.find()
            res.json(orders)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }

}

module.exports = orderCtrl


