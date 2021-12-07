const assert = require('assert');
const app = require('../../src/app');

describe('\'nominations\' service', () => {
  it('registered the service', () => {
    const service = app.service('nominations');

    assert.ok(service, 'Registered the service');
  });
});
