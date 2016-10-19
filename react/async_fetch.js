import React from 'react';
import Reactable from 'reactable';

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
        return (
                <Reactable.Table className="table" data={this.state.weather} 
                    columns={[{key: "date", label: "date"}, 
                              {key: "high", label: "high"},  
                              {key: "low",  label: "low"},
                              {key: "text_day", label: "day"},
                              {key: "text_night", label: "night"}, 
                              {key: "wind_direction", label: "wind"} 
                              ]} 
                              />
        )
 },
});

