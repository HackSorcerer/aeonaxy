import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Step3Options = ({ onSelect }) => {
  const options = [
    {
      equation: "5 \\times \\frac{1}{2} = ?",
      answer: "Arithmetic",
      subtext: "Introductory",
    },
    {
      equation: "3x + 5 = 4",
      answer: "Basic Algebra",
      subtext: "Foundational",
    },
    {
      equation: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
      answer: "Intermediate Algebra",
      subtext: "Intermediate",
    },
    {
      equation: "\\int_{0}^{L} x^{2} dx = ?",
      answer: "Calculus",
      subtext: "Advanced",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
    onSelect(options[index].answer);
  };

  return (
    <div className="step3-options flex mx-auto">
      {options.map((option, index) => (
        <div
          key={index}
          className={`step3-option p-4 rounded-md shadow-md cursor-pointer flex flex-col items-center mr-4 ${
            selectedOption === index ? "bg-blue-100 border-yellow-400 border-2" : ""
          }`}
          onClick={() => handleSelect(index)}
        >
          <BlockMath
            math={option.equation}
            className={`equation text-sm font-semibold mb-1`}
          />
          <span
            className={`answer text-xs`}
          >
            {option.answer}
          </span>
          <span
            className={`subtext text-sm text-gray-500 mt-1`}
          >
            {option.subtext}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Step3Options;
