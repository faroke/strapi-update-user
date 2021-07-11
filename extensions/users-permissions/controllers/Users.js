'use strict';
const {sanitizeEntity} = require('strapi-utils');
module.exports = {
  async putMe(ctx) {
    const entity = await strapi.query('user', 'users-permissions').update(ctx.state.user.id, ctx.request.body);
    sanitizeEntity(entity, {model: strapi.models.user});
    ctx.send({message : 'User updated'});
  }
};
