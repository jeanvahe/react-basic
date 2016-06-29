import React from 'react';

export default React.createClass({
    getInitialState:function (){
        return {
            clickCount: 0
        }
    },
    handleClick:function(){
        this.setState({
            clickCount: this.state.clickCount+1
        })
    },
    render:function(){
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <p>Total click counts：{this.state.clickCount}</p>
            </div>
        )
    }
});
