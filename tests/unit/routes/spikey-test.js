import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | spikey', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:spikey');
    assert.ok(route);
  });
});
