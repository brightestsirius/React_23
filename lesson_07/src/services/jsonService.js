import axios from "axios";

const API = `https://jsonplaceholder.typicode.com`;

const getList = (path) => axios(API+`/${path}`).then(({ data }) => data);

const changeListItem = (path, id, item) =>
  axios
    .put(API + `/${path}/${id}`, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);

const deleteListItem = (path, id) =>
  axios.delete(API + `/${path}/${id}`).then(({ data }) => data);

const addListItem = (path, item) =>
  axios
    .post(API+`/${path}`, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);

export { getList, changeListItem, deleteListItem, addListItem };
