import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';

import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
