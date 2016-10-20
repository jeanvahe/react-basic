import React from 'react';
import { createStore,  bindActionCreators} from 'redux';
import { Provider, connect } from 'react-redux';

//Reducer
const initialState = {
      value: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {value: state.value + 1})
    case 'DECREMENT':
      return Object.assign({}, state, {value: state.value - 1})
    default:
      return state
  }
};

//Actions
function onIncrement() {
    return {
        type: 'INCREMENT'
    }
}

function onDecrement(){
    return {
        type: 'DECREMENT'
    }
}

const counterCreators = {
    onIncrement,
    onDecrement
}

//Component
var Counter = React.createClass({
    incrementIfOdd: function(){
        if (this.props.value % 2 !== 0) {
            this.props.counterActions.onIncrement()
        }
    },

    incrementAsync: function() {
        setTimeout(this.props.counterActions.onIncrement, 1000)
    },
    render: function (){
        const { value, counterActions } = this.props;
        return (
            <p>
            Clicked: {value} times
            {' '}
            <button onClick={counterActions.onIncrement}>
            +
            </button>
            {' '}
            <button onClick={counterActions.onDecrement}>
            -
            </button>
            {' '}
            <button onClick={this.incrementIfOdd}>
            Increment if odd
            </button>
            {' '}
            <button onClick={this.incrementAsync}>
            Increment async
            </button>
            </p>
            )
    }
});

const mapStateToProps = (state) => {
    const { value } = state;
    return {
        value
    };
};

const mapDispatchToProps = (dispatch) => {      
  const counterActions =                           
    bindActionCreators(counterCreators, dispatch);     
  return {                                      
    counterActions                                 
  };                                            
};                                              


const ConnectCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const store = createStore(rootReducer);

const reduxapp = () => (
            <Provider store={store}>
                <ConnectCounter />
            </Provider>
        );
 export default  reduxapp;
