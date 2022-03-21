const { sanitizeEntity } = require('strapi-utils');
'use strict';


/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getBySlug(ctx){
    let entity = await strapi.services.projects.getProjectBySlug(ctx.params.sluggie);

    return sanitizeEntity(entity, {model: strapi.models.projects});
  }
};
