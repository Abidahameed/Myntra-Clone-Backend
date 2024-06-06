const order = require('../Models/order');
const cart = require('../Models/cart');
const product = require('../Models/products');

const postorder = async (req, res) => {
  debugger
  const data = await product.findById(req.body.products_Id).then(async data => {
    if (data != null) {
      if (data.Availability == 0) {
        res.send("out of stock")
      }
      else {
        console.log(req.body)
        const orderlist = await order.create(req.body)
        await cart.deleteOne({ user_Id: req.body.user_Id, products_Id: req.body.products_Id });
        const id = req.body.products_Id;
        await product.findByIdAndUpdate(id, { $inc: { "Availability": -1 } }, { multi: true })
        res.status(200).json({ orderlist });
      }
    }
  })
};


const getorder = async (req, res) => {

  const vieworder = await order.find().populate({ path: 'products_Id' }).populate({ path: 'user_Id' });
  res.status(200).json({ vieworder });
};



const userorderhistory = async (req, res) => {
  const userorder = await order.find({ user_Id: req.query.user_Id }).populate({ path: 'products_Id' });
  res.status(200).json({ userorder });
}
module.exports = { getorder, postorder, userorderhistory };
