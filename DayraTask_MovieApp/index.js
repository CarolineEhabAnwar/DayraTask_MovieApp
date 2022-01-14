import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/constants/Store';

const store = configureStore();

const DayraTask_MovieApp = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => DayraTask_MovieApp);