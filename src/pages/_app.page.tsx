/* eslint-disable react/jsx-props-no-spreading */
import '@local/styles/globals.scss';
import 'react-base-table/styles.css';

import React, { ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppLayoutProps } from 'next/app';
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FAEB37',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});
function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout: (page: ReactNode) => ReactNode = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <>{getLayout(<Component {...pageProps} />)}</>
      </ThemeProvider>
    </>
  );
}

// SSR
export default MyApp;