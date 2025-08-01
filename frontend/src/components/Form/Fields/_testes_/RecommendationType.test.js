import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecommendationType from '../RecommendationType';

describe('RecommendationType Component', () => {
  it('renderiza corretamente com os títulos e opções', () => {
    render(
      <RecommendationType
        selectedRecommendationType=""
        onRecommendationTypeChange={() => {}}
      />
    );

    expect(screen.getByText('Tipo de Recomendação:')).toBeInTheDocument();

    expect(screen.getByLabelText('Produto Único')).toBeInTheDocument();
    expect(screen.getByLabelText('Múltiplos Produtos')).toBeInTheDocument();
  });

  it('marca a opção correta com base na prop selectedRecommendationType', () => {
    render(
      <RecommendationType
        selectedRecommendationType="SingleProduct"
        onRecommendationTypeChange={() => {}}
      />
    );

    const singleRadio = screen.getByLabelText('Produto Único');
    const multipleRadio = screen.getByLabelText('Múltiplos Produtos');

    expect(singleRadio).toBeChecked();
    expect(multipleRadio).not.toBeChecked();
  });

  it('dispara onRecommendationTypeChange corretamente ao interagir', () => {
    const handleChange = jest.fn();

    render(
      <RecommendationType
        selectedRecommendationType=""
        onRecommendationTypeChange={handleChange}
      />
    );

    const multipleRadio = screen.getByLabelText('Múltiplos Produtos');

    fireEvent.click(multipleRadio);

    expect(handleChange).toHaveBeenCalledWith('MultipleProducts');
  });
});
