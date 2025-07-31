import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import TooltipCompact from './components/TooltipCompact';
import useProducts from './hooks/useProducts';
import useRecommendations from './hooks/useRecommendations';

function App() {
  const { products } = useProducts();
  const { getRecommendations } = useRecommendations(products);

  const [recommendations, setRecommendations] = useState([]);
  const [formData, setFormData] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleFormSubmit = (data) => {
    const recs = getRecommendations(data, products);
    setRecommendations(recs);
    setFormData(data);
    setShowTooltip(true);
  };

  return (
    <div className="font-sans bg-white text-dark min-h-screen relative">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img
            src="https://www.rdstation.com/favicon.ico"
            alt="RD Station"
            className="h-8 object-contain"
          />
        </div>
      </header>


      <section className="bg-secondary py-16 px-4 text-center mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Recomendador de Produtos RD Station
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Descubra quais soluções da RD Station são ideais para o seu negócio.
        </p>
      </section>


      <main className="max-w-5xl mx-auto px-6 py-16 pt-8">
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma
            variedade de soluções para marketing, vendas e automação, todas pensadas para
            potencializar seus resultados.
          </p>
        </div>


        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <Form onSubmit={handleFormSubmit} />
        </div>

        {recommendations.length > 0 && (
          <div className="relative">
            <RecommendationList recommendations={recommendations} />

            {showTooltip && formData && (
              <TooltipCompact
                preferences={formData.selectedPreferences}
                features={formData.selectedFeatures}
                onClose={() => setShowTooltip(false)}
              />
            )}
          </div>
        )}
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        <br />
        © Pauline Oliveira - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
