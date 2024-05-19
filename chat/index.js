const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/chat.route')

const app = express()

app.use(express.json());
app.use(router);

// Need to be replaced with integrated db
mongoose.connect('mongodb+srv://ckckdud3:kkzyQdL0fXTZuUMZ@backenddb.2v54orv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected to database');
    
    app.listen(3000, () => {
        console.log('running on port 3000')
    });

}).catch(() => console.log('Connection to database failed'));