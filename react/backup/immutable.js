import React from 'react';
import Immutable  from 'immutable';

//    initialState.mergeDeep({"2016-02":{"0":{"1":"good"}}})
//initialState.updateIn(["2016-02", "0", "1"] , "good")
//     {initialState.getIn(["2016-02", "0", "1"])}
//var initialState = Immutable.fromJS({})
//var nested2 = nested.mergeDeep({a:{b:{d:6}}});
const week = "2016"
export default React.createClass({
 render: function() {
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);

var nested = Immutable.fromJS({});
var nested2 = nested.updateIn([week, 'b', 'd'], value=>"13:44");
console.log(nested2.get("2017"))
   return (
     <div>
     {map1.get('b')}
    {nested2.getIn([week, 'b', 'd'])}
         OK, {this.props.name}!
     </div>
   );
 },
});
