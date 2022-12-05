module.exports = {
  siteMetadata: {
    siteUrl: 'https://jonrutter-huddle-landing-page.netlify.app/',
    title: 'Huddle Landing Page',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF52BF`,
        display: `standalone`,
        icon: 'src/assets/images/icon.png',
      },
    },
  ],
};
