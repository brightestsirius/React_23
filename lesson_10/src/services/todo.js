import axios from "axios";
const API = `https://jsonplaceholder.typicode.com/todos`;

const todo = {
  get: () => axios(API).then(({ data }) => data),
  delete: (payload) =>
    axios.delete(API + `/${payload}`).then(({ data }) => data),
  patch: (id, payload) =>
    axios
      .patch(API + `/${id}`, payload, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(({ data }) => data),
  post: (payload) => axios.post(API, payload).then(({ data }) => data),
};

export default todo;