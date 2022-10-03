import React from 'react';

import { DocumentSelector } from '@local/models/entities/documentSelector';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Selector } from '../selector';
import styles from './multipleDocumentViewer.module.scss';
import { useConfig } from './useConfig';

interface MultipleDocumentViewerProps {
  documents: DocumentSelector[];
}

export function MultipleDocumentViewer({ documents }: MultipleDocumentViewerProps) {
  const { onDocumentChange, selectedDocument, downloadSelectedDocument } = useConfig(documents);

  return (
    <>
      <Selector label="Documentación" options={documents} onChange={onDocumentChange} />
      <object className={styles['pdf-viewer']} data={selectedDocument.value} type="application/pdf">
        <div className={styles['pdf-viewer--no-available']}>
          <Typography className={styles['pdf-viewer__subtitle']}>Vista previa no disponible</Typography>
          <Button variant="contained" color="info" onClick={downloadSelectedDocument}>
            Descargar documento
          </Button>
        </div>
      </object>
    </>
  );
}
