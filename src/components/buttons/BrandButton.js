import React from 'react';

import Button from 'components/buttons/Button';

const BrandButton = ({ onClick, children }) => {
  return (
    <Button type="bg-brand text-white hover:opacity-70" onClick={onClick}>
      {children}
    </Button>
  );
};

export default BrandButton;
