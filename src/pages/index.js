import React from 'react';
import { Helmet } from 'react-helmet';

import HeroSection from 'components/layout/HeroSection';

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Huddle | Home</title>
        <meta
          name="description"
          content="A demo landing page for a software company. Built with Gatsby and Tailwind CSS"
        />
        <meta name="author" content="Jon Rutter" />
      </Helmet>
      <HeroSection />
      <main></main>
    </div>
  );
};

export default IndexPage;
