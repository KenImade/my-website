module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://kennethimade.dev", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Kenneth Imade's Portfolio", // Used in manifest.json
          shortName: "Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          entityName: "Article",
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
            trackingId: "G-GC1CKLLB40",
            anonymize: true, // Default true
            environments: ["production", "development"] // Default ["production"]
        }
      },
    },
  ],
};
