import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		const store = this.get('store');
		const id = params.order_id;
		return store.getOrderById(id);
	},
	store: Ember.inject.service()
});
