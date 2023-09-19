import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ path, text }) {
  const navigation = useNavigate();
  const handleClick = () => navigation(path);
  return <button onClick={handleClick}>{text}</button>;
}
