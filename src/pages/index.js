import React from 'react';
import { Helmet } from 'react-helmet';

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
    </div>
  );
};

export default IndexPage;
