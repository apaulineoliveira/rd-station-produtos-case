import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Features({
  features = [],
  selectedFeatures = [],
  onFeatureChange,
}) {
  const [selectedFeatureList, setSelectedFeatureList] = useState(selectedFeatures);

  const toggleFeatureSelection = (selectedFeature) => {
    const updatedFeatureList = selectedFeatureList.includes(selectedFeature)
      ? selectedFeatureList.filter(
          (currentFeature) => currentFeature !== selectedFeature
        )
      : [...selectedFeatureList, selectedFeature];

    setSelectedFeatureList(updatedFeatureList);
    onFeatureChange(updatedFeatureList);
  };

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-dark mb-3">Funcionalidades:</h2>
      <ul className="space-y-2">
        {features.map((featureName, index) => (
          <li key={index}>
            <Checkbox
              value={featureName}
              checked={selectedFeatureList.includes(featureName)}
              onChange={() => toggleFeatureSelection(featureName)}
              className="text-accent"
            >
              {featureName}
            </Checkbox>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
