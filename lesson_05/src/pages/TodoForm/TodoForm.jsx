import React, { useState, useRef } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { todoItemAdd } from "../../services/todoService";

export default function TodoForm({ liftingNewTodo }) {
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: false,
  });

  const inputTitle = useRef();

  const handleTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));

  const handleCompleted = (e) =>
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.title) {
      inputTitle.current.focus();
    } else {
      (async () => {
        liftingNewTodo(await todoItemAdd(newTodo));
      })();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ p:2, mb: 2, border: '1px dashed grey' }}>
        <TextField
          id="outlined-basic"
          label="Todo title"
          variant="outlined"
          ref={inputTitle}
          defaultValue={newTodo.title}
          onChange={handleTitle}
        />
        <FormControlLabel
          label="Todo completed"
          control={
            <Checkbox checked={newTodo.completed} onChange={handleCompleted} />
          }
        />
        <Button variant="contained" type="submit">Add todo</Button>
      </Stack>
    </form>
  );
}
