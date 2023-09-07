import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getList } from "../../services/jsonService";

export default function ListItem() {
  const { postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      setPost(await getList(`posts/${postId}`));
    })();
  }, []);

  return Object.keys(post).length ? (
    <ul>
      {Object.keys(post).map((key, index) => (
        <li key={index}>
          <strong>{key}</strong>: {post[key]}
        </li>
      ))}
    </ul>
  ) : null;
}