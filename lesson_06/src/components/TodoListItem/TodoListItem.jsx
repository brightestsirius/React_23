import React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import "./style.sass";

import { ITEM_COMPLETED, ITEM_PROGRESS } from "../../constants/todoConstants";

export default function TodoListItem({
  item,
  handleItemCompleted,
  handleItemDelete,
}) {
  const itemClass = (item) => {
    const classes = [`list__item`];

    classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);

    return classes.join(` `);
  };

  return (
    <ListItemButton
      onClick={() => handleItemCompleted(item)}
      sx={{ mb: 1 }}
      className={itemClass(item)}
    >
      <strong>{item.rating}</strong> {item.title}{" "}
      <IconButton edge="end" aria-label="delete" onClick={(e) => handleItemDelete(e, item.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemButton>
  );
}
