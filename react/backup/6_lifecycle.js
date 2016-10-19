import React from 'react';

export default React.createClass({
	getInitialState: function(){
		console.log("getInitialState");
		return {
			count: 0
		}
	},
	getDefaultProps:function(){
		console.log('getDefaultProps');
		return {};
	},
	componentWillMount:function(){
		console.log('componentWIllMount');
		var self = this;
		this.timer = setInterval(function(){
			self.setState({
				count: self.state.count + 1
			});
		}, 1000);
	},
	componentDidMount:function(){
		console.log('componentDidMount');
		console.log(this.getDOMNode());
	},
	componentWillUnmount:function(){
		alert('you are trying to kill me !!!');
		clearInterval(this.timer);
	},
    componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps'); // call this.setState() here will not trigger additional render
    },
	shouldComponentUpdate:function (nextProp, nextState){
		console.log('shouldComponentUpdate');
		if(nextState.count > 5){
			return false;
		}
		return true;       
	},
	componentWillUpdate:function (nextProp, nextState){
		console.log('componentWillUpdate');
	},
	componentDidUpdate: function(){
		console.log('componentDidUpdate');
	},
	killSelf:function(){
		React.unmountComponentAtNode(document.body);
	},
	render:function (){
		console.log('render');
		return ( 
			<div>
				<h1>计数：{this.state.count}</h1>
				<button onClick={this.killSelf}>卸载掉这个组件</button>
			</div>
		)
	}
});

