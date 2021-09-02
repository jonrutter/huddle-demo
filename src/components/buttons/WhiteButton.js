import React from 'react';

import Button from 'components/buttons/Button';

const WhiteButton = ({ onClick, children }) => {
  return (
    <Button type="bg-white text-dark hover:text-grey" onClick={onClick}>
      {children}
    </Button>
  );
};

export default WhiteButton;
