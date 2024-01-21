const Products = require("../model/model")

const getAllProducts =  async (req , res) =>{
    let allProducts = await Products.find({})
    res.send(allProducts)
}

const getPostProducts =  async (req , res) =>{
    let newProduct = new Products(req.body)
    newProduct.save()
}

const getDeleteProducts =  async (req , res) =>{
    let found = await Products.findOne({id:req.params.id})
    await Products.findByIdAndDelete({_id:found._id})
}

const getByID =  async (req , res) =>{
    let found = await Products.findOne({id:req.params.id})
    res.send(found)
}

module.exports = {
    getAllProducts ,getDeleteProducts , getPostProducts , getByID
}