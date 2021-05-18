const express = require('express')
const connectDb = require('./config/db');

const app = express();

// connect database
connectDb();

// Init middleware
app.use(express.json({ extended : false }));

app.get('/', (req,res) => res.json({ msg: "hey JAY"}));

//Define the routes 
app.use('/items', require('./routes/Items'));
app.use('/admin', require('./routes/Admin'));
app.use('/cart', require('./routes/Cart'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on ${PORT}`));