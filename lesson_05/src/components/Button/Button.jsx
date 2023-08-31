import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Button({ actionClick }) {
  return <DeleteIcon onClick={actionClick} />;
}