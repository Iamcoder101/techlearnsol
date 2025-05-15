const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/routes');
const path = require('path');
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.static('views'));


app.use('/api/auth', authRoutes);


app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Connecting DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 3000, () => console.log('Server running')); 
  })
  .catch(err => console.error(err));
