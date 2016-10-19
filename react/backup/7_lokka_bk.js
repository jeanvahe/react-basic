import React from 'react';
import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

// Create a lokka client against GraphQL Server
const client = new Lokka({
    transport: new Transport('http://graphql-swapi.parseapp.com/')
  });

export default React.createClass({
  componentDidMount() {
client.query(`
    {
      allFilms {
        films {
          title
        }
      }
    }
`).then(result => {
    console.log(result.allFilms);
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

