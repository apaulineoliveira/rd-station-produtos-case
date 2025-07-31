import React from 'react';

function Checkbox({ children, type = "checkbox", id, ...props }) {
  return (
    <label htmlFor={id} className="flex items-center">
      <input
        id={id}
        type={type}
        className={`h-5 w-5 ${type === 'checkbox' ? 'form-checkbox' : 'form-radio'} text-blue-500`}
        {...props}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
