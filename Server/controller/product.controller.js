const Product = require("../models/product.model");
const asyncHandle = require("../middlewares/async");
const errorResponse = require("../utils/errorResponse");

exports.createProduct = asyncHandle(async (req, res, next) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return next(new errorResponse("Please add all fields", 400));
    }
    const newProduct = await Product.create(product);
    res.status(201).json({
        success: true,
        data: newProduct
    });
});

exports.getProducts = asyncHandle(async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        data: products
    });
});

exports.updateProduct = asyncHandle(async (req, res, next) => {
    const {id} = req.params;
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return next(new errorResponse("Please add all fields", 400));
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
        new: true,
    });
    res.status(200).json({
        success: true,
        data: updatedProduct
    });
});

exports.deleteProduct = asyncHandle(async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        data: product
    });
});

