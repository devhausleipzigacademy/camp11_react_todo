import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  label: string;
}

function Input({ label, ...props }: Props) {
  return (
    <label>
      {label}
      <input {...props} />
    </label>
  );
}

export default Input;
