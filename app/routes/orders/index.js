import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		createOrder(order) {
			this.get('store').saveOrder(order);
			const name = order.get('name');
			alert(name + ' order saved!');
			this.transitionTo('orders.order', order);
		}
	},
	model() {
		const store = this.get('store');
		const model = store.newOrder();
		return store.newOrder();
	},
	store: Ember.inject.service()
});