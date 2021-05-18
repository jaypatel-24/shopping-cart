const express = require('express')
const connectDb = require('./config/db');
const path = require('path')
const app = express();

// connect database
connectDb();

// Init middleware
app.use(express.json({ extended : false }));

//Define the routes 
app.use('/', require('./routes/Items'));
app.use('/admin', require('./routes/Admin'));
app.use('/cart', require('./routes/Cart'))

// Serve static assests
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on ${PORT}`));