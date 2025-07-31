import React from 'react';

function Checkbox({ children, type = "checkbox", id, ...props }) {
  return (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer select-none">
      <input
        id={id}
        type={type}
        className={`
          appearance-none
          h-5 w-5
          border-2 border-gray-300
          rounded-md
          checked:bg-blue-600
          checked:border-transparent
          focus:outline-none
          transition duration-200
          cursor-pointer
        `}
        {...props}
      />
      <span className="text-gray-800 text-sm">{children}</span>
    </label>
  );
}

export default Checkbox;
