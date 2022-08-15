import React from 'react';

import { Carousel, CarouselTypeEnum } from '@local/components/carousel';
import { getLayout } from '@local/hoc/layout';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

import styles from './control-trafico-vehicular.module.scss';
import { useConfig } from './useConfig';

export default function TrafficControl() {
  const { title } = useConfig();
  const items = [
    {
      id: 1,
      background: '/assets/trafficControl/item_1.jpeg',
      title: 'fotomulta',
      description: '',
    },
    {
      id: 2,
      background: '/assets/trafficControl/item_2.jpeg',
      title: 'fotomulta',
      description: '',
    },
    {
      id: 3,
      background: '/assets/trafficControl/item_3.jpeg',
      title: 'fotomulta',
      description: '',
    },
    {
      id: 4,
      background: '/assets/trafficControl/item_4.png',
      title: 'fotomulta',
      description: '',
    },
  ];

  return (
    <div>
      <Head>
        <title>Cóntrol de tráfico vehicular</title>
        <meta name="viewport" content="initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['traffic-control']}>
        <div className={styles['traffic-control__container']}>
          <div className={styles['traffic-control__container__img']}>
            <img src="/assets/traffic-control-img.jpeg" alt="radar vehicular" />
          </div>
          <div>
            <Typography className={styles['traffic-control__title']}>{title}</Typography>
            <p className={styles['traffic-control__description']}>
              Nuestros productos para el Control del Tráfico Vehicular permiten a urbanizaciones privadas, instituciones
              y empresas controlar, monitorear, presentar y analizar en tiempo real la dinámica del tránsito de los
              automóviles que transitan en sus calles.
            </p>
            <p className={styles['traffic-control__description']}>
              Son soluciones pensadas para lugares donde vehículos, ciclistas y peatones comparten un mismo espacio.
            </p>
          </div>
        </div>
        <div>
          <Typography className={styles['traffic-control__subtitle']}>Los productos disponibles son:</Typography>
          <ul className={styles['traffic-control__list']}>
            <li className={styles['traffic-control__list__item']}>Radar Fijo Fotomulta 4.0</li>
            <li className={styles['traffic-control__list__item']}>Radar Móvil Fotomulta 4.0</li>
            <li className={styles['traffic-control__list__item']}>Cartel Indicador de Velocidad</li>
            <li className={styles['traffic-control__list__item']}>Identificador de Vehículos</li>
            <li className={styles['traffic-control__list__item']}>Contador de Vehículos</li>
          </ul>
        </div>
        <div>
          <p className={styles['traffic-control__description']}>
            Cada uno de los productos tiene diferentes aplicaciones y funcionalidades, con connotaciones punitivas,
            preventivas y de obtención de estadísticas.
          </p>
          <Carousel type={CarouselTypeEnum.IMAGE} height={400} showIndicators={false} items={items} navButtons />
        </div>
      </div>
    </div>
  );
}

TrafficControl.getLayout = getLayout;
