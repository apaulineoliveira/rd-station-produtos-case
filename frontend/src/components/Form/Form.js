import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';

function Form({ onSubmit }) {
  const { preferences, features } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); 
    }
  };

  return (
    <form
      className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    ><Preferences
    preferences={preferences}
    selectedPreferences={formData.selectedPreferences}
    onPreferenceChange={(sel) =>
      handleChange('selectedPreferences', sel)
    }
  />
  <Features
    features={features}
    selectedFeatures={formData.selectedFeatures}
    onFeatureChange={(sel) =>
      handleChange('selectedFeatures', sel)
    }
  />
  <RecommendationType
    selectedRecommendationType={formData.selectedRecommendationType}
    onRecommendationTypeChange={(sel) =>
      handleChange('selectedRecommendationType', sel)
    }
  />

      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
