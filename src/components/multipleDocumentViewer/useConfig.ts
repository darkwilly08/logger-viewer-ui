import { useState } from 'react';

import { DocumentSelector } from '@local/models/entities/documentSelector';

export const useConfig = (documents: DocumentSelector[]) => {
  const [selectedDocument, setSelectedDocument] = useState<DocumentSelector>(documents[0]);

  const onDocumentChange = (document: DocumentSelector) => {
    setSelectedDocument(document);
  };

  const downloadSelectedDocument = () => {
    window.open(selectedDocument.value, '_blank');
  };

  return {
    selectedDocument,
    onDocumentChange,
    downloadSelectedDocument,
  };
};
