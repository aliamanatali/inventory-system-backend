const { Product } = require("../models"); // Adjust the path to your models

// Get all products
async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
}


// Create a new product
async function createProduct(req, res) {
  try {
    const {
      name,
      qrCode,
      category,
      purchaseDate,
      warrantyDate,
      condition,
      status,
    } = req.body;

    if (
      !name ||
      !qrCode ||
      !category ||
      !purchaseDate ||
      !warrantyDate ||
      !condition ||
      !status
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProduct = await Product.create({
      name,
      qrCode,
      category,
      purchaseDate,
      warrantyDate,
      condition,
      status,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Error creating product" });
  }
}

async function editProduct(req, res) {
  try {
    const { id } = req.params;
    const { name, qrCode, category, purchaseDate, warrantyDate, condition, status } = req.body;

    // Check if the product exists
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product
    await Product.update(
      { name, qrCode, category, purchaseDate, warrantyDate, condition, status },
      { where: { id } }
    );

    // Fetch the updated product
    const updatedProduct = await Product.findByPk(id);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Error updating product" });
  }
}


// Delete a product
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Error deleting product" });
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  editProduct
};
