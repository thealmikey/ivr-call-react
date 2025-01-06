import React, { useState } from 'react';

type IVRMenuOption = {
  label: string;
  action: string;
  key: string;
};

type IVRMenuProps = {
  options: IVRMenuOption[];
  onSelect: (action: string) => void; // Callback for when an option is selected
};

const IVRMenu: React.FC<IVRMenuProps> = ({ options, onSelect }) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleKeyPress = (key: string) => {
    const option = options.find((opt) => opt.key === key);
    if (option) {
      setSelectedKey(key);
      onSelect(option.action);
    } else {
      setSelectedKey(null);
      alert('Invalid option.');
    }
  };

  return (
    <div>
      <h2>IVR Menu</h2>
      <ul>
        {options.map((option) => (
          <li key={option.key}>
            Press {option.key}: {option.label}
          </li>
        ))}
      </ul>
      <input
        type="text"
        maxLength={1}
        placeholder="Enter option"
        onChange={(e) => handleKeyPress(e.target.value)}
      />
      {selectedKey && <p>You selected: {selectedKey}</p>}
    </div>
  );
};

export default IVRMenu;
