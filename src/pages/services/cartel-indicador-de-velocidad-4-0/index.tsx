import React from 'react';

import { useConfig } from '@local/components/byPage/services/cartelIndicadorDeVelocidad/useConfig';
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
        <title>Cartel Indicador de velocidad 4.0</title>
      </Head>
      <div className={styles.page}>
        <CardWithImage
          imgUrl="/assets/cartel-indicador-de-velocidad-4-0.jpeg"
          imgAlt="hardware model"
          proportionalSize={1.2}
        >
          <>
            <Typography className={styles.page__title}>{title}</Typography>
            <p className={styles.page__description}>
              El Cartel Indicador de Velocidad 4.0 es un elemento de seguridad preventivo.
            </p>
            <p className={styles.page__description}>
              El mismo cuenta con un display en el cual se indica la velocidad detectada en el vehículo que lo está
              atravesando, informando al conductor la velocidad a la que se desplaza. De esta forma, los conductores
              toman conciencia de la velocidad a la que conducen y comparan su velocidad con la permitida, obteniendo
              cumplimientos mayores de los límites máximos de velocidad.
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
