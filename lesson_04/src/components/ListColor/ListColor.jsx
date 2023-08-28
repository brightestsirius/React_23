import React, { useState } from "react";
import './style.sass';

import List from './List';
import Color from './Color';

export default function ListColor() {
  const [list] = useState([`Title 1`, `Title 2`, `Title 3`]);
  const [listColor, setListColor] = useState();

  const getColor = value => setListColor(value);

  return <div className="listColor">
    <Color liftColor={getColor} />
    <List list={list} color={listColor} />
  </div>;
}
