import React from 'react';

// logo
import Logo from 'images/logo.svg';

// components
import WhiteButton from 'components/buttons/WhiteButton';

const Header = () => {
  return (
    <header className="flex justify-between flex-wrap items-center mb-16 gap-4">
      <img
        src={Logo}
        alt="Huddle"
        className="max-w-[124px] md:max-w-[200px] h-auto"
      />
      <WhiteButton>Try It Free</WhiteButton>
    </header>
  );
};

export default Header;
