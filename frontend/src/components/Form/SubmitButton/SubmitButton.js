import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="
        w-full
        bg-primary
        hover:bg-accent
        text-dark
        font-sans
        font-semibold
        py-2
        px-6
        rounded-lg
        transition
        duration-300
        ease-in-out
        shadow-md
        hover:shadow-lg
      "
    >
      {text}
    </button>
  );
}

export default SubmitButton;
