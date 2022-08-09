import React from 'react';

import { Footer } from './layout/footer';
import { Header } from './layout/header';

export function getLayout(page: JSX.Element) {
  return (
    <>
      <Header />
      <div>{page}</div>
      <Footer />
    </>
  );
}
