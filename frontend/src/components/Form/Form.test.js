import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';


jest.mock('../../hooks/useProducts', () => () => ({
  preferences: ['Opção A', 'Opção B'],
  features: ['Funcionalidade X', 'Funcionalidade Y'],
}));

jest.mock('../../hooks/useForm', () => () => {
  const formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  };

  const handleChange = jest.fn((key, value) => {
    formData[key] = value;
  });

  return { formData, handleChange };
});

describe('Form Component', () => {
  it('renderiza todos os campos corretamente', () => {
    render(<Form onSubmit={() => {}} />);

    expect(screen.getByText('Preferências:')).toBeInTheDocument();
    expect(screen.getByText('Funcionalidades:')).toBeInTheDocument();
    expect(screen.getByText('Tipo de Recomendação:')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /obter recomendação/i })
    ).toBeInTheDocument();
  });

  it('chama onSubmit com os dados corretos ao enviar', () => {
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);

    const button = screen.getByRole('button', { name: /obter recomendação/i });

    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    });
  });
});
