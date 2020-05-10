import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | aquatic', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:aquatic');
    assert.ok(route);
  });
});
