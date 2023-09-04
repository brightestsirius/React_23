import React, { useState, useEffect, useMemo } from "react";

import List from '@mui/material/List';

import {
  getTodo,
  changeTodoItem,
  deleteTodoItem,
} from "../../../services/todoService";

import TodoListItem from "../../../components/TodoListItem/TodoListItem";

import {
  FILTER_TODO_COMPLETED,
  FILTER_TODO_PROGRESS,
} from "./../../../constants/todoConstants";

export default function TodoList({ newTodo, filter, color, liftingList }) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const sortedList = useMemo(() => {
    return filteredList.sort((a, b) => b.rating - a.rating);
  }, [filteredList]);

  useEffect(() => {
    (async () => {
      setList(await getTodo());
    })();
  }, []);

  useEffect(() => {
    setFilteredList(list);
    liftingList(list);
  }, [list]);

  useEffect(() => {
    Object.keys(newTodo).length &&
      setList((prevState) => [...prevState, newTodo]);
  }, [newTodo]);

  useEffect(() => {
    switch (filter) {
      case FILTER_TODO_COMPLETED:
        setFilteredList(list.filter((item) => item.completed));
        break;
      case FILTER_TODO_PROGRESS:
        setFilteredList(list.filter((item) => !item.completed));
        break;
      default:
        setFilteredList(list);
    }
  }, [filter, list]);

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

  const handleItemDelete = (e, id) => {
    e.stopPropagation();

    (async () => {
      try {
        await deleteTodoItem(id);
        setList((prevState) => prevState.filter((item) => item.id !== id));
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return list.length ? (
    <List style={{ color }}>
      {sortedList.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          handleItemCompleted={handleItemCompleted}
          handleItemDelete={handleItemDelete}
        />
      ))}
    </List>
  ) : null;
}
