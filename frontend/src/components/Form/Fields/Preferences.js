import React, { useState, useEffect } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences = [],
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [selectedPreferenceList, setSelectedPreferenceList] = useState(selectedPreferences);

  useEffect(() => {
    setSelectedPreferenceList(selectedPreferences);
  }, [selectedPreferences]);

  const togglePreferenceSelection = (selectedPreference) => {
    const updatedPreferenceList = selectedPreferenceList.includes(selectedPreference)
      ? selectedPreferenceList.filter(
          (currentPreference) => currentPreference !== selectedPreference
        )
      : [...selectedPreferenceList, selectedPreference];

    setSelectedPreferenceList(updatedPreferenceList);
    onPreferenceChange(updatedPreferenceList);
  };

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-dark mb-3">Preferências:</h2>
      <ul className="space-y-2">
        {preferences.map((preferenceName, index) => (
          <li key={index}>
            <Checkbox
              value={preferenceName}
              checked={selectedPreferenceList.includes(preferenceName)}
              onChange={() => togglePreferenceSelection(preferenceName)}
              className="text-primary"
            >
              {preferenceName}
            </Checkbox>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Preferences;
