import { moduleFor, test } from 'ember-qunit';

moduleFor('route:temp-route-for-test', 'Unit | Route | temp route for test', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
