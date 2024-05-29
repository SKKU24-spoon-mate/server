const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/chat.route')

const app = express()

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World')
});

// Need to be replaced with integrated db
//we just add Node-API after 'net/' to call it Node-API 
mongoose.connect('mongodb+srv://summer2788:rubCL5IPVqY5dW2M@backenddb.3wanh75.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database');

        app.listen(3000, () => {
            console.log('running on port 3000')
        });

    }).catch(() => console.log('Connection to database failed'));
