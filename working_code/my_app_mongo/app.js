const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS package

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mtdb', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pass: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { name, pass } = req.body;

    const newUser = new User({ name, pass });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving user');
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, '-__v'); // Don't show __v field
        res.status(200).json(users); // Send the list of users
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching users');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
