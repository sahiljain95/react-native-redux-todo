/** @format */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
import React from 'react';
//redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

const ConnectedApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => ConnectedApp);
