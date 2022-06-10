// Using destructuring to bring the data in from the sample file
const { projects, clients } = require('../sampleData.js');

// Bring in all Graphql Specific stuff
 const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql');

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

// Allows us to query the defined client objects
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID} },
            resolve(parent, args) {
                return clients.find(client => client.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})