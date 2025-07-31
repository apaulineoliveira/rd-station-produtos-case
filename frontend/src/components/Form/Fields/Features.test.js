import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Features from './Features';

const mockFeatures = ['Login com Google', 'Notificações', 'Tema escuro'];

describe('Features Component', () => {
  it('renderiza corretamente com as funcionalidades', () => {
    render(<Features features={mockFeatures} onFeatureChange={() => {}} />);


    expect(screen.getByText('Funcionalidades:')).toBeInTheDocument();


    mockFeatures.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('marca e desmarca checkbox corretamente', () => {
    const handleChange = jest.fn();

    render(
      <Features
        features={mockFeatures}
        selectedFeatures={[]}
        onFeatureChange={handleChange}
      />
    );

    const checkbox = screen.getByLabelText('Notificações');


    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(['Notificações']);

    
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it('exibe checkboxes previamente selecionados', () => {
    render(
      <Features
        features={mockFeatures}
        selectedFeatures={['Tema escuro']}
        onFeatureChange={() => {}}
      />
    );

    const checkbox = screen.getByLabelText('Tema escuro');
    expect(checkbox).toBeChecked();
  });
});
