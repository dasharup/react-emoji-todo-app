import React from "react";

export const Input = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control shadow-none border-success"
        placeholder="add item here.."
        value={value}
        onChange={e => onChange(e.target.value)}
        required
      />
    </div>
  );
};
