import React from 'react';
import { Link } from 'gatsby';

const SocialLink = ({ label, children }) => {
  return (
    <Link
      aria-label={label}
      className="block border rounded-full p-2 mr-4 hover:text-brand hover:border-brand transition-all"
      to="/"
    >
      {children}
    </Link>
  );
};

export default SocialLink;
