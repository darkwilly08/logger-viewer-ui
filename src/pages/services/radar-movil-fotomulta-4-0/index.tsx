import React from 'react';

import { useConfig } from '@local/components/byPage/services/radarMovilFotomulta/useConfig';
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
        <title>Radar Móvil – Fotomulta 4.0</title>
      </Head>
      <div className={styles.page}>
        <CardWithImage imgUrl="/assets/radar-movil-fotomulta-4-0.jpeg" imgAlt="hardware model" proportionalSize={1.2}>
          <>
            <Typography className={styles.page__title}>{title}</Typography>
            <p className={styles.page__description}>
              Radar Móvil FotoMulta 4.0 es la herramienta que Tech Inside ofrece a urbanizaciones privadas,
              instituciones y empresas para controlar en tiempo real la velocidad de los automóviles que transitan en
              sus calles mediante la utilización de puestos de medición que cambian en el tiempo, lo cual aporta el
              factor sorpresa en el control como un componente determinante del mismo.
            </p>
            <p className={styles.page__description}>
              Esta solución está pensada para lugares donde vehículos, ciclistas y peatones comparten un mismo espacio.
            </p>
          </>
        </CardWithImage>
        <div>
          <p className={styles.page__description}>
            El Radar Móvil Fotomulta 4.0 es un equipo de medición de velocidad y elaboración de fotomultas móvil, es
            decir que puede ser removido de su locación y re-instalado en otra ubicación. Puede funcionar durante un
            periodo de tiempo determinado sin estar conectado a la red eléctrica 220VAC, ya que está equipado con
            baterías de respaldo.
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

RadarFijoFotomulta.getLayout = getLayout;
