import React from 'react';

export default React.createClass({
	getInitialState:function (){
		return {
			inputValue: 'input value',
			selectValue: 'A',
			radioValue: 'B',
			checkValues: [],
			textareaValue: 'some text here....'
		}
	},
	handleSubmit:function (e){
		e.preventDefault();
		var formData = {
			input: this.refs.goodInput.value,
			select: this.refs.goodSelect.value,
			textarea: this.refs.goodTextarea.value,
			radio: this.state.radioValue,
			check: this.state.checkValues
		}
		console.log( formData );

		this.refs.goodRadio.saySomething();
	},
	handleRadio: function (e){
		this.setState({
			radioValue: e.target.value
		});
	},
	handleCheck: function (e){
		var checkValues = this.state.checkValues.slice();
		var newVal = e.target.value;
		var index = checkValues.indexOf(newVal);
		if( index == -1){
			checkValues.push( newVal );
		}else{
			checkValues.splice(index, 1);
		}

		this.setState({
			checkValues: checkValues
		});
	},
	render:function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input ref="goodInput" type="text" defaultValue={this.state.inputValue}/>
				<br/>
				选项：
				<select defaultValue={this.state.selectValue} ref="goodSelect">
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
				</select>
				<br/>

				<p>radio button! </p>
				<RadioButton ref="goodRadio" handleRadio={this.handleRadio}/>
				<br/>

				<Checkboxes handleCheck={this.handleCheck}/>
				<br/> 

				<textarea defaultValue={this.state.textareaValue} ref="goodTextarea"></textarea>
				<br/>
				<button type="submit">提交</button>
			</form>
		)
	}
})

var RadioButton = React.createClass({
	saySomething: function (){
		alert("yo what's up man!");
	},
	render:function(){
		return (
			<span>
				A 
				<input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="A"/>
				B
				<input onChange={this.props.handleRadio} name="goodRadio" defaultChecked type="radio" value="B"/>
				C
				<input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="C"/>
			</span>
		)
	}
});

var Checkboxes = React.createClass({
	render: function (){
		return (
			<span>
				A
				<input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="A"/>
				B
				<input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B"/>
				C
				<input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C"/>
			</span>
		)
	}
});



