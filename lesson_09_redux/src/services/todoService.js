const API = `https://jsonplaceholder.typicode.com/todos/`;

const getTodo = () => fetch(API).then((data) => data.json());

const deleteTodoItem = (id) =>
  fetch(API + `/${id}`, { type: `DELETE` }).then((data) => data.json());

export { getTodo, deleteTodoItem };
