import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Step1Options from "./utils/Step1Options";
import Step2Options from "./utils/Step2Options";
import Step4Options from "./utils/Step4Options";
import Step3Content from "./utils/Step3Content";
import Step3Image from "./assets/step3.png";
import Step5Image from "./assets/step5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import StaticPage from "./components/StaticPage";
import Step5Content from "./utils/Step5Content";
import LearningPathsPage from "./components/LearningPathsPage";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(5);
  const [selectedOptions, setSelectedOptions] = useState({
    step1: null,
    step2: null,
    step3: null,
    step4: null,
    step5: null,
  });
  const [showBuffering, setShowBuffering] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 5) {
      setShowBuffering(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setShowBuffering(false);
      }, 2000); // Show buffering for 2 seconds before transitioning
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleOptionSelect = (step, option) => {
    setSelectedOptions({ ...selectedOptions, [step]: option });
  };

  const isStaticPage = currentStep === 3 || currentStep === 5;

  useEffect(() => {
    if (currentStep === 6) {
      // Log user's responses when reaching the final step
      console.log("User's responses:", selectedOptions);
    }
  }, [currentStep]);

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
          <StaticPage image={Step3Image} component={<Step3Content />} />
        )}
        {currentStep === 4 && (
          <Question
            question="What is your math comfort level?"
            subtext="Choose the highest level you feel confident in - you can always adjust later."
            options={
              <Step4Options
                onSelect={(option) => handleOptionSelect("step4", option)}
              />
            }
            selectedOption={selectedOptions.step4}
          />
        )}
        {currentStep === 5 && !showBuffering && (
          <StaticPage image={Step5Image} component={<Step5Content />} />
        )}
        {/* Buffering message */}
        {showBuffering && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="text-2xl font-bold mt-4">
              Finding learning path recommendations for you based on your
              responses
            </p>
          </div>
        )}
        {currentStep === 6 && <LearningPathsPage />}
        <div className="navigation mt-8 flex justify-center">
          {!showBuffering && currentStep < 6 && (
            <button
              disabled={!selectedOptions[`step${currentStep}`] && !isStaticPage}
              onClick={handleNextStep}
              className={`px-4 py-2 rounded-md focus:outline-none ${
                !selectedOptions[`step${currentStep}`] && !isStaticPage
                  ? "bg-diabledGrey text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              {"Continue"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
