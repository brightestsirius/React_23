import React, { useCallback, useContext } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MuiColorInput } from "mui-color-input";

import ThemeContext from "../../context/ThemeContext";

export default function TodoColorPicker() {

  const {color, setColor} = useContext(ThemeContext);

  const handleColor = (value) => setColor(value);

  const colorTitle = useCallback(() => {
    return (
      <Typography variant="h6" sx={{mb: 2}}>
        Color: {color}
      </Typography>
    );
  }, [color]);

  return (
    <Box sx={{mb: 5}}>
      {colorTitle()}
      <MuiColorInput
        className="todo__colorpicker"
        value={color}
        onChange={handleColor}
        fullWidth
      />
    </Box>
  );
}
