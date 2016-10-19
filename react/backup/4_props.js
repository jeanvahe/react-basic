import React from 'react';

var Submessage = React.createClass({
    getDefalutProps:function (){
        return {
            message: ['default msg']
        }
    },
    render: function (){
        var msgs = [];
        this.props.messages.forEach(function (msg, index){
            msgs.push(
                <p>render：{msg}</p>
            );
        });
        return (
            <div>{msgs}</div>
        )
    }
});

export default React.createClass({
    getInitialState: function(){
        return {
            subMessages:[
                'message 1',
                'message 2',
                'message 3'
            ]
        }
    },
    render:function (){

        return (
            <div>
                <Submessage messages={this.state.subMessages}/>
            </div>
        )
    }
});
