const API = `https://61498bf2035b3600175ba32f.mockapi.io/todo`;

const getTodo = () => fetch(API).then((data) => data.json());

const changeTodoItem = (id, item) =>
  fetch(API + `/${id}`, {
    method: `PUT`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((data) => data.json());

const deleteTodoItem = (id) =>
  fetch(API + `/${id}`, { method: `DELETE` }).then((data) => data.json());

const addTodoItem = (item) =>
  fetch(API, {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((data) => data.json());

export { getTodo, changeTodoItem, deleteTodoItem, addTodoItem };
