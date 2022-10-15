import React from 'react';

import { Expandible } from '@local/components/expandible';
import { Selector } from '@local/components/selector';
import { getLayout } from '@local/hoc/layout';
import Button from '@mui/material/Button';
import Head from 'next/head';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logger viewer</title>
      </Head>
      <Expandible title="Filtros">
        <div className={styles.filters__detail}>
          <Selector
            label="App"
            options={[
              {
                name: 'EBeer',
                value: 'ebeer',
              },
              {
                name: "D'Mark",
                value: 'dmark',
              },
              {
                name: 'QM Silos',
                value: 'qmsilos',
              },
            ]}
            onChange={(value) => console.log(value)}
          />
          <Selector
            label="Level"
            options={[
              {
                name: 'INFO',
                value: 'info',
              },
              {
                name: 'ERROR',
                value: 'error',
              },
            ]}
            onChange={(value) => console.log(value)}
          />
          <Selector
            label="Tags"
            options={[
              {
                name: 'fetch',
                value: 'info',
              },
              {
                name: 'dynamically',
                value: 'error',
              },
            ]}
            onChange={(value) => console.log(value)}
          />
        </div>
        <Button className={styles.filters__search} variant="contained" color="primary">
          Buscar
        </Button>
      </Expandible>
    </div>
  );
}

Home.getLayout = getLayout;
