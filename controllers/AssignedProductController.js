const { AssignedProduct } = require('../models');

async function assignProduct(req, res) {
  try {
    const { userId, productId } = req.body;
    console.log(userId, productId);
    const assignedProduct = await AssignedProduct.create({ userId, productId });
    res.status(201).json(assignedProduct);
  } catch (error) {
    console.error('Error assigning product:', error);
    res.status(500).json({ error: 'Error assigning product' });
  }
}

async function getAssignedProducts(req, res) {
  try {
    const assignedProducts = await AssignedProduct.findAll();
    res.status(200).json(assignedProducts);
  } catch (error) {
    console.error('Error fetching assigned products:', error);
    res.status(500).json({ error: 'Error fetching assigned products' });
  }
}

module.exports = {
  assignProduct,
  getAssignedProducts,
};
