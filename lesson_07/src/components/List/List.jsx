import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getList } from "../../services/jsonService";

export default function List({ path }) {
  const [searchParams] = useSearchParams(); // {sizes: 2}
  const [searchParamsFilter, setSearchParamsFilter] = useState(``);
  const [searchParamsColor, setSearchParamsColor] = useState(``);

  const [list, setList] = useState([]);

  useEffect(() => {
    setSearchParamsFilter(searchParams.get(`filter`));
    setSearchParamsColor(searchParams.get(`color`));

    (async () => {
      let response = await getList(path);
      setList(response.splice(0, 10));
    })();
  }, []);

  return list.length ? (
    <ul style={{color: searchParamsColor}}>
      {list.map((item, index) => (
        <li key={index}>
          {item.title} <Link to={`${item.id}`}>Read more</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
