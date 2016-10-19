import React from 'react';

export default React.createClass({
 render: function() {
   return (
     <div>
         <h1 onClick={()=>alert("clicked!")}>Hello, {this.props.name}!</h1>
     </div>
   );
 },
});
