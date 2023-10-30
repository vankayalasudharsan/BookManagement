require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const app = express()

// MongoDB connection
const connectToDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, });
    const db = mongoose.connection;
    db.on('open', function () {
      console.log('db connected');
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

app.use(express.json())

const booksRoutes = require('./routes/booksroute')
app.use('/books', booksRoutes)

app.get('/', (req, res) => {
  res.send('sudharsan server is working')
})

const PORT = process.env.PORT || 3600

//Connect to the database before listening
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
  })
})