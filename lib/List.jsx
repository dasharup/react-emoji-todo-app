import React from "react";

export const List = ({ children, list }) => {
  return (
    <ul>
      {list.map((item, i) => (
        <li className="my-2" key={i}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
};
