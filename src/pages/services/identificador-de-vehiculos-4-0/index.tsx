import React from 'react';

import { useConfig } from '@local/components/byPage/services/identificadorDeVehiculos/useConfig';
import { CardWithImage } from '@local/components/card/withImage';
import { MultipleDocumentViewer } from '@local/components/multipleDocumentViewer';
import { getLayout } from '@local/hoc/layout';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

import styles from './style.module.scss';

export default function IdentificadorDeVehiculos() {
  const { title, capabilities, documents } = useConfig();

  return (
    <div>
      <Head>
        <title>Identificador de Vehículos 4.0</title>
      </Head>
      <div className={styles.page}>
        <CardWithImage
          imgUrl="/assets/identificador-de-vehiculos-4-0.jpeg"
          imgAlt="hardware model"
          proportionalSize={1.2}
        >
          <>
            <Typography className={styles.page__title}>{title}</Typography>
            <p className={styles.page__description}>
              El Identificador de Vehículos 4.0 es un equipo orientado al diagnóstico y estadística y también a la
              elaboración de infracciones.
            </p>
          </>
        </CardWithImage>
        <div>
          <p className={styles.page__description}>
            Por un lado permite conocer la dinámica de tránsito vehicular en una urbanización privada, parques
            industriales o cualquier otra superficie de análisis, identificando qué tipo de vehículos circulan y según
            el caso, la cantidad de vehículos que circulan por el punto de análisis.
          </p>
          <p className={styles.page__description}>
            Por otro lado, ofrece la posibilidad de obtención de infracciones fotomulta por circulación indebida de
            determinados tipos de vehículos, por ejemplo camiones, motocicletas, etc.
          </p>
          <p className={styles.page__description}>
            Es capaz de discriminar personas caminando, automóviles, bicicletas y motocicletas, camiones y cuatriciclos,
            entre otros objetos.
          </p>
          <p className={styles.page__description}>
            Funciona con tecnología de procesamiento digital de imágenes, basado en algoritmos de inteligencia
            artificial.
          </p>
          <p className={styles.page__description}>
            La gestión de los datos se realiza a través de la plataforma web Tech Cloud.
          </p>
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

IdentificadorDeVehiculos.getLayout = getLayout;
