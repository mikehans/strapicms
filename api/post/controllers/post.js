const { sanitizeEntity } = require('strapi-utils');

'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getPostsList(ctx){
    let entities = await strapi.services.post.fetchPostsSummary(ctx.query);

    return entities.map(entity => sanitizeEntity(entity, {model: strapi.models.post}));
  }
};
