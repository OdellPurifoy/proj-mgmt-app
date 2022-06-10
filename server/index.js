// Create express var
const express = require('express');

// Require the dotenv file to access the port variable
require('dotenv').config({path: 'server/.env'});

// Bring in GraphQL from appropriate package
const { graphqlHTTP } = require('express-graphql');

// Bring in the schema
const schema = require('./schema/schema')

// Sets the port to run the server on
const port = process.env.PORT || 5000; 

// Initialize the app via express
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))