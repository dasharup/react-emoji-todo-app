import React from "react";
import { BUTTONS } from "../lib";

export const TodoToggleStatusBtn = ({ isDone, onClick }) =>
  isDone ? (
    <BUTTONS.DONE onClick={onClick} />
  ) : (
    <BUTTONS.NOT_DONE onClick={onClick} />
  );

export const TodoEditBtn = ({ isEditable, onClick }) =>
  isEditable ? <BUTTONS.EDIT onClick={onClick} /> : null;

export const TodoDeleteBtn = ({ onClick }) => (
  <BUTTONS.DELETE onClick={onClick} isDeleteable />
);

export const ModalCloseButton = ({ onClick }) => (
  <BUTTONS.DELETE onClick={onClick} isDeleteable />
);
export const TodoAddBtn = ({ onClick }) => <BUTTONS.ADD onClick={onClick} />;
