const {Router} = require("express");
const router = Router();
const {createProduct, getProducts, updateProduct,deleteProduct} = require("../controller/product.controller");

router.get("/get", getProducts);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;