// Dependencies

const { table } = require('console');
const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Data

const tables = [];
const waitlist = [];
// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reservationForm.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'reservationView.html')));

// API Dumps
app.get('/api/waitlist', (req, res) => res.json(waitlist));
app.get('/api/tables', (req, res) => res.json(tables));


// Create New Characters - takes in JSON input
app.post('/api/tables', (req, res) => {

  const newTable = req.body;


  newTable.routeName = `table${(tables.length + 1).toString()}`;
  console.log(newTable);

  tables.push(newTable);
  res.json(newTable);
});

app.post('/api/remove', (req, res) => {

    
  });

app.post('/api/waitlist', (req, res) => {

    const newTable = req.body;
  

    newTable.routeName = `waitlist${(tables.length + 1).toString()}`;
    console.log(newTable);
  
    waitlist.push(newTable);
    res.json(newTable);
  });

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));