import React from 'react';
import { render, screen } from '@testing-library/react';
import RecommendationList from './RecommendationList';

describe('RecommendationList Component', () => {
  it('renderiza corretamente com recomendações', () => {
    const mockRecommendations = [
      { name: 'Produto 1' },
      { name: 'Produto 2' },
    ];

    render(<RecommendationList recommendations={mockRecommendations} />);

    expect(screen.getByText('Recomendações:')).toBeInTheDocument();
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });

  it('não renderiza o título quando não há recomendações', () => {
    render(<RecommendationList recommendations={[]} />);

    expect(screen.queryByText('Recomendações:')).not.toBeInTheDocument();
    expect(screen.getByText('Nenhuma recomendação encontrada.')).toBeInTheDocument();
  });
});
