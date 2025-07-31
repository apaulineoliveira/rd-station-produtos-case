import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Preferences from './Preferences';

const mockPreferences = ['Alta performance', 'Baixo custo', 'Sustentável'];

describe('Preferences Component', () => {
  it('renderiza corretamente com as preferências', () => {
    render(<Preferences preferences={mockPreferences} onPreferenceChange={() => {}} />);

    // Verifica se o título está na tela
    expect(screen.getByText('Preferências:')).toBeInTheDocument();

    // Verifica se todas as opções estão presentes
    mockPreferences.forEach((preference) => {
      expect(screen.getByText(preference)).toBeInTheDocument();
    });
  });

  it('exibe checkboxes previamente selecionados', () => {
    render(
      <Preferences
        preferences={mockPreferences}
        selectedPreferences={['Sustentável']}
        onPreferenceChange={() => {}}
      />
    );

    const checkbox = screen.getByLabelText('Sustentável');
    expect(checkbox).toBeChecked();
  });

  it('marca e desmarca corretamente e dispara onPreferenceChange', () => {
    const handleChange = jest.fn();

    render(
      <Preferences
        preferences={mockPreferences}
        selectedPreferences={[]}
        onPreferenceChange={handleChange}
      />
    );

    const checkbox = screen.getByLabelText('Baixo custo');

    // Marca o checkbox
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(['Baixo custo']);

    // Desmarca o checkbox
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith([]);
  });
});
