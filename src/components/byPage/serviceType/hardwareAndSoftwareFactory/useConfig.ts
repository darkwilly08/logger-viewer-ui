import { useState } from 'react';

interface Document {
  name: string;
  value: string;
}

export const useConfig = () => {
  const documents = [
    {
      name: 'Producción y ensamble de equipos de seguridad electrónica',
      value: '/assets/documents/hardwareAndSoftware/Produccion-y-ensamble-de-equipos-de-seguridad-electronica.pdf',
    },
    {
      name: 'Manual antientradera v0.3',
      value: '/assets/documents/hardwareAndSoftware/Manual-antientradera-v0.3.pdf',
    },
  ];
  const [selectedDocument, setSelectedDocument] = useState<Document>(documents[0]);

  const onDocumentChange = (document: Document) => {
    setSelectedDocument(document);
  };

  return {
    title: 'Hardware & software factory',
    capabilities: [
      'Software de aplicación (Plataformas de operación web, software local, etc.).',
      'Desarrollo de aplicaciones Android /iOS.',
      'Firmware embebido.',
      'Desarrollo de hardware dedicado (diseño 2D/3D – Single/Multi layer – Entradas analógicas/digitales – Procesamiento y transmisión de datos).',
      'Integración de plataformas de hardware comercial (módulos comerciales, arduino, etc.).',
      'Integración con tecnologías inalámbricas (RF, Zigbee, Lora, bluetooth, etc.)',
      'Desarrollo de soluciones iOT para diversos rubros.',
      'Desarrollo y puesta en marcha de líneas de producción para productos de clientes.',
      'Diseño industrial y constructivo (planos, prototipado, etc.)',
    ],
    documents,
    onDocumentChange,
    selectedDocument,
  };
};
