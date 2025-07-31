import { renderHook, act } from '@testing-library/react';
import useForm from './useForm';

describe('useForm Hook', () => {
  it('deve iniciar com o estado inicial', () => {
    const initialState = { name: '', age: '' };

    const { result } = renderHook(() => useForm(initialState));

    expect(result.current.formData).toEqual(initialState);
  });

  it('deve atualizar o valor de um campo corretamente', () => {
    const initialState = { name: '', age: '' };

    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleChange('name', 'Pauline');
    });

    expect(result.current.formData).toEqual({ name: 'Pauline', age: '' });

    act(() => {
      result.current.handleChange('age', '30');
    });

    expect(result.current.formData).toEqual({ name: 'Pauline', age: '30' });
  });
});
