import React, {memo} from "react";
import "./style.sass";

export default memo(function TodoStatistics({ list = [] }) {
  return (
    <div className="todo__statistics">
      <h3>Statistics</h3>
      <ul>
        <li>All: {list.length}</li>
        <li>Completed: {list.filter((item) => item.completed).length}</li>
        <li>In progress: {list.filter((item) => !item.completed).length}</li>
      </ul>
    </div>
  );
}, (prevProps, nextProps) => {
    // console.log(`prevProps`, prevProps);
    // console.log(`nextProps`, nextProps);
});