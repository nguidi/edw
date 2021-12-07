// Initializes the `awards` service on path `/awards`
const { Awards } = require('./awards.class');
const createModel = require('../../models/awards.model');
const hooks = require('./awards.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/awards', new Awards(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('awards');

  service.hooks(hooks);
};
