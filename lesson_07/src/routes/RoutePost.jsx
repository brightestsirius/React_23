import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ListItem from "./../components/ListItem/ListItem";

export default function RoutePost() {
  const navigation = useNavigate();

  const handleReturn = () => navigation("/posts");

  return (
    <div>
      <h3>Route Post</h3>
      <ListItem />
      {/* <Link to="/posts">Back to Posts page</Link> */}
      <button onClick={handleReturn}>Back to Posts page</button>
    </div>
  );
}
