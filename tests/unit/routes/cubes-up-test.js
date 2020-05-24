import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cubes_up', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cubes-up');
    assert.ok(route);
  });
});
