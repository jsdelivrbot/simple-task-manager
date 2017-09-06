import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

import rootReducer from './redux/reducers'; // All redux reducers (rolled into one mega-reducer)
import TasksContainer from './views/Tasks';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: () => process.env.NODE_ENV !== 'production', collapsed: true });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk, // lets us dispatch() functions
      loggerMiddleware
    ),
    offline(offlineConfig)
  );
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({});

const RootContainer = () => (
  <Provider store={store}>
    <TasksContainer />
  </Provider>
);

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(
  <RootContainer />,
  mountNode
);
