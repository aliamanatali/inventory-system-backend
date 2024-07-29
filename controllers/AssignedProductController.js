const { AssignedProduct, Product, Ticket } = require('../models');

async function assignProduct(req, res) {
  try {
    const { userId, productId, ticketId } = req.body;
    console.log(userId, productId);

    const assignedProduct = await AssignedProduct.create({ userId, productId });

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await Product.update(
      { status: 'In use' },
      { where: { id: productId } }
    );

    const updatedProduct = await Product.findByPk(productId);

    if (ticketId) {
      await Ticket.update(
        { status: 'Resolved' },
        { where: { id: ticketId } }
      );
    }

    res.status(201).json({
      assignedProduct,
      updatedProduct
    });
  } catch (error) {
    console.error('Error assigning product:', error);
    res.status(500).json({ error: 'Error assigning product' });
  }
}

async function getAssignedProductsByUserId(req, res) {
  try {
    const { userId } = req.params;
    const assignedProducts = await AssignedProduct.findAll({
      where: { userId: parseInt(userId, 10) },
    });

    if (assignedProducts.length === 0) {
      return res.status(404).json({ error: 'No assigned products found for this user' });
    }

    res.status(200).json(assignedProducts);
  } catch (error) {
    console.error('Error fetching assigned products by user ID:', error);
    res.status(500).json({ error: 'Error fetching assigned product' });
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
  getAssignedProductsByUserId
};
