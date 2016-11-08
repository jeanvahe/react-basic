import React from 'react';
import AV from 'leancloud-storage';

export default React.createClass({
    getInitialState:function (){
        return {
          username: "",
          password: ""
        }
    },
  componentDidMount() {
    AV.init({                                      
      appId: 'bHi8qFTXi5uMtbaPdaTS2n02-gzGzoHsz',  
      appKey: 'I0m0bOz0WFIu2zDbicgLjrNu'           
    });                                            
  }, 
  login() {
    console.log(this.refs.username.value);
    console.log(this.refs.password.value);
     var user = new AV.User();
     user.set("username", this.refs.username.value);
     user.set("password", this.refs.password.value);
     user.signUp().then((user) => {
       console.log('User logged in:', user);
     }).catch(function(error) {
       console.log("Login Error: ", error);
    });
  },
 render() {
        return (
          <div>
          用户名
          <br/>
          <input ref="username" type="text" defaultValue={this.state.username}/>
          密码 
          <br/>
          <input ref="password" type="text" defaultValue={this.state.password}/>
          <br/>
          <button onClick={this.login}>注册</button>
          </div>
        )
 },
});


