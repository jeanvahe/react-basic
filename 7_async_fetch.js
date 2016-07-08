import React from 'react';

export default React.createClass({
  componentDidMount() {
    this.fetchData();
  }, 
  async fetchData() {
    const response = await fetch('http://192.168.40.155:3000/graphql?query={log}');
    const json = await response.json()
    console.log(json);
  },
 render() {
   return (
     <div>
         Hello!
     </div>
   );
 },
});

