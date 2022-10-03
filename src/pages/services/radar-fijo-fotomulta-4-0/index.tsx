import React from 'react';

import { useConfig } from '@local/components/byPage/services/radarFijoFotomulta/useConfig';
import { CardWithImage } from '@local/components/card/withImage';
import { MultipleDocumentViewer } from '@local/components/multipleDocumentViewer';
import { getLayout } from '@local/hoc/layout';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

import styles from './style.module.scss';

export default function RadarFijoFotomulta() {
  const { title, capabilities, documents } = useConfig();

  return (
    <div>
      <Head>
        <title>Radar Fijo – Fotomulta 4.0</title>
      </Head>
      <div className={styles.page}>
        <CardWithImage imgUrl="/assets/radar-fijo-fotomulta-4-0.jpeg" imgAlt="hardware model" proportionalSize={1.2}>
          <>
            <Typography className={styles.page__title}>{title}</Typography>
            <p className={styles.page__description}>
              El Radar Fijo FotoMulta 4.0 es la herramienta que Tech Inside ofrece a urbanizaciones privadas,
              instituciones y empresas para controlar en tiempo real la velocidad de los automóviles que transitan en
              sus calles. Esta solución está pensada para lugares donde vehículos, ciclistas y peatones comparten un
              mismo espacio.
            </p>
          </>
        </CardWithImage>
        <div>
          <Typography className={styles.page__subtitle}>Características destacadas del servicio:</Typography>
          <ul className={styles.page__list}>
            {capabilities.map((capability) => (
              <li key={capability} className={styles.page__list__item}>
                {capability}
              </li>
            ))}
          </ul>
        </div>
        <MultipleDocumentViewer documents={documents} />
      </div>
    </div>
  );
}

RadarFijoFotomulta.getLayout = getLayout;
