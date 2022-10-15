import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectorItem {
  name: string;
  value: string;
}

interface SelectorPros<T extends SelectorItem> {
  minWidth?: number;
  label: string;
  options: T[];
  onChange: (value: T) => void;
}

export function Selector<T extends SelectorItem>({ label, options, onChange, minWidth }: SelectorPros<T>) {
  const [selected, setSelected] = React.useState<T>(options[0]);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = options.find((option) => option.value === event.target.value)!;
    setSelected(selectedOption);

    onChange(selectedOption);
  };

  return (
    <FormControl sx={{ minWidth }}>
      <InputLabel>{label}</InputLabel>
      <Select value={selected.value} label={label} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Selector.defaultProps = {
  minWidth: 'auto',
};
