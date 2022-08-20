import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';

import styles from './footer.module.scss';

interface Field {
  value: string;
  error: string | null;
}

const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}));

export function Footer() {
  const inputType = 'filled';
  const [nameField, setNameField] = useState<Field>({
    value: '',
    error: null,
  });

  const handleNameChange = (val: string) => {
    setNameField({
      value: val,
      error: null,
    });
  };

  return (
    <div className={styles.container}>
      <Typography>Contacta con nosotros</Typography>
      <div className={styles.container__row}>
        <CssTextField
          className={clsx(styles.container__field, styles.container__row__child)}
          value={nameField.value}
          onChange={(evt) => handleNameChange(evt.target.value)}
          label="Nombre"
          variant={inputType}
          margin="dense"
          error={!!nameField.error}
          helperText={nameField.error}
        />
        <CssTextField
          className={clsx(styles.container__field, styles.container__row__child)}
          value={nameField.value}
          onChange={(evt) => handleNameChange(evt.target.value)}
          label="Apellido"
          variant={inputType}
          margin="dense"
          error={!!nameField.error}
          helperText={nameField.error}
        />
      </div>
      <div className={styles.container__row}>
        <CssTextField
          className={clsx(styles.container__field, styles.container__row__child)}
          value={nameField.value}
          onChange={(evt) => handleNameChange(evt.target.value)}
          label="Compañía"
          variant={inputType}
          margin="dense"
          error={!!nameField.error}
          helperText={nameField.error}
        />
        <CssTextField
          className={clsx(styles.container__field, styles.container__row__child)}
          value={nameField.value}
          onChange={(evt) => handleNameChange(evt.target.value)}
          label="Teléfono (opcional)"
          variant={inputType}
          margin="dense"
          error={!!nameField.error}
          helperText={nameField.error}
        />
      </div>
      <CssTextField
        className={clsx(styles.container__field, styles.container__row__child)}
        value={nameField.value}
        onChange={(evt) => handleNameChange(evt.target.value)}
        label="Teléfono (opcional)"
        variant={inputType}
        margin="dense"
        multiline
        maxRows={4}
        error={!!nameField.error}
        helperText={nameField.error}
      />
      <Button size="large" variant="contained" color="secondary" className={styles.container__button}>
        ENVIAR MENSAJE
      </Button>
    </div>
  );
}
