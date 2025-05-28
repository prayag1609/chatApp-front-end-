const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve all static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: if you want to explicitly serve the pages by route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
