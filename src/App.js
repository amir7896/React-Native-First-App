import React from 'react';
import AppRoot from './AppRoot';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppRoot />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
