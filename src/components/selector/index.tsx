import React from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectorItem {
  name: string;
  value: string;
}

interface SelectorPros<T extends SelectorItem> {
  label: string;
  options: T[];
  onChange: (value: T) => void;
}

export function Selector<T extends SelectorItem>({ label, options, onChange }: SelectorPros<T>) {
  const [selected, setSelected] = React.useState<T>(options[0]);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = options.find((option) => option.value === event.target.value)!;
    setSelected(selectedOption);

    onChange(selectedOption);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected.value}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
