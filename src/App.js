import React, { useState } from "react";
import Question from "./components/Question";
import Step1Options from "./utils/Step1Options";
import Step2Options from "./utils/Step2Options";
import Step3Options from "./utils/Step3Options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(3);
  const [selectedOptions, setSelectedOptions] = useState({
    step1: null,
    step2: null,
    step3: null,
  });

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleOptionSelect = (step, option) => {
    setSelectedOptions({ ...selectedOptions, [step]: option });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Line Indicator */}
      <div className="relative pt-6 pb-0 flex items-center justify-between">
        {currentStep > 1 && (
          <button onClick={handlePrevStep} className="mr-4">
            <FontAwesomeIcon icon={faAngleLeft} className="mr-1" />
          </button>
        )}
        <div className="w-full h-1 bg-gray-200 rounded-full">
          <div
            className={`h-1 bg-progressBar rounded-full`}
            style={{ width: `${currentStep * (100 / totalSteps)}%` }}
          />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          {currentStep === 1 && (
            <Question
              question="Which describes you best?"
              subtext="This will help us personalize your experience."
              options={
                <Step1Options
                  onSelect={(option) => handleOptionSelect("step1", option)}
                />
              }
              selectedOption={selectedOptions.step1}
            />
          )}
          {currentStep === 2 && (
            <Question
              question="Which are you most interested in?"
              subtext="Choose just one. This will help us get you started (but won't limit your experience)."
              options={
                <Step2Options
                  onSelect={(option) => handleOptionSelect("step2", option)}
                />
              }
              selectedOption={selectedOptions.step2}
            />
          )}
          {currentStep === 3 && (
            <Question
              question="What is your math comfort level?"
              subtext="Choose the highest level you feel confident in - you can always adjust later."
              options={
                <Step3Options
                  onSelect={(option) => handleOptionSelect("step3", option)}
                />
              }
              selectedOption={selectedOptions.step3}
            />
          )}
          {/* Navigation */}
          <div className="navigation mt-8 flex justify-center">
            {currentStep < totalSteps && (
              <button
                disabled={!selectedOptions[`step${currentStep}`]}
                onClick={handleNextStep}
                className={`px-4 py-2 rounded-md focus:outline-none ${
                  !selectedOptions[`step${currentStep}`]
                    ? "bg-diabledGrey text-white cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                Continue
              </button>
            )}
            {currentStep === totalSteps && (
              <button
                disabled={!selectedOptions[`step${currentStep}`]}
                className={`px-4 py-2 rounded-md focus:outline-none ${
                  !selectedOptions[`step${currentStep}`]
                    ? "bg-diabledGrey text-white cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
