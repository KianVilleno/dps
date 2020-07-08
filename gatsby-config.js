const dotenv = require("dotenv")

if (process.env.NODE_ENV === "development") {
  dotenv.config({
    path: `.env.development`,
  })
}

module.exports = {
  siteMetadata: {
    title: `Dead Puppet Society`,
    description: `Hell bent on bringing our inimitable brand of entertainment to the world, creating deeply imaginative theatre where the old school meets the technological and the mythic meets the modern.`,
    image: `https://deadpuppetsociety.com.au/static/images/share.jpg`,
    author: `@deadpuppetsociety`,
    siteUrl: `https://deadpuppetsociety.com.au`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "961755364270406",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-theme-ui",
    `gatsby-theme-style-guide`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `12599812`,
        access_token:
          "IGQVJVZAU1aM1dlWWQ0ZAGZAoTjI5SDNHaURtOC03Y1FGaHpBMGNiSlVndmVMN1ZAlNVZA6SlJMM3VZASzJOeHFIWkJrY2ZAYVWdJWlI2Smxwc2p5RkpmY3Y5bk4xRFJaVUhWZADhwQ0ZAHOF9YMUU3cmh1WlJqUQZDZD",
        paginate: 100,
        maxPosts: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dead-puppet-society`,
        short_name: `dps`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
