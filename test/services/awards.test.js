const assert = require('assert');
const app = require('../../src/app');

describe('\'awards\' service', () => {
  it('registered the service', () => {
    const service = app.service('awards');

    assert.ok(service, 'Registered the service');
  });
});
