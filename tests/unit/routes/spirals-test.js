import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | spirals', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:spirals');
    assert.ok(route);
  });
});
