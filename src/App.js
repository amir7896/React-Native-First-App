import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import AppRoot from './AppRoot';
import {NavigationContainer} from '@react-navigation/native';

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
