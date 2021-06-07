import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | payments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:payments');
    assert.ok(route);
  });
});
