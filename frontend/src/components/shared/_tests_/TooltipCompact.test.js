import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import TooltipCompact from '../TooltipCompact';


jest.useFakeTimers();

describe('TooltipCompact', () => {
  const preferences = ['Marketing'];
  const features = ['Automação'];
  const onClose = jest.fn();

  it('renderiza com os dados corretos', () => {
    render(
      <TooltipCompact
        preferences={preferences}
        features={features}
        onClose={onClose}
      />
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(screen.getByText(/você selecionou/i)).toBeInTheDocument();
    expect(screen.getByText(/Marketing/)).toBeInTheDocument();
    expect(screen.getByText(/Automação/)).toBeInTheDocument();
  });

  it('mostra mensagem "Nenhuma" se listas estiverem vazias', () => {
    render(
      <TooltipCompact preferences={[]} features={[]} onClose={onClose} />
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(screen.getByText(/Preferências:/)).toBeInTheDocument();
    expect(screen.getAllByText(/Nenhuma/).length).toBeGreaterThan(0);
  });

  it('chama onClose ao clicar no botão de fechar', () => {
    render(
      <TooltipCompact
        preferences={preferences}
        features={features}
        onClose={onClose}
      />
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    const closeButton = screen.getByRole('button', { name: /fechar tooltip/i });
    fireEvent.click(closeButton);

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(onClose).toHaveBeenCalled();
  });
});
