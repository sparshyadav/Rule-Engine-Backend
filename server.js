const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ruleRoutes = require('./routes/ruleRoutes');

const app = express();
const PORT = 2000;

app.use(cors());
app.use(bodyParser.json());
// app.use(cors()); 
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

mongoose.connect('mongodb+srv://sparshyadavmrt:newpassword@cluster0.ajmb4.mongodb.net/RuleEngine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});

// API routes
app.use('/api/rules', ruleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});