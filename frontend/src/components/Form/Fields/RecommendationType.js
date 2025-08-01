import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({
  selectedRecommendationType,
  onRecommendationTypeChange,
}) {
  const handleTypeChange = (type) => {
    onRecommendationTypeChange(type);
  };

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-dark mb-3">Tipo de Recomendação:</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Checkbox
          id="single-product"
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          checked={selectedRecommendationType === 'SingleProduct'}
          onChange={() => handleTypeChange('SingleProduct')}
          className="text-primary"
        >
          Produto Único
        </Checkbox>

        <Checkbox
          id="multiple-products"
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          checked={selectedRecommendationType === 'MultipleProducts'}
          onChange={() => handleTypeChange('MultipleProducts')}
          className="text-primary"
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </section>
  );
}

export default RecommendationType;
