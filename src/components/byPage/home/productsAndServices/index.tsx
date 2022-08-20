import React from 'react';

import Typography from '@mui/material/Typography';

import styles from './productsAndServices.module.scss';

export function ProductsAndServices() {
  return (
    <div className={styles.container}>
      <Typography className={styles.container__title}>Productos y Servicios</Typography>

      <p className={styles.container__description}>
        En Tech Inside poseemos las capacidades y la pasión para desarrollar productos y ofrecer servicios con
        tecnología de punta, diseñando y utilizando soluciones de vanguardia.
      </p>
      <div className={styles.container__group}>
        <div className={styles.container__group__card}>
          <img src="/assets/hardware-and-software-icon.png" alt="" height={80} />
          <Typography className={styles.container__group__card__title}>Control de tráfico vehicular</Typography>
          <p className={styles.container__group__card__description}>
            Contamos con una línea de productos que nos permite prestar servicios para la evaluación, medición y
            auditoría de transito vehicular.
          </p>
        </div>
        <div className={styles.container__group__card}>
          <img src="/assets/vehicle-detection-icon.png" alt="" height={80} />
          <Typography className={styles.container__group__card__title}>Control de tráfico vehicular</Typography>
          <p className={styles.container__group__card__description}>
            Contamos con una línea de productos que nos permite prestar servicios para la evaluación, medición y
            auditoría de transito vehicular.
          </p>
        </div>
      </div>
    </div>
  );
}
