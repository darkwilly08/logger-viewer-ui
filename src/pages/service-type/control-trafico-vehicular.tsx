import React from 'react';

import { useConfig } from '@local/components/byPage/serviceType/useConfig';
import { CardWithImage } from '@local/components/card/withImage';
import { Carousel, CarouselTypeEnum } from '@local/components/carousel';
import { getLayout } from '@local/hoc/layout';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

import styles from './control-trafico-vehicular.module.scss';

export default function TrafficControl() {
  const { title, capabilities } = useConfig();
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
      </Head>
      <div className={styles['traffic-control']}>
        <CardWithImage imgUrl="/assets/traffic-control-img.jpeg" imgAlt="radar vehicular" proportionalSize={1.2}>
          <>
            <Typography className={styles['traffic-control__title']}>{title}</Typography>
            <p className={styles['traffic-control__description']}>
              Nuestros productos para el Control del Tráfico Vehicular permiten a urbanizaciones privadas, instituciones
              y empresas controlar, monitorear, presentar y analizar en tiempo real la dinámica del tránsito de los
              automóviles que transitan en sus calles.
            </p>
            <p className={styles['traffic-control__description']}>
              Son soluciones pensadas para lugares donde vehículos, ciclistas y peatones comparten un mismo espacio.
            </p>
            <div className={styles.group}>
              {capabilities.map((capability) => (
                <Button key={capability.name} className={styles.group__card} href={capability.href}>
                  <img className={styles.group__card__img} src={capability.img} alt="" height={100} />
                  <Typography className={styles.group__card__title}>{capability.name}</Typography>
                </Button>
              ))}
            </div>
          </>
        </CardWithImage>
        <div>
          <Typography className={styles['traffic-control__subtitle']}>Los productos disponibles son:</Typography>
          <ul className={styles['traffic-control__list']}>
            {capabilities.map((capability) => (
              <li key={capability.name} className={styles['traffic-control__list__item']}>
                {capability.name}
              </li>
            ))}
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
