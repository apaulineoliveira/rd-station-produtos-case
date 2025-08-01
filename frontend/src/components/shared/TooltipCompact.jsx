import React, { useState, useEffect } from 'react';

function TooltipCompact({ preferences = [], features = [], onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); 
  };

  const formatList = (items) => (items.length ? items.join(', ') : 'Nenhuma');

  return (
    <div
      className={`
        fixed top-1/3 left-0 transform -translate-x-full
        bg-primary text-white p-2 rounded shadow-md
        font-sans text-xs transition-all duration-300 ease-out
        z-50
        ${isVisible ? 'opacity-100 translate-x-3' : 'opacity-0'}
      `}
      style={{ minWidth: 200, maxWidth: 230 }}
      role="dialog"
      aria-live="polite"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1 className="font-semibold">Você selecionou:</h1>

          <p>
            <strong>Preferências:</strong> {formatList(preferences)}
          </p>
          <p>
            <strong>Funcionalidades:</strong> {formatList(features)}
          </p>
        </div>

        <button
          onClick={handleClose}
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
