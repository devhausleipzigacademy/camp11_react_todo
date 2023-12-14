import React from "react";

interface Props {
  label: string;
  type: string;
  value: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, value, onHandleChange, ...props }: Props) {
  return (
    <label>
      {label}
      <input {...props} value={value} onChange={(e) => onHandleChange(e)} />
    </label>
  );
}

export default Input;
