import React from "react";
import FinalImage from "../assets/final.png";

const LearningPathsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Learning paths based on your answers
        </h1>
        <p className="text-sm text-gray-500">
          Choose one to get started. You can switch anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="absolute top-0 mritui bg-yellow-500 text-white py-1 px-4 rounded-tr-md rounded-bl-md text-xs font-semibold">
            Most Popular
          </div>
          <div className="p-6 flex items-center">
            <div className="mr-4">
              <h2 className="text-lg font-semibold mb-2">Foundational Math</h2>
              <p className="text-sm text-gray-600 mb-4 w-5/6">
                Build your foundational skills in algebra, geometry, and
                probability.
              </p>
            </div>
            <img
              src={FinalImage}
              alt="Logo"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 flex items-center">
            <div className="mr-4">
              <h2 className="text-lg font-semibold mb-2">
                Mathematical Thinking
              </h2>
              <p className="text-sm text-gray-600 mb-4 w-5/6">
                Mathematical Thinking t Build your foundational skills in
                algebra, geometry, and probability.
              </p>
            </div>
            <img
              src={FinalImage}
              alt="Logo"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathsPage;
