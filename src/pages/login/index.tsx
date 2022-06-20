import React, { useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Login, useAuth } from '@darkwilly08/login';

export default function LoginPage() {
  const router = useRouter();
  const { signIn, signUp, authUser } = useAuth();

  useEffect(() => {
    if (authUser.loggedIn) {
      router.replace('/dashboard');
    }
  }, [authUser, router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login</title>
      </Head>
      <Login
        title="App Bla"
        signIn={{
          image: 'https://dummyimage.com/700x350/000/fff',
          onSignIn: (user, psw) => {
            signIn(user, psw)
              .then(() => {
                console.log('signedIn');
              })
              .catch((err) => console.log('error logging user', err));
          },
        }}
        signUp={{
          image: 'https://dummyimage.com/700x350/000/fff',
          onSignUp: (user, psw) => {
            signUp(user, psw)
              .then(() => {
                console.log('signedUp');
              })
              .catch((err) => console.log('error signupingx user', err));
          },
        }}
      />
    </>
  );
}
