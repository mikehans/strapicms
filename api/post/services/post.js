'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async fetchPostsSummary(params, populate) {
    return strapi.query('post').find(params, ['title', 'description', 'published_at']);
  },
  async getPostBySlug(params, populate){
    return strapi.query('post').findOne({sluggie: params});
  }
};
