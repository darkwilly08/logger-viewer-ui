/* eslint-disable react/jsx-props-no-spreading */
import '@local/styles/globals.scss';

import React, { ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppLayoutProps } from 'next/app';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#232323',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      dark: '#ba000d',
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
