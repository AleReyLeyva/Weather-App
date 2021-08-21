import React from 'react';
import '../styles/tailwind.css';
import '../styles/index.css';

import Head from 'next/head';
import WeatherProvider from '../services/WeatherProvider';

function MyApp({ Component, pageProps }) {
  return (
    <WeatherProvider>
      <div className="app-container">
        <Head>
          <title>Weather App</title>
          <meta name="description" content="Weather-App" />
          <link rel="icon" href="/weather.svg" />
        </Head>
        <Component {...pageProps} />
      </div>
    </WeatherProvider>
  );
}

export default MyApp;
