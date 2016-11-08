import React from 'react';
import AV from 'leancloud-storage';

export default React.createClass({
  getInitialState:function (){
      return {
          value: ""
      }
  },
  updateValue() {
    const feedback = AV.Object.new('Feedback');
    feedback.set("comment", "very good");
    feedback.save();
    const query = new AV.Query('Feedback'); 
    query.get('5820235c2f301e005c24215b').then((settings) => {                                
      this.setState({value: settings.get('comment')})
    });                                             
  },
  componentDidMount() {
    AV.init({                                      
      appId: 'bHi8qFTXi5uMtbaPdaTS2n02-gzGzoHsz',  
      appKey: 'I0m0bOz0WFIu2zDbicgLjrNu'           
    });                                            

  },
  render() {
         return (
           <div>
            <p>current value: {this.state.value}</p>
            <button onClick={this.updateValue}>
            +
            </button>
          </div>
         )
  },
});

