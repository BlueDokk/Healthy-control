
import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

function HealthyApp() {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}

export default HealthyApp;
