const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to the SQLite database.');
});

// Create users table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
)`);

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            res.status(500).json({ message: 'Server error' });
        } else if (row) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to the SQLite database.');
});
