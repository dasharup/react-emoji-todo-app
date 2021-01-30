import React from "react";

export const Modal = ({ children, isOpen }) => {
  const classNameToOpen = isOpen ? "d-block" : "";
  return (
    <div className={`modal fade show ${classNameToOpen}`}>
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export const ModalHeader = ({ children }) => (
  <div className="modal-header">{children}</div>
);

export const ModalFooter = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

export const ModalBody = ({ children }) => (
  <div className="modal-body">{children}</div>
);
