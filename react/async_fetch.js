import React from 'react';

export default React.createClass({
    getInitialState:function (){
        return {
            weather: []
        }
    },
  componentDidMount() {
    this.fetchData();
  }, 
  async fetchData() {
    try {
        const response = await fetch('http://apis.baidu.com/thinkpage/weather_api/suggestion?location=beijing&language=zh-Hans&unit=c&start=0&days=3', {
            method: 'get',
            headers: {
                apikey: '19ffb04654b0f50d003e0a58abf2c50b'
            }
            });
        const json = await response.json()
        this.setState({weather: json.results[0].daily});
        console.log(this.state.weather)
    } catch(e) {
        console.log("Oops, error", e);
    }
  },
 render() {
        console.log(this.state.weather);
        return (
                <div />
        )
 },
});

