import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cubes_down', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cubes-down');
    assert.ok(route);
  });
});
