import React from 'react';
import {
  // These are the basic GraphQL types
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,

  // This is used to create required fields and arguments
  GraphQLNonNull,

  // This is the class we need to create the schema
  GraphQLSchema,

  // This function is used execute GraphQL queries
  graphql
} from 'graphql';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    log: {
      type: new GraphQLList(GraphQLString),
      resolve(rootValue, args) {
        console.log(args);
        return rootValue;
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

let query = `
  {
    log
  }
`;
export default React.createClass({
  componentDidMount() {
    this.fetchData();
  }, 
  fetchData() {
    graphql(Schema, query).then(function(result) {
      console.log(result);
    });
  },
 render() {
   return (
     <div>
         Hello!
     </div>
   );
 },
});
