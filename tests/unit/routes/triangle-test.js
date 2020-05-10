import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | triangle', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:triangle');
    assert.ok(route);
  });
});
