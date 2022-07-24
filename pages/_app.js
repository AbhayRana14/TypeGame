import React from 'react';
// Third-party
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Head from 'next/head';
import { store, persistor } from '../redux/store';
import '../styles/globals.css';
import '../scss/index.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Type Game</title>
    </Head>
    <Component {...pageProps} />
  </>
);

const MyApp = ({ Component, pageProps }) => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  </PersistGate>
);

export default MyApp;
