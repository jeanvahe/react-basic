import {getSchema} from '@risingstack/graffiti-mongoose';
import graphql from 'graphql';
import User from './User';

const options = {
  mutation: false, // mutation fields can be disabled
  allowMongoIDMutation: false // mutation of mongo _id can be enabled
};
const schema = getSchema([User], options);

const query = `{
    users(age: 28) {
      name
      friends(first: 2) {
        edges {
          cursor
          node {
            name
            age
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
    }
  }`;

export default React.createClass({
  componentDidMount() {
    graphql(schema, query)
      .then((result) => {
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
