import React from 'react';

import BrandButton from 'components/buttons/BrandButton';

const CTABox = () => {
  return (
    <div className="max-w-screen-md mx-auto shadow-top py-12 px-6 rounded-2xl transform translate-y-1/2 bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Ready To Build Your Community?
        </h2>
        <BrandButton>Get Started For Free</BrandButton>
      </div>
    </div>
  );
};

export default CTABox;
