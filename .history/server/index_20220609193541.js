// Create express var
const express = require('express');

// Require the dotenv file to access the port variable
require('dotenv').config();

const port = process.env.PORT; 

// Initialize the app via express
const app = express();

app.listen(port, console.log(`Server running on port ${port}`))