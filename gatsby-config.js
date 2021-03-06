module.exports = {
  siteMetadata: {
    author: "David Seow",
    title: "David Seow - Software testing",
    description: "Software testing, London",
    siteUrl: "https://davidseow.github.io/",
    social: [
      {
        name: "github",
        url: "https://github.com/davidseow",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-5ZTERDQNWV", // Google Analytics / GA
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        /*
        - basePath defaults to `/`
        */
        basePath: `/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
  ],
};
