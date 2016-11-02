import React from 'react';
import { createStore,  applyMiddleware, bindActionCreators} from 'redux';
import { Provider, connect } from 'react-redux';
import { put, take, call, fork } from 'redux-saga/effects';
import createSagaMiddleware, { END } from 'redux-saga';
import { combineReducers } from 'redux';

//Reducer
const initialState = {
    weather: [{title: 1}]
};

let weather = [];
function reducer(state = initialState, action){
  switch (action.type) {
    case 'RECEIVE':
      return Object.assign({}, state, {weather: action.weather})
    default:
      return state
  }
};
const rootReducer = combineReducers({
  reducer
});

//Actions
function onIncrement() {
    return {
        type: 'INCREMENT'
    }
}

function onReceive(weather) {
    return {
        type: 'RECEIVE',
        weather
    }
}

const counterCreators = {
    onIncrement,
    onReceive
}

//saga
function fetchData() {
  let isOk;
  return new Promise((resolve, reject) => {
    fetch('http://apis.baidu.com/thinkpage/weather_api/suggestion?location=beijing&language=zh-Hans&unit=c&start=0&days=3', {
      method: 'get',
      headers: {
        apikey: '19ffb04654b0f50d003e0a58abf2c50b'
      }
      }).then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
  .then((responseData) => {
    if (isOk) {
      resolve(responseData);
    } else {
      reject(responseData);
    }
  })
  .catch((error) => {
    reject(error);
  });
  });
}

function* requestTypeList() {
  try {
    const getweather = yield call(fetchData);
    yield put(onReceive(getweather));
  } catch (error) {
  }
}

function* watchRequestTypeList() {
  while (true) {
    yield take('INCREMENT');
    yield fork(requestTypeList);
  }
}

function* rootSaga() {
  yield [
    fork(watchRequestTypeList),
  ];
}

//Component
var Counter = React.createClass({
    render: function (){
        const { reducer,counterActions } = this.props;
        console.log(reducer.weather);
        return (
            <p>
            <button onClick={counterActions.onIncrement}>
            +
            </button>
            {' '}
            </p>
            )
    }
});

const mapStateToProps = (state) => {
    const { reducer } = state;
    return {
       reducer 
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

const middlewares = [];
// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState);
// install saga run
store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);

// run root saga
store.runSaga(rootSaga);

const reduxapp = () => (
            <Provider store={store}>
                <ConnectCounter />
            </Provider>
        );
 export default  reduxapp;
