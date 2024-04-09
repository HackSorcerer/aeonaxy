// Step1Options.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faChild, faBook, faChalkboardTeacher, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Step1Options = ({ onSelect }) => {
  const options = [
    {
      value: "student",
      label: "Student or soon to be enrolled",
      icon: faUser,
    },
    {
      value: "professional",
      label: "Professional pursuing a career",
      icon: faBriefcase,
    },
    {
      value: "parent",
      label: "Parent of a school-age child",
      icon: faChild,
    },
    {
      value: "learner",
      label: "Lifelong learner",
      icon: faBook,
    },
    {
      value: "teacher",
      label: "Teacher",
      icon: faChalkboardTeacher,
    },
    {
      value: "other",
      label: "Other",
      icon: faQuestionCircle,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (value) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="step1-options flex flex-col w-1/3">
      {options.map(option => (
        <div
          key={option.value}
          className={`step1-option p-4 rounded-md shadow-md cursor-pointer flex items-center mb-4 ${selectedOption === option.value ? 'bg-blue-100' : ''}`}
          onClick={() => handleSelect(option.value)}
        >
          <FontAwesomeIcon icon={option.icon} className={`text-blue-500 mr-2 ${selectedOption === option.value ? 'text-blue-700' : ''}`} />
          <span className={`label text-sm font-semibold ${selectedOption === option.value ? 'text-blue-700' : ''}`}>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Step1Options;
