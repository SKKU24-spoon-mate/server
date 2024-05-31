const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const session = require('express-session');
const chatrouter = require('./routes/chat.route');
const appointmentrouter = require('./routes/appointment.route');
const matchrouter = require('./routes/match.route');
const matchregisterrouter = require('./routes/matchregister.route');
const userRoutes = require('./routes/user.route');
const socketio = require('socket.io');

const app = express();
const httpserver = http.createServer(app);
const io = socketio(httpserver);

let users = {};

io.on('connection', (socket) => {

    socket.on('login', (userid) => {
        users[userid] = socket.id;
        console.log('user id ', userid, ' connected');
    });

    //WIP
    socket.on('chat message', (msg) => {

    });

    //WIP
    socket.on('match notice', (notice) => {

    });


})

app.use(express.json());
app.use(session({
    secret: 'verysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // for HTTP; set true for HTTPS
}));
app.use(express.urlencoded({ extended: true }));


//use routers
app.use(chatrouter);
app.use(appointmentrouter);
app.use(matchrouter);
app.use(matchregisterrouter);
app.use(userRoutes);




app.get('/', (req, res) => {
    res.send('Hello World')
});

const URI = process.env.MONGO_URI;

// Need to be replaced with integrated db
//we just add Node-API after 'net/' to call it Node-API 
mongoose.connect('mongodb+srv://summer2788:rubCL5IPVqY5dW2M@backenddb.3wanh75.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database');

        app.listen(3000, () => {
            console.log('running on port 3000')
        });

    }).catch(() => console.log('Connection to database failed'));
