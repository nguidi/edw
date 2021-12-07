// Initializes the `nominations` service on path `/nominations`
const { Nominations } = require('./nominations.class');
const createModel = require('../../models/nominations.model');
const hooks = require('./nominations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/nominations', new Nominations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('nominations');

  service.hooks(hooks);
};
