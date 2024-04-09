import React from 'react';

function Question({ question, subtext, options }) {
  return (
    <div className="flex flex-col items-center space-y">
      <h2 className="text-lg font-semibold mb-2 text-center">{question}</h2>
      <p className="text-sm text-gray-500 mb-4 text-center">{subtext}</p>
      <div className="flex flex-wrap justify-center space-x-4 w-full">
        {options}
      </div>
    </div>
  );
}

export default Question;
