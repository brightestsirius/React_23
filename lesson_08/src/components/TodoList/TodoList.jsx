import React, { useState, useEffect, useMemo, useContext } from "react";

import ListFilterContext from "../../contexts/ListFilterContext";
import ListColorContext from "../../contexts/ListColorContext";

export default function TodoList() {
  const [list, setList] = useState([]);

  const {filter} = useContext(ListFilterContext); // {filter, setFilter}
  const {color} = useContext(ListColorContext);

  const filteredList = useMemo(() => list.filter(item => {
    switch(filter){
        case `completed`:
            return item.completed;
        case `non-completed`:
            return !item.completed;
        default:
            return item;
    }
  }), [filter, list])

  useEffect(() => {
    (async () => {
      let request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
          response = await request.json();

      setList(response.slice(0, 10));
    })();
  }, []);

  return filteredList.length ? (
    <ul style={{color}}>
      {filteredList.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  ) : null;
}
