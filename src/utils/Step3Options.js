// Step3Options.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEquals, faMinus, faTimes, faDivide, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Step3Options = ({ onSelect }) => {
  const options = [
    {
      value: "plus",
      label: "Arithmetic",
      icon: faPlus,
    },
    {
      value: "equals",
      label: "Introductory",
      icon: faEquals,
    },
    {
      value: "minus",
      label: "Basic Algebra",
      icon: faMinus,
    },
    {
      value: "times",
      label: "Intermediate Algebra",
      icon: faTimes,
    },
    {
      value: "divide",
      label: "Calculus",
      icon: faDivide,
    },
    {
      value: "question",
      label: "Advanced",
      icon: faQuestion,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (value) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="step3-options flex flex-col mx-auto">
      {options.map(option => (
        <div
          key={option.value}
          className={`step3-option p-4 rounded-md shadow-md cursor-pointer flex items-center mb-4 ${selectedOption === option.value ? 'bg-blue-100' : ''}`}
          onClick={() => handleSelect(option.value)}
        >
          <FontAwesomeIcon icon={option.icon} className={`text-blue-500 mr-2 ${selectedOption === option.value ? 'text-blue-700' : ''}`} />
          <span className={`label text-sm font-semibold ${selectedOption === option.value ? 'text-blue-700' : ''}`}>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Step3Options;
