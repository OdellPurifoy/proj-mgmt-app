// Using destructuring to bring the data in from the sample file
const { projects, clients } = require('../sampleData.js');

// Bring in all Graphql Specific stuff
 const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

// Create the needed object type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});