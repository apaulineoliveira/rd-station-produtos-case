import React from 'react';

function RecommendationList({ recommendations }) {
  const hasRecommendations = recommendations.length > 0;

  return (
    <section>
      <h2 className="text-lg font-semibold text-dark mb-3">
        Recomendações:
      </h2>

      {!hasRecommendations ? (
        <p className="text-gray-600">
          Nenhuma recomendação encontrada.
        </p>
      ) : (
        <ul className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <li
              key={index}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="font-medium text-gray-800">
                {recommendation.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RecommendationList;
