import React from 'react';

const StaticPage = ({ image, component }) => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="w-1/2 flex justify-center items-center">
        <img src={image} alt="Image" className="max-w-full h-80" />
      </div>
      <div className="w-1/2">
        <div className="text-center">
          {component}
        </div>
      </div>
    </div>
  );
};

export default StaticPage;
