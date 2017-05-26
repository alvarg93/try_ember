import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service('store'),
	model() {
		const store = this.store;
		return store.getOrders();
	}
});
