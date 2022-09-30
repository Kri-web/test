const { ApolloServer, gql } = require('apollo-server');

//constant 
const typeDefs = gql`
  type Query {
    greeting: String
  },
 
`;
  
//A resolver is a function that handles the data for each one of the fields of your schema. 

const resolvers = {
  Query: {
    greeting: () => 'Hello Krishna Priya,rere5r4e45re4rw!!!!!!!! 👋',    
  },

};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`))