import React from 'react';

import { Carousel } from '@local/components/byPage/home/aboutUs/carousel';
import Typography from '@mui/material/Typography';
import { clsx } from 'clsx';

import styles from './aboutUs.module.scss';

export function AboutUs() {
  const reviews = [
    {
      id: 1,
      message: 'Muy buen servicio de parte de la empresa. Excelente servicio post-venta',
      username: 'Jose Semidey (Arpia S.T)',
    },
    {
      id: 2,
      message: 'Empresa responsable, gran servicio y calidad en los productos de FOG. Recomendados',
      username: 'Jesus Exposito (quantika)',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <Typography className={styles.title}>Sobre Tech Inside</Typography>

        <p className={styles.description}>
          Somos una empresa de tecnología que diseña y fabrica productos en el campo de la{' '}
          <strong>seguridad electrónica.</strong>
        </p>
        <p className={styles.description}>
          Además tenemos las capacidades para <strong>desarrollar</strong> para nuestros clientes soluciones integrales
          que incluyen
          <strong>hardware, software y firmware embebido.</strong>
        </p>
      </div>
      <div className={clsx({ [styles.col]: true })}>
        <div className={styles.reviews}>
          <div style={{ width: '100%' }}>
            <Carousel height="100%" items={reviews} showIndicators />
          </div>
        </div>
      </div>
    </div>
  );
}
