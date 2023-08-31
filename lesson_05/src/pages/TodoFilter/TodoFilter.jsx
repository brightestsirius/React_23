import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  TODO_FILTER_ALL,
  TODO_FILTER_COMPLETED,
  TODO_FILTER_PROGRESS,
} from "../../contstants/todoConstants";

import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function TodoFilter({ liftingFilter }) {
  const [filter, setFilter] = useLocalStorage("filter", TODO_FILTER_ALL);

  const handleFilter = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter, liftingFilter]);

  return (
    <Box>
      <FormControl fullWidth sx={{mb: 3}}>
        <InputLabel id="demo-simple-select-label">Filter list</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter list"
          onChange={handleFilter}
        >
          <MenuItem sx={{ width: 1 }} value={TODO_FILTER_ALL}>all</MenuItem>
          <MenuItem sx={{ width: 1 }} value={TODO_FILTER_COMPLETED}>completed</MenuItem>
          <MenuItem sx={{ width: 1 }} value={TODO_FILTER_PROGRESS}>progress</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
