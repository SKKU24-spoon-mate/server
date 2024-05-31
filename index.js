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
mongoose.connect(URI)
    .then(() => {
        console.log('Connected to database');

        const PORT = process.env.PORT || 3000;  // Use PORT from environment or default to 3000
        httpserver.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    }).catch((err) => {
        console.error('Connection to database failed', err);
    });
