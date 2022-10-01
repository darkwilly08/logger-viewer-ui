import React from 'react';

import { Urls } from '@local/urls';
import Typography from '@mui/material/Typography';

import styles from './productsAndServices.module.scss';

export function ProductsAndServices() {
  return (
    <div id="productsAndServices" className={styles.container}>
      <Typography className={styles.container__title}>Productos y Servicios</Typography>

      <p className={styles.container__description}>
        En Tech Inside poseemos las capacidades y la pasión para desarrollar productos y ofrecer servicios con
        tecnología de punta, diseñando y utilizando soluciones de vanguardia.
      </p>
      <div className={styles.container__group}>
        <a className={styles.container__group__card} href={Urls.trafficControl}>
          <img src="/assets/hardware-and-software-icon.png" alt="" height={80} />
          <Typography className={styles.container__group__card__title}>Control de tráfico vehicular</Typography>
          <p className={styles.container__group__card__description}>
            Contamos con una línea de productos que nos permite prestar servicios para la evaluación, medición y
            auditoría de transito vehicular.
          </p>
        </a>
        <a className={styles.container__group__card} href={Urls.hardwareAndSoftwareFactory}>
          <img src="/assets/vehicle-detection-icon.png" alt="" height={80} />
          <Typography className={styles.container__group__card__title}>Hardware & software factory</Typography>
          <p className={styles.container__group__card__description}>
            Disponemos de conocimientos y herramientas para ejecutar desarrollos de productos y soluciones tecnológicas
            de vanguardia. que nos permite prestar servicios para la evaluación, medición y auditoría de transito
            vehicular.
          </p>
        </a>
      </div>
    </div>
  );
}
