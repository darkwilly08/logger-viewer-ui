/* eslint-disable react/prop-types */
import React, { createContext, useState, useMemo } from 'react';

import { ThemeContextModel } from '@local/models/contexts/theme';

export const ThemeContext = createContext<ThemeContextModel>({
  isDark: false,
  toggleTheme: () => null,
});

interface ReactChildrenProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ReactChildrenProps) {
  const [theme, setTheme] = useState(true);
  const values = useMemo(
    () => ({
      theme, // States que seran visibles en el contexto.
      setTheme, // Funciones que son exportadas para manejo externo.
    }),
    [theme],
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ isDark: values.theme, toggleTheme: values.setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
