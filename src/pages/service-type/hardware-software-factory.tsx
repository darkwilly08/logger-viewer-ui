import React from 'react';

import { useConfig } from '@local/components/byPage/serviceType/hardwareAndSoftwareFactory/useConfig';
import { CardWithImage } from '@local/components/card/withImage';
import { Selector } from '@local/components/selector';
import { getLayout } from '@local/hoc/layout';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

import styles from './hardware-software-factory.module.scss';

export default function HardwareAndSoftwareFactory() {
  const { title, capabilities, documents, onDocumentChange, selectedDocument } = useConfig();

  return (
    <div>
      <Head>
        <title>Hardware & software factory</title>
      </Head>
      <div className={styles['traffic-control']}>
        <CardWithImage imgUrl="/assets/hardware-and-software-img.jpeg" imgAlt="hardware model" proportionalSize={1.2}>
          <>
            <Typography className={styles['traffic-control__title']}>{title}</Typography>
            <p className={styles['traffic-control__description']}>
              En Tech Inside disponemos de las capacidades, conocimientos, herramientas y pasión para ejecutar
              desarrollos de productos y soluciones tecnológicas para nuestros clientes.
            </p>
            <p className={styles['traffic-control__description']}>
              Los proyectos abracan desde soluciones 100% llave en mano como también proyectos de integración con
              elementos existentes.
            </p>
          </>
        </CardWithImage>
        <div>
          <Typography className={styles['traffic-control__subtitle']}>
            Nuestro departamento de ingeniería posee la capacidad para el desarrollo de proyectos a terceros en las
            siguientes áreas:
          </Typography>
          <ul className={styles['traffic-control__list']}>
            {capabilities.map((capability) => (
              <li key={capability} className={styles['traffic-control__list__item']}>
                {capability}
              </li>
            ))}
          </ul>
        </div>
        <Selector label="Documentación" options={documents} onChange={onDocumentChange} />
        <object className={styles['traffic-control__pdf-viewer']} data={selectedDocument.value} type="application/pdf">
          <div className={styles['traffic-control__pdf-viewer--no-available']}>
            <Typography className={styles['traffic-control__pdf-viewer__subtitle']}>
              Vista previa no disponible
            </Typography>
            <Button variant="contained" color="info">
              Descargar documento
            </Button>
          </div>
        </object>
      </div>
    </div>
  );
}

HardwareAndSoftwareFactory.getLayout = getLayout;
