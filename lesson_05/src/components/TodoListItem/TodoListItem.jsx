import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

import {
  TODO_ITEM_COMPLETED,
  TODO_ITEM_PROGRESS,
} from "../../contstants/todoConstants";

import Button from "../Button/Button";

export default function TodoListItem({
  item,
  handleItemCompleted,
  hadleItemDelete,
}) {
  const todoItemClasses = (item) => {
    const classes = [];

    classes.push(item.completed ? TODO_ITEM_COMPLETED : TODO_ITEM_PROGRESS);

    return classes.join(` `);
  };
  return (
    <ListItem className={todoItemClasses(item)} onClick={() => handleItemCompleted(item)}>
    <ListItemText primary={<><strong>{item.rating}</strong> {item.title}</>} />
    <IconButton edge="end" aria-label="delete">
      <Button actionClick={(e) => hadleItemDelete(e, item.id)} />
    </IconButton>
  </ListItem>
  );
}
