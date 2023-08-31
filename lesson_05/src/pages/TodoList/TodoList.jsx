import React, { useState, useEffect, useMemo, useContext } from "react";
import "./style.sass";

import List from "@mui/material/List";

import {
  getTodo,
  changeTodoItem,
  todoItemDelete,
} from "../../services/todoService";

import {
  TODO_FILTER_COMPLETED,
  TODO_FILTER_PROGRESS,
} from "../../contstants/todoConstants";

import TodoListItem from "../../components/TodoListItem/TodoListItem";
import ThemeContext from "../../context/ThemeContext";

export default function TodoList({ newTodo, filter }) {
  const [list, setList] = useState([]);
  const [listFiltered, setListFiltered] = useState([]);

  const {color} = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      setList(await getTodo());
    })();
  }, []);

  useEffect(() => {
    setListFiltered(list);
  }, [list]);

  useEffect(() => {
    switch (filter) {
      case TODO_FILTER_COMPLETED:
        setListFiltered(list.filter((item) => item.completed));
        break;
      case TODO_FILTER_PROGRESS:
        setListFiltered(list.filter((item) => !item.completed));
        break;
      default:
        setListFiltered(list);
    }
  }, [filter, list]);

  useEffect(() => {
    Object.keys(newTodo).length &&
      setList((prevState) => [...prevState, newTodo]);
  }, [newTodo]);

  const handleItemCompleted = (item) => {
    (async () => {
      let changedItem = await changeTodoItem(item.id, {
        completed: !item.completed,
      });

      setList((prevState) =>
        prevState.map((element) => {
          if (element.id === item.id) element = changedItem;
          return element;
        })
      );
    })();
  };

  const hadleItemDelete = (e, id) => {
    e.stopPropagation();

    (async () => {
      await todoItemDelete(id);
      setList((prevState) => prevState.filter((item) => item.id !== id));
    })();
  };

  const todoListSort = () => {
    return listFiltered.sort((a, b) => b.rating - a.rating);
  };

  const sortedList = useMemo(todoListSort, [listFiltered]);

  return list.length ? (
    <List style={{color}} sx={{pt: 0}}>
      {sortedList.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          handleItemCompleted={handleItemCompleted}
          hadleItemDelete={hadleItemDelete}
        />
      ))}
    </List>
  ) : null;
}
