import React from 'react';

import { AboutUs } from '@local/components/byPage/home/aboutUs';
import { ProductsAndServices } from '@local/components/byPage/home/productsAndServices';
import { Carousel, CarouselTypeEnum } from '@local/components/carousel';
import { Item } from '@local/components/carousel/models/item';
import { getLayout } from '@local/hoc/layout';
import Head from 'next/head';

export default function Home() {
  const sliders: Item[] = [
    {
      id: 1,
      title: 'Hardware & Software factory',
      description:
        'Nos especializamos en el diseño y desarrollo de productos con Hardware, Software y Firmware asociados. Ofrecemos servicios y productos a medida, con inclusión de soluciones innovadoras y tecnología de vanguardia.',
      background: '/assets/hardware-and-software-img.jpeg',
      url: '/service-type/hardware-software-factory',
      color: 'secondary',
    },
    {
      id: 2,
      title: 'Control de tráfico vehicular 4.0',
      description:
        'Conozca nuestro sistema de control vehicular 4.0. Tech Inside ofrece soluciones integrales desde la instalación hasta el mantenimiento.',
      background: '/assets/radars-control-img.jpeg',
      url: '/service-type/control-trafico-vehicular',
    },
  ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div id="start">
        <Carousel type={CarouselTypeEnum.SLIDER} height={600} items={sliders} />
      </div>
      <AboutUs />
      <ProductsAndServices />
    </div>
  );
}

Home.getLayout = getLayout;
