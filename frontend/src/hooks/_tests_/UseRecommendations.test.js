import { renderHook, act } from '@testing-library/react';
import useRecommendations from '../useRecommendations';
import recommendationService from '../../services/recommendation.service';


jest.mock('../../services/recommendation.service');

describe('useRecommendations hook', () => {
  const mockProducts = [{ id: 1 }, { id: 2 }];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('inicializa com recommendations vazio', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));
    expect(result.current.recommendations).toEqual([]);
  });

  it('chama recommendationService.getRecommendations com os argumentos corretos', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));

    const formData = { selectedFeatures: ['feature1'] };
    recommendationService.getRecommendations.mockReturnValue(['rec1', 'rec2']);

    const recs = result.current.getRecommendations(formData);

    expect(recommendationService.getRecommendations).toHaveBeenCalledWith(formData, mockProducts);
    expect(recs).toEqual(['rec1', 'rec2']);
  });

  it('setRecommendations atualiza o estado corretamente', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));

    act(() => {
      result.current.setRecommendations(['nova rec']);
    });

    expect(result.current.recommendations).toEqual(['nova rec']);
  });
});
