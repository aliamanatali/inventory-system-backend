const { User, AssignedProduct, Product } = require("../models");

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
}

async function createUser(req, res) {
  try {
    const { name, email, department, role, password } = req.body;

    if (!name || !email || !department || !role || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = await User.create({
      name,
      email,
      department,
      role,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const assignedProducts = await AssignedProduct.findAll({
      where: { userId: id },
    });

    for (const assignedProduct of assignedProducts) {
      const product = await Product.findByPk(assignedProduct.productId);
      if (product) {
        await Product.update(
          { status: "Available" },
          { where: { id: product.id } }
        );
      }
      await assignedProduct.destroy();
    }

    await user.destroy();
    res.status(200).json({ message: "User and their assigned products deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user" });
  }
}


async function editUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, department, role, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.department = department || user.department;
    user.role = role || user.role;
    user.password = password || user.password;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  editUser,
};
