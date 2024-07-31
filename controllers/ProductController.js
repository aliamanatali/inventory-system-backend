const { Product, AssignedProduct } = require("../models"); // Adjust the path to your models

async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
}

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

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await Product.update(
      { name, qrCode, category, purchaseDate, warrantyDate, condition, status },
      { where: { id } }
    );

    const updatedProduct = await Product.findByPk(id);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Error updating product" });
  }
}


async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const assignedProduct = await AssignedProduct.findOne({ where: { productId: id } });

    await assignedProduct.destroy();

    await product.destroy();

    res.status(200).json({ message: "Product and its assignments deleted successfully" });
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
