/* eslint-disable react/jsx-props-no-spreading */
import '@local/styles/globals.scss';

import React, { ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppLayoutProps } from 'next/app';

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
});
function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout: (page: ReactNode) => ReactNode = Component.getLayout || ((page: ReactNode) => page);

  return (
    <ThemeProvider theme={theme}>
      <>{getLayout(<Component {...pageProps} />)}</>
    </ThemeProvider>
  );
}

// SSR
export default MyApp;
