import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ selectedRecommendationType, onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-lg font-bold">Tipo de Recomendação:</h2>
      <div className="flex items-center space-x-6">
        <Checkbox
          id="SingleProduct"
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          checked={selectedRecommendationType === 'SingleProduct'}
          onChange={() => onRecommendationTypeChange('SingleProduct')}
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
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </div>
  );
}

export default RecommendationType;
