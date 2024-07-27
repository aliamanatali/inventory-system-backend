const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Adjust the path if necessary
const productRoutes = require('./routes/productRoutes'); // Adjust the path if necessary
const assignedProductRoutes = require('./routes/assignedProductRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const cors = require('cors');

app.use(express.json()); // To parse JSON bodies
app.use(cors());


app.use('/api', userRoutes);
app.use('/api', ticketRoutes);
app.use('/api', productRoutes);
app.use('/api', assignedProductRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
  
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
