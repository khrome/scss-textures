import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | loose_plaid', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:loose-plaid');
    assert.ok(route);
  });
});
