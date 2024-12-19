const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const app = express();
const bookRoutes = require('./routes/books')



// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/books' , bookRoutes)


mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to mongoDB Database: ${mongoose.connection.name}`)
})


// Test Route
app.get('/test', (req, res) => {
    res.send('Server is running!');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



