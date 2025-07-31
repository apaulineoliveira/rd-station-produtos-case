import recommendationService from './recommendation.service';
import mockProducts from '../mocks/mockProducts';

const getRecommendations = (formData) =>
  recommendationService.getRecommendations(formData, mockProducts);

describe('recommendationService', () => {
  describe('SingleProduct', () => {
    test('retorna produto correto com base nas preferências', () => {
      const formData = {
        selectedPreferences: ['Integração com chatbots'],
        selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = getRecommendations(formData);

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('RD Conversas');
    });

    test('retorna apenas um produto mesmo com múltiplos matches', () => {
      const formData = {
        selectedPreferences: [
          'Integração fácil com ferramentas de e-mail',
          'Automação de marketing',
        ],
        selectedFeatures: [
          'Rastreamento de interações com clientes',
          'Rastreamento de comportamento do usuário',
        ],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = getRecommendations(formData);

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('RD Station Marketing');
    });

    test('retorna o último match em caso de empate', () => {
      const formData = {
        selectedPreferences: ['Automação de marketing', 'Integração com chatbots'],
        selectedRecommendationType: 'SingleProduct',
      };

      const recommendations = getRecommendations(formData);

      expect(recommendations).toHaveLength(1);
      expect(recommendations[0].name).toBe('RD Conversas');
    });
  });

  describe('MultipleProducts', () => {
    test('retorna múltiplos produtos com base nas preferências', () => {
      const formData = {
        selectedPreferences: [
          'Integração fácil com ferramentas de e-mail',
          'Personalização de funis de vendas',
          'Automação de marketing',
        ],
        selectedFeatures: [
          'Rastreamento de interações com clientes',
          'Rastreamento de comportamento do usuário',
        ],
        selectedRecommendationType: 'MultipleProducts',
      };

      const recommendations = getRecommendations(formData);

      expect(recommendations).toHaveLength(2);
      expect(recommendations.map((p) => p.name)).toEqual([
        'RD Station CRM',
        'RD Station Marketing',
      ]);
    });
  });
});
