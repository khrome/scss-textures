import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vertical_stripes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vertical-stripes');
    assert.ok(route);
  });
});
