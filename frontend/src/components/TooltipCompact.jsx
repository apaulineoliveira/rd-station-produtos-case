import React, { useState, useEffect } from 'react';

function TooltipCompact({ preferences = [], features = [], onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        fixed
        top-1/3
        left-0
        transform
        -translate-x-full
        bg-primary
        text-white
        p-2
        rounded
        shadow-md
        font-sans
        text-xs
        transition-all duration-300 ease-out
        ${show ? 'opacity-100 translate-x-3' : 'opacity-0'}
        z-50
      `}
      style={{ minWidth: 200, maxWidth: 230 }}
      role="dialog"
      aria-live="polite"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1>Você selecionou:</h1>
          <p>
            <strong>Preferências:</strong>{' '}
            {preferences.length ? preferences.join(', ') : 'Nenhuma'}
          </p>
          <p>
            <strong>Funcionalidades:</strong>{' '}
            {features.length ? features.join(', ') : 'Nenhuma'}
          </p>
        </div>
        <button
          onClick={() => {
            setShow(false);
            setTimeout(onClose, 300);
          }}
          aria-label="Fechar tooltip"
          className="ml-2 text-gray-400 hover:text-gray-200 focus:outline-none text-sm leading-none"
          style={{ lineHeight: 1 }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default TooltipCompact;
