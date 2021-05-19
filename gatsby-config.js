/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    // highlight-start
  {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        
        url: `https://test.latinbodeguitas.com/graphql`,
      },
    },
    
    `gatsby-plugin-sharp`,
    // highlight-end
    /**
     * The following plugins aren't required for gatsby-source-wordpress,
     * but we need them so the default starter we installed above will keep working.
     **/
     {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of WordPress site
        api: `https://test.latinbodeguitas.com`,
        // true if using https. false otherwise.
        https: true,
        api_keys: {
          consumer_key: `ck_40fdd67bac5b86e6768d154ab56a8d337c99fec2`,
          consumer_secret: `cs_437c8be5c5b483e1a6a659fff43ca6947be617b0`,
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories', 'products/attributes'],
      }
    },


  ],
}
