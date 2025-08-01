import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Preferences from '../Preferences';

const mockPreferences = ['Alta performance', 'Baixo custo', 'Sustentável'];

describe('Preferences Component', () => {
  it('renderiza corretamente com as preferências', () => {
    render(<Preferences preferences={mockPreferences} onPreferenceChange={() => {}} />);

    expect(screen.getByText('Preferências:')).toBeInTheDocument();

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

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(['Baixo custo']);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith([]);
  });
});
