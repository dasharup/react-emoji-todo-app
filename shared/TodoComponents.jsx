import * as React from "react";

export const TodoitemBox = ({ children }) => {
  return (
    <div className="toast fade show d-flex align-items-center text-dark bg-white border-0 mx-auto w-75">
      {children}
    </div>
  );
};

export const TodoitemText = ({ children }) => {
  return <div className="toast-body w-100">{children}</div>;
};
