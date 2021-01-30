import React from "react";
import { BUTTON_TYPES } from "../config/btn.config";

const Button = ({ children, bgColor, onClick }) => {
  return (
    <span
      role="button"
      className={`badge badge-pill fs-4 p-2 m-2 ${bgColor}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

const generateButtons = () => {
  const buttons = {};

  Object.entries(BUTTON_TYPES).forEach(([btnName, btnValue]) => {
    const { bgColor, symbol } = btnValue;
    buttons[btnName] = ({ onClick }) => {
      return (
        <Button bgColor={bgColor} onClick={onClick}>
          {symbol}
        </Button>
      );
    };
  });
  return buttons;
};
export const BUTTONS = generateButtons();
