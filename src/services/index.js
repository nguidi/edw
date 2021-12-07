const users = require('./users/users.service.js');
const employees = require('./employees/employees.service.js');
const awards = require('./awards/awards.service.js');
const nominations = require('./nominations/nominations.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(employees);
  app.configure(awards);
  app.configure(nominations);
};
