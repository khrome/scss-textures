import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tight_plaid', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tight-plaid');
    assert.ok(route);
  });
});
