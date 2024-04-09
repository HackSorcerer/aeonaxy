// Step2Options.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faLightbulb, faCalculator, faBrain, faClock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Step2Options = ({ onSelect }) => {
  const options = [
    {
      value: "tools",
      label: "Learning specific skills to advance my career",
      icon: faTools,
    },
    {
      value: "lightbulb",
      label: "Exploring new topics I'm interested in",
      icon: faLightbulb,
    },
    {
      value: "calculator",
      label: "Refreshing my math foundations",
      icon: faCalculator,
    },
    {
      value: "brain",
      label: "Exercising my brain to stay sharp",
      icon: faBrain,
    },
    {
      value: "clock",
      label: "Something else",
      icon: faClock,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (value) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="step2-options flex flex-col mx-auto">
      {options.map(option => (
        <div
          key={option.value}
          className={`step2-option p-4 rounded-md shadow-md cursor-pointer flex items-center mb-4 ${selectedOption === option.value ? 'bg-blue-100' : ''}`}
          onClick={() => handleSelect(option.value)}
        >
          <FontAwesomeIcon icon={option.icon} className={`text-blue-500 mr-2 ${selectedOption === option.value ? 'text-blue-700' : ''}`} />
          <span className={`label text-sm font-semibold ${selectedOption === option.value ? 'text-blue-700' : ''}`}>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Step2Options;
