import React, { useState, useEffect } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({ preferences, selectedPreferences = [], onPreferenceChange }) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences);

  useEffect(() => {
    setCurrentPreferences(selectedPreferences);
  }, [selectedPreferences]);

  const handlePreferenceChange = (preference) => {
    const updated = currentPreferences.includes(preference)
      ? currentPreferences.filter((p) => p !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updated);
    onPreferenceChange(updated);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-dark mb-3">Preferências:</h2>
      <ul className="space-y-2">
        {preferences.map((preference) => (
          <li key={preference}>
            <Checkbox
              value={preference}
              checked={currentPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="text-primary"
            >
              {preference}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
