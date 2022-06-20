/* eslint-disable react/jsx-props-no-spreading */
import '@local/styles/globals.scss';

import React, { ReactNode } from 'react';

import { auth } from '@local/config/firebase';
import { ThemeProvider } from '@local/contexts/theme';
import { AuthCheck } from '@local/hoc/authCheck';
import { AppLayoutProps } from 'next/app';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dynamic from 'next/dynamic';

import { AuthProvider } from '@darkwilly08/login';

function AuthComp({ children }: { children: JSX.Element }) {
  return true ? <AuthCheck>{children}</AuthCheck> : children;
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout: (page: ReactNode) => ReactNode = Component.getLayout || ((page: ReactNode) => page);

  return (
    <AuthProvider auth={auth} isSSR={false} apiUrl="http://localhost:3030/api/auth/">
      <ThemeProvider>
        <AuthComp>
          <>{getLayout(<Component {...pageProps} />)}</>
        </AuthComp>
      </ThemeProvider>
    </AuthProvider>
  );
}

// SSR
// export default MyApp;

// CSR
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
