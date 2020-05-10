import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tartan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tartan');
    assert.ok(route);
  });
});
