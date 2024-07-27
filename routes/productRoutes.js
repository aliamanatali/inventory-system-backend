const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/products", ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;
