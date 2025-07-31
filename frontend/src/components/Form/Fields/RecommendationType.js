import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ selectedRecommendationType, onRecommendationTypeChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-dark mb-3">Tipo de Recomendação:</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Checkbox
          id="SingleProduct"
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          checked={selectedRecommendationType === 'SingleProduct'}
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          className="text-primary"
        >
          Produto Único
        </Checkbox>

        <Checkbox
          id="MultipleProducts"
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          checked={selectedRecommendationType === 'MultipleProducts'}
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          className="text-primary"
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </div>
  );
}

export default RecommendationType;
