import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | radial_halftone', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:radial-halftone');
    assert.ok(route);
  });
});
