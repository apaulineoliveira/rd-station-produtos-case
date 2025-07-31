import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import useProducts from './hooks/useProducts';
import useRecommendations from './hooks/useRecommendations';

function App() {
  const { products } = useProducts(); // hooks do backend
  const { getRecommendations } = useRecommendations(products);
  const [recommendations, setRecommendations] = useState([]);

  const handleFormSubmit = (formData) => {
    console.log('Dados enviados:', formData);
    const recommendations = getRecommendations(formData, products);
    setRecommendations(recommendations);
  };




  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold">Recomendador de Produtos RD Station</h1>
      <div className="grid w-full grid-cols-1 gap-8 p-8 bg-white rounded-lg shadow-md md:w-3/4 lg:w-1/2 md:grid-cols-2">
        <div className="col-span-2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio...
          </p>
        </div>
        <div>
          <Form onSubmit={handleFormSubmit} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
