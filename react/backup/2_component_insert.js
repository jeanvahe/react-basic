import React from 'react';

var Submessage = React.createClass({
    render: function (){
        return (
            <div>
                <h3>Learning React</h3>
            </div>
        )
    }
});

export default React.createClass({
    render:function (){
        var submessage = [];
        for(var i=0; i<10; i++){
            submessage.push(<Submessage key={i }/>);
        }
        return (
            <div>
                <h1>Hello World!</h1>
                {submessage}
            </div>
        )
    }
});
