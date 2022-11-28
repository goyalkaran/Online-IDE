import React from "react";
import { NavLink } from "react-router-dom";

export const Question = (props) => {
  const urlWithQuestionId = `/problemStatement/${props.ques.id}`;
  return (
    <tr>
      <td>{props.ques.id}</td>
      <td>
        <NavLink to={urlWithQuestionId}>{props.ques.name} </NavLink>
      </td>
      <td>{props.ques.tag}</td>
      <td>{props.ques.companies}</td>
      <td>{props.ques.level}</td>
    </tr>
  );
};
