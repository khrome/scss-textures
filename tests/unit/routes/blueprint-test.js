import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | blueprint', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:blueprint');
    assert.ok(route);
  });
});
