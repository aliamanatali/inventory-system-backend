module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Generate a list of 10 users
    const users = [
      { name: "John Doe", email: "john.doe@example.com", department: "IT", role: "Employee", password: "password123" },
      { name: "Jane Smith", email: "jane.smith@example.com", department: "HR", role: "Admin", password: "password123" },
      { name: "Bob Johnson", email: "bob.johnson@example.com", department: "Finance", role: "Employee", password: "password123" },
      { name: "Alice Williams", email: "alice.williams@example.com", department: "Marketing", role: "Employee", password: "password123" },
      { name: "Charlie Brown", email: "charlie.brown@example.com", department: "IT", role: "IT Person", password: "password123" },
      { name: "Emily Davis", email: "emily.davis@example.com", department: "HR", role: "Employee", password: "password123" },
      { name: "Michael Wilson", email: "michael.wilson@example.com", department: "Finance", role: "Admin", password: "password123" },
      { name: "Sarah Moore", email: "sarah.moore@example.com", department: "Marketing", role: "Employee", password: "password123" },
      { name: "David Taylor", email: "david.taylor@example.com", department: "IT", role: "Employee", password: "password123" },
      { name: "Laura Anderson", email: "laura.anderson@example.com", department: "HR", role: "Admin", password: "password123" }
    ];

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
