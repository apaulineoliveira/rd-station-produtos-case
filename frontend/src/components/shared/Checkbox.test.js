import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('renderiza corretamente com label', () => {
    render(<Checkbox id="teste" type="checkbox">Aceito os termos</Checkbox>);

    const checkbox = screen.getByRole('checkbox', { name: /aceito os termos/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('dispara onChange ao clicar', () => {
    const handleChange = jest.fn();

    render(
      <Checkbox id="aceito" onChange={handleChange}>
        Aceitar
      </Checkbox>
    );

    const checkbox = screen.getByRole('checkbox', { name: /aceitar/i });
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renderiza como radio quando especificado', () => {
    render(
      <Checkbox id="opcao1" type="radio">
        Opção 1
      </Checkbox>
    );

    const radio = screen.getByRole('radio', { name: /opção 1/i });
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('type', 'radio');
  });

  it('associa label e input corretamente', () => {
    render(<Checkbox id="termos">Termos e Condições</Checkbox>);

    const checkbox = screen.getByRole('checkbox', { name: /termos e condições/i });
    expect(checkbox).toBeInTheDocument();
  });
});
